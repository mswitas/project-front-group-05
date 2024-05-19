import { createSlice } from "@reduxjs/toolkit";
import {
  fetchExpenses,
  fetchIncome,
  addExpense,
  addIncome,
  deleteTransaction,
  fetchExpensesCategories,
  fetchIncomeCategories,
  updateBalance,
} from "./operations";

const transactionsInitialState = {
  newBalance: 0,
  expensesTransactions: [],
  incomeTransactions: [],
  expensesCategories: [],
  incomeCategories: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionsInitialState,

  extraReducers: (builder) => {
    builder

      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.expensesTransactions = action.payload.filter(
          (transaction) => transaction.type === "expenses"
        );
      })

      .addCase(fetchIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.incomeTransactions = action.payload.filter(
          (transaction) => transaction.type === "income"
        );
      })

      .addCase(addExpense.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.expensesTransactions.push(action.payload);
      })

      .addCase(addIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.incomeTransactions.push(action.payload);
      })

      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })

      .addCase(fetchExpensesCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.expensesCategories = action.payload;
      })
      .addCase(fetchIncomeCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.incomeCategories = action.payload;
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.newBalance = action.payload.newBalance;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "Someone use old function, fix it!";
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
