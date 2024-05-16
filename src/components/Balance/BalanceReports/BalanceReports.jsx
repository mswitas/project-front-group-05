import {
  BalanceSection,
 
} from "./BalanceReports.styled";

import BalanceBarReport from "../BalanceBarReport/BalanceBarReport";
import icons from "../../../assets/icons.svg";

const BalanceReports = () => {
  return (
    <BalanceSection>
      <BalanceBarReport />
    </BalanceSection>
  );
};
export default BalanceReports;
