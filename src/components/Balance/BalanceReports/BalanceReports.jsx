import {
  BalanceSection,
  MainPageLink,
  MainPageText,
    MainPageIcon,
  MonthSlider
} from "./BalanceReports.styled";

import BalanceBarReport from "../BalanceBarReport/BalanceBarReport";
import icons from "../../../assets/icons.svg";

const BalanceReports = () => {
  return (
    <BalanceSection>
      <MainPageLink>
        <MainPageIcon>
          <use href={`${icons}#back-arrow`}></use>
        </MainPageIcon>
        <MainPageText>Main page</MainPageText>
      </MainPageLink>
          <BalanceBarReport />
          <MonthSlider>Monthss</MonthSlider>
    </BalanceSection>
  );
};
export default BalanceReports;
