import {
  BalanceSection,
  MainPageLink,
  MainPageText,
  MainPageIcon,
  MobileWrapper,
} from "./BalanceReports.styled";
import MonthsPaginator from "../../MonthsPaginator/MonthsPaginator";

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
      <MobileWrapper>
        <BalanceBarReport />
        <MonthsPaginator />
      </MobileWrapper>
    </BalanceSection>
  );
};
export default BalanceReports;
