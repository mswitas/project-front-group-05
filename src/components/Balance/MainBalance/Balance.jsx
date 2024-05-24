import {
  BalanceSection,
  ReportBox,
  ReportIcon,
  ReportText,
  Link,
} from "./Balance.styled";

import BalanceBar from "../BalanceBar/BalanceBar";
import icons from "../../../assets/icons.svg";

const Balance = () => {
  return (
    <BalanceSection>
      <BalanceBar />
      <ReportBox>
        <ReportText>Reports</ReportText>
        <Link to="/reports">
          <ReportIcon width="14px" height="14px">
            <use href={`${icons}#reports`}></use>
          </ReportIcon>
        </Link>
      </ReportBox>
    </BalanceSection>
  );
};
export default Balance;
