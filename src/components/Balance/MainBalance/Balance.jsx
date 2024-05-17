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
