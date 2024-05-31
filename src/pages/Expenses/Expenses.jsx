import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMatchMedia } from "../../hooks/MediaQuery";
import { TransactionList } from "../../components/TransactionsList/TransactionList";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import {
  selectBalance,
  selectExpensesTransactions,
} from "../../redux/transactions/selectors";
import { getExpenses } from "../../redux/transactions/operations";

import Form from "../../components/Form/Form";
import Summary from "../../components/Summary/Summary";
import Balance from "../../components/Balance/MainBalance/Balance";
import { BackButton } from "../../components/ModalButtons/BackButton";


import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
} from "./Expenses.styled";

// Expenses page
const Expenses = () => {
  //Media
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  // Dispatch
  const dispatch = useDispatch();
  // Selectors
  const allExpenses = useSelector(selectExpensesTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = "red";
  // Get expenses data
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
        <Form />
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
