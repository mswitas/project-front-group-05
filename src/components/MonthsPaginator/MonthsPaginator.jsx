import {
  ComponentWrapper,
  PaginatorTitile,
  PaginatorWrapper,
  PaginatorArrow,
  MonthsDisplayer,
  PaginatorButton,
} from "./MonthsPaginator.styled";

import icons from "../../assets/icons.svg";

const MonthsPaginator = () => {
  return (
    <ComponentWrapper>
      <PaginatorTitile>Current period:</PaginatorTitile>
      <PaginatorWrapper>
        <PaginatorButton>
          <PaginatorArrow>
            <use href={`${icons}#left-month-arrow`}></use>
          </PaginatorArrow>
        </PaginatorButton>

        <MonthsDisplayer>SampleMonth</MonthsDisplayer>

        <PaginatorButton>
          <PaginatorArrow>
            <use href={`${icons}#right-month-arrow`}></use>
          </PaginatorArrow>
        </PaginatorButton>
      </PaginatorWrapper>
    </ComponentWrapper>
  );
};
export default MonthsPaginator;
