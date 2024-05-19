import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  BalanceForm,
  BalanceBox,
  BalanceText,
  BalanceInput,
  BalanceButton,
} from "./BalanceBar.styled";

import { selectBalance } from "../../../redux/transactions/selectors";
import { updateBalance } from "../../../redux/transactions/operations";

const BalanceBar = () => {
  const form = useRef();
  const stateBalance = useSelector(selectBalance);
  const dispatch = useDispatch();
  let balance;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    balance = evt.target.balance.value;
  };
  const onClick = () => {
    dispatch(updateBalance({ newBalance: balance }));
  };
  return (
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
        <BalanceButton type="submit" onClick={onClick}>
          CONFIRM
        </BalanceButton>
      </BalanceBox>
    </BalanceForm>
  );
};
export default BalanceBar;
