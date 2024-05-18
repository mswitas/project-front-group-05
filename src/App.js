
import { Routes, Route } from "react-router-dom";
import * as React from "react";
import "./App.css";
import { lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ReportsPage = lazy(() => import("./pages/ReportsPage.jsx"));

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route
          path="/project-front-group-05/reports"
          element={<ReportsPage />}
        ></Route>
      </Routes>
    </ChakraProvider>
  );


export default App;
