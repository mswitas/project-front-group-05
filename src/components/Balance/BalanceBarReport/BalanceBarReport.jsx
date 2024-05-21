import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBalance } from "../../../redux/transactions/operations";

import {
  BalanceForm,
  BalanceBox,
  BalanceText,
  BalanceInput,
  BalanceButton,
} from "./BalanceBarReport.styled";

import EntryModal from "../../Modals/EntryModal/EntryModal";
import BalanceModal from "../../Modals/BalanceModal/BalanceModal";

const BalanceBarReport = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();
  const stateBalance = useSelector((state) => state.transactions.newBalance);
  const dispatch = useDispatch();
  let balance;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    balance = evt.target.balance.value;
  };
  const onClick = () => {
    dispatch(updateBalance({ newBalance: balance }));
    form.current.reset();
  };

  //Modal window
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <BalanceForm onSubmit={handleSubmit} ref={form}>
        <BalanceText id="bilans">Balance:</BalanceText>
        <BalanceBox>
          <BalanceInput
            id="balance"
            name="balance"
            type="number"
            pattern="[0-9, .UAH]*"
            placeholder={`${stateBalance}.00 UAH`}
            required
          />
          <BalanceButton type="submit" onClick={handleModalOpen}>
            CONFIRM
          </BalanceButton>
        </BalanceBox>
        {!stateBalance && <EntryModal />}
      </BalanceForm>
      {modalOpen && (
        <BalanceModal
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={onClick}
          text="SURE"
          balance={balance}
        >
          Are you sure?
        </BalanceModal>
      )}
    </>
  );
};
export default BalanceBarReport;
