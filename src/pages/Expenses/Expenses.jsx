import React from "react";
// import Form from "../../components/Form/Form";
import Summary from "../../components/Summary/Summary";
import { TransactionList } from "../../components/TransactionsList/TransactionList";
import { BackButton } from "../../components/ModalButtons/BackButton";
import { useMatchMedia } from "../../hooks/MediaQuery";
import Balance from "../../components/Balance/MainBalance/Balance";
import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
} from "./Expenses.styled";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../../redux/transactions/operations";
import {
  selectBalance,
  selectExpensesTransactions,
} from "../../redux/transactions/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Expenses = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const dispatch = useDispatch();
  const allExpenses = useSelector(selectExpensesTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = "red";

  useEffect(() => {
    if (user) {
      dispatch(getExpenses());
    }
  }, [dispatch, user, balance]);

  return (
    <>
      {isMobile && (
        <>
          <BackButton />
        </>
      )}
      <Balance />
      <StyledBg />
      <StyledFrame>
        {/* <Form /> */}
        <StyledTableAndSummaryDiv>
          <TransactionList>
            {allExpenses}
            {color}
          </TransactionList>
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
};

export default Expenses;
