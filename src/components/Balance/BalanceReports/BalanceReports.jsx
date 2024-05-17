import {
  BalanceSection,
  MainPageLink,
  MainPageText,
  MainPageIcon,
  MonthSlider,
  MobileWrapper,
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
      </MainPageLink>{" "}
      <MobileWrapper>
        <BalanceBarReport />
        <MonthSlider>Monthss</MonthSlider>
      </MobileWrapper>
    </BalanceSection>
  );
};
export default BalanceReports;
