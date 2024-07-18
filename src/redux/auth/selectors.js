export const selectIsLoggedIn = (store) => store.auth.isLoggedIn;

export const selectUser = (store) => store.auth.user.email;

export const selectToken = (store) => store.auth.token;

export const selectIsFetchingCurrentUser = (store) =>
  store.auth.isFetchingCurrentUser;
