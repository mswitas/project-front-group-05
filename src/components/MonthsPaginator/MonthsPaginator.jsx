import {
  ComponentWrapper,
  PaginatorTitile,
  PaginatorWrapper,
  PaginatorWrapper,
  PaginatorArrow,
  MonthsDisplayer,
  PaginatorButton,
} from "./MonthsPaginator.styled";

const MonthsPaginator = () => {
  return (
      <ComponentWrapper>
          
      <PaginatorTitile>Current period:</PaginatorTitile>
          <PaginatorWrapper>
              
        <PaginatorButton>
          <PaginatorArrow></PaginatorArrow>
        </PaginatorButton>

        <MonthsDisplayer></MonthsDisplayer>

        <PaginatorButton>
          <PaginatorArrow></PaginatorArrow>
              </PaginatorButton>
              
          </PaginatorWrapper>
          
    </ComponentWrapper>
  );
};
export default MonthsPaginator;

