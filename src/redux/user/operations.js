import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//TYPE URL
axios.defaults.baseURL = "";

export const fetchUser = createAsyncThunk(
  "user",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/user");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addBalance = createAsyncThunk(
  "user/balance",
  async (newBalance, thunkAPI) => {
    try {
      const response = await axios.patch("/contacts", newBalance);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);