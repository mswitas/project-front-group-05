import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMatchMedia } from "../../hooks/MediaQuery";
import { TransactionList } from "../../components/TransactionsList/TransactionList";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import {
  selectIncomeTransactions,
  selectBalance,
} from "../../redux/transactions/selectors";
import { getIncome } from "../../redux/transactions/operations";

import Summary from "../../components/Summary/Summary";
import Balance from "../../components/Balance/MainBalance/Balance";
import { BackButton } from "../../components/ModalButtons/BackButton";
// import Form from "../../components/Form/Form";

import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
} from "../Expenses/Expenses.styled";

// Incomes page
export default function Incomes() {
  // Dispatch
  const dispatch = useDispatch();
  //Media
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  // Selectors
  const allIncomes = useSelector(selectIncomeTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = "green";
  // Get incomes data
  useEffect(() => {
    if (user) dispatch(getIncome());
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
            {allIncomes}
            {color}
          </TransactionList>
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
}
