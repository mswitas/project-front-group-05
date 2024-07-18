import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../service/Loader/Loader";
import {
  SharedLayoutContainer,
  ImageKapustaDesktop,
  Background
} from "./SharedLayout-styled";
import Header from "../../components/Header/Header";

import { useLocation } from "react-router-dom";

const SharedLayout = () => {
  // Location
  const location = useLocation();
  const logReg =
    location.pathname === "/register" || location.pathname === "/login";
  return (
    <>
      <SharedLayoutContainer>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {!logReg && <ImageKapustaDesktop/>}
      </SharedLayoutContainer>
    </>
  );
};
export default SharedLayout;
