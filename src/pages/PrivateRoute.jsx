import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsFetchingCurrentUser,
} from "../redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  const shouldRedirect = !isLoggedIn && !isFetchingCurrentUser;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
