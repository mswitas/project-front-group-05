import "./App.css";
import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { selectIsRefreshing } from "./redux/auth/selectors";
// import { refreshUser } from "./redux/auth/operations";

import { PrivateRoute } from "./pages/PrivateRoute";
import { RestrictedRoute } from "./pages/RestrictedRoute";
// import Loader from "./service/Loader/Loader";

import SharedLayout from "./pages/SharedLayout/SharedLayout";
const Reports = lazy(() => import("./pages/Reports/Reports"));
const Expences = lazy(() => import("./pages/Expenses/Expenses"));
const Income = lazy(() => import("./pages/Incomes/Incomes"));
const Login = lazy(() => import("./pages/Login/Login"));
const RegisterPage = lazy(() => import("./pages/Register/Register"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<Expences />} />
          }
        />
        <Route
          path="/expenses"
          element={
            <PrivateRoute redirectTo="/login" component={<Expences />} />
          }
        >
          <Route path="/expenses/transactions" element={<Expences />} />
        </Route>
        <Route
          path="/income"
          element={<PrivateRoute redirectTo="/login" component={<Income />} />}
        >
          <Route path="/income/transactions" element={<Income />} />
        </Route>
        <Route
          path="/reports"
          element={<PrivateRoute redirectTo="/login" component={<Reports />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
