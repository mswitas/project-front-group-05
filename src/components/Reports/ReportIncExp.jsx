import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectReports} from '../../redux/reports/selectors'
import { filteredDataAction } from "../../redux/reportsQuery/reportsQuery.slice";

import {
  StatisticsWrapper,
  StatisticsList,
  StatisticsElement,
  StatsIncome,
  StatsExpenses,
} from "./ReportIncExp.styled";
import { filteredDataAction } from "../../redux/reportsQuery/reportsQuery.slice";

// // Report List
export const ReportIncExp = () => {
  return (
    <div>
      <StatisticsWrapper>
        <StatisticsList>
          <StatisticsElement className="expenses">
            Expenses:
            <StatsExpenses>111</StatsExpenses>
          </StatisticsElement>
          <StatisticsElement className="income">
            Income:
            <StatsIncome>111</StatsIncome>
          </StatisticsElement>
        </StatisticsList>
      </StatisticsWrapper>
    </div>
  );
};

