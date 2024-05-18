import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, addBalance } from "./operations";

const userInitialState = {
  isLoading: false,
  error: null,
  user: {
    balance: "00.00 PLN",
  },
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

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBalance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.balance = action.payload;
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state, action) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const userReducer = userSlice.reducer;
