import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, fetchUser, refreshUser } from "./operations";

const isPending = (state) => {
  state.isLoading = true;
};

const initialState = {
  user: { id: null, email: null },
  token: null,
  sid: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.user.email = payload.userData.email;
        state.user.id = payload.userData.id;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.user.email = payload.userData.email;
        state.user.id = payload.userData.id;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, _) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.sid = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.refreshToken = payload.refreshToken;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
        state.user.email = payload.data.email;
        state.isLoading = false;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.user.email = payload.email;
      })
      .addCase(login.pending, isPending)
      .addCase(register.pending, isPending)
      .addCase(logout.pending, isPending)
      .addCase(refreshUser.pending, isPending)
      .addCase(fetchUser.pending, isPending)

      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(fetchUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.user = { email: null, id: null };
        state.token = null;
        state.isLoggedIn = false;
        state.refreshToken = null;
        state.sid = null;
      }),
});

export const authReducer = authSlice.reducer;
