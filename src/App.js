import "./App.css";
import React, { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import { PrivateRoute } from "./pages/PrivateRoute";
import { RestrictedRoute } from "./pages/RestrictedRoute";
import Loader from "./service/Loader/Loader";

const Reports = lazy(() => import("./pages/Reports/Reports"));
const Expences = lazy(() => import("./pages/Expences/Expences"));
const Income = lazy(() => import("./pages/Income/Income"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<SharedLayout />}> */}
        <Route index element={<Expences />} />
        <Route path="/expences" element={<Expences />} />
        <Route path="/income" element={<Income />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;
