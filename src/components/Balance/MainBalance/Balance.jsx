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
        <NavLink>
          <ReportIcon to="/reports">
            <use href={`${icons}#reports`}></use>
          </ReportIcon>
        </NavLink>
      </ReportBox>
    </BalanceSection>
  );
};
export default Balance;
