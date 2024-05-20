// App.js
import "./App.css";
import React, { lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import ModalLogReg from "./components/ModalLogReg/ModalLogReg";

const Reports = lazy(() => import("./pages/Reports/Reports"));
const Expences = lazy(() => import("./pages/Expences/Expences"));
const Income = lazy(() => import("./pages/Income/Income"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Zaloguj się lub zarejestruj</button>
      {showModal && <ModalLogReg onClose={handleCloseModal} />}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Expences />} />
          <Route path="/expences" element={<Expences />} />
          <Route path="/income" element={<Income />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
