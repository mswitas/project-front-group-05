export const getUser = (state) => state.auth.user;
export const getLoadingStatus = (state) => state.auth.isLoading;
export const getLogStatus = (state) => state.auth.isLoggedIn;
export const getToken = (state) => state.auth.token;
export const getSuccessToken = (state) => state.auth.accessToken;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
