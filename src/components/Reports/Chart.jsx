import React from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIncomeTransactions,
  selectExpensesTransactions,
} from "../../redux/";

const Chart = () => {
  const expenses = useSelector(selectExpensesTransactions);
  const income = useSelector(selectIncomeTransactions);
};
