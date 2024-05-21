import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  BalanceForm,
  BalanceBox,
  BalanceText,
  BalanceInput,
  BalanceButton,
} from "./BalanceBar.styled";

import {
  selectBalance,
  selectIsLoading,
} from "../../../redux/transactions/selectors";
import { updateBalance } from "../../../redux/transactions/operations";
import DarkModal from "../../ModalWindow/DarkModal";
import LightModal from "../../ModalWindow/LightModal";

const BalanceBar = () => {
  const form = useRef();
  const stateBalance = useSelector(selectBalance);
  const [modalOpen, setIsModalOpen] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  let balance;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    balance = evt.target.balance.value;
  };
  const onClick = () => {
    dispatch(updateBalance({ newBalance: balance }));
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <BalanceForm onSubmit={handleSubmit} autoComplete="off" ref={form}>
        <BalanceText id="balance">Balance:</BalanceText>
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
      </BalanceForm>
      {!stateBalance && <DarkModal />}
      {modalOpen && (
        <LightModal
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={onClick}
          text="SURE"
          balance={stateBalance}
        >
          Are you sure?
        </LightModal>
      )}
    </>
  );
};
export default BalanceBar;
