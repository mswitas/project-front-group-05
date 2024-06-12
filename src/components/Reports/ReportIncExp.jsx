import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReports } from "../../redux/reports/selectors";
import { filteredDataAction } from "../../redux/reportsQuery/reportsQuery.slice";

import {
  StatisticsWrapper,
  StatisticsList,
  StatisticsElement,
  StatsIncome,
  StatsExpenses,
} from "./ReportIncExp.styled";


// // Report List
export const ReportIncExp = () => {
  // State
  const [budget, setBudget] = useState("expenses");
  // Selectors
  const { reports } = useSelector(selectReports);
  // Dispatch
  const dispatch = useDispatch();
  // Handle click
  const handleClick = () => {
    if (budget === "expenses") {
      setBudget("income");
      dispatch(filteredDataAction([]));
      return;
    }
    setBudget("expenses");
    dispatch(filteredDataAction([]));
  };

  return (
    <div>
      <StatisticsWrapper>
        <StatisticsList>
          <StatisticsElement className="expenses">
            Expenses:
            <StatsExpenses>
              {reports?.expenses?.expenseTotal ?? 0}.00
            </StatsExpenses>
          </StatisticsElement>
          <StatisticsElement className="income">
            Income:
            <StatsIncome>{reports?.incomes?.incomeTotal ?? 0}.00</StatsIncome>
          </StatisticsElement>
        </StatisticsList>
      </StatisticsWrapper>
    </div>
  );
};
