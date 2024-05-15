// 6.Znakowanie i style komponentu "Bilans" (telefon, tablet i desktop)

// 7. W polu "Bilans" wyświetlany jest twój bilans w stanie

// 8. Po kliknięciu przycisku "Potwierdzić" kwota bilansu jest wysyłana do backendu i zapisywana w store.

// 11. Naciśnięcie przycisku "Przejść do raportów" powoduje przejście do strony Raportów wydatków

import {
  BalanceSection,
  BalanceForm,
  BalanceText,
  BalanceInput,
  BalanceButton,
  ReportBox,
  ReportIcon,
  ReportText,
} from "./Balance.styled";

import icons from '../../../assets/icons.svg'

const BalanceBar = () => {
  return (
    <BalanceSection>
      <BalanceForm autoComplete="off">
        <BalanceText id="bilans">Balance:</BalanceText>
        <BalanceInput
          id="bilans"
          name="bilans"
          type="number"
          placeholder="00.00 PLN"
        />
        <BalanceButton type="submit">CONFIRM</BalanceButton>
      </BalanceForm>
      <ReportBox>
        <ReportText>Reports</ReportText>
        <ReportIcon>
          <use href={`${icons}#reports`}></use>
        </ReportIcon>
      </ReportBox>
    </BalanceSection>
  );
};
export default BalanceBar;
