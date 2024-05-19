import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://demokraci-kapusta.onrender.com/";

export const updateBalance = createAsyncThunk(
  "transactions/updateBalance",
  async (value, thunkAPI) => {
    try {
      const data = await axios.patch("/user/balance", value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserBalance = createAsyncThunk(
  "auth/balance",
  async ({ balance }, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.patch("/user/balance", {
        newBalance: balance,
      });
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const fetchExpenses = createAsyncThunk(
  "transactions/fetchExpenses",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/transactions/expenses");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchIncome = createAsyncThunk(
  "transactions/fetchIncome",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/transactions/income");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addExpense = createAsyncThunk(
  "transactions/addExpense",
  async (info, thunkAPI) => {
    try {
      const response = await axios.post("/transactions/expenses", {
        date: info.date,
        description: info.description,
        category: info.category,
        amount: info.amount,
      });
      thunkAPI.dispatch(fetchUserBalance());
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addIncome = createAsyncThunk(
  "transactions/addIncome",
  async (info, thunkAPI) => {
    try {
      const response = await axios.post("/transactions/income", {
        date: info.date,
        description: info.description,
        category: info.category,
        amount: info.amount,
      });
      thunkAPI.dispatch(fetchUserBalance());
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/transactions/${transactionId}`);
      thunkAPI.dispatch(fetchUserBalance());
      thunkAPI.dispatch(fetchExpenses());
      thunkAPI.dispatch(fetchIncome());
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchExpensesCategories = createAsyncThunk(
  "transactions/fetchExpensesCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/categories/expenses");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchIncomeCategories = createAsyncThunk(
  "transactions/fetchIncomeCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/categories/income");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
