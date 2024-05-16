// 6.Znakowanie i style komponentu "Bilans" (telefon, tablet i desktop)

// 7. W polu "Bilans" wyświetlany jest twój bilans w stanie

// 8. Po kliknięciu przycisku "Potwierdzić" kwota bilansu jest wysyłana do backendu i zapisywana w store.

// 11. Naciśnięcie przycisku "Przejść do raportów" powoduje przejście do strony Raportów wydatków

import {
  BalanceSection,
  ReportBox,
  ReportIcon,
  ReportText,
} from "./Balance.styled";

import BalanceBar from "../BalanceBar/BalanceBar";
import icons from "../../../assets/icons.svg";

const Balance = () => {
  return (
    <BalanceSection>
      <BalanceBar />
      <ReportBox>
        <ReportText>Reports</ReportText>
        <ReportIcon>
          <use href={`${icons}#reports`}></use>
        </ReportIcon>
      </ReportBox>
    </BalanceSection>
  );
};
export default Balance;
