import {
  BalanceForm,
  BalanceBox,
  BalanceText,
  BalanceInput,
  BalanceButton,
} from "./BalanceBar.styled";

const BalanceBar = () => {
  return (
    <BalanceForm autoComplete="off">
      <BalanceText id="bilans">Balance:</BalanceText>
      <BalanceBox>
        <BalanceInput
          id="bilans"
          name="bilans"
          type="number"
          placeholder="00.00 PLN"
        />
        <BalanceButton type="submit">CONFIRM</BalanceButton>
      </BalanceBox>
    </BalanceForm>
  );
};
export default BalanceBar;
