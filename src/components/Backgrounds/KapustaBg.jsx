import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../../service/Loader/Loader";
import {
  ImageKapusta,
  ImageKapustaBottomMobile,
  ImageKapustaBottomTablet,
  ImageKapustaDesktop,
  ImageKapustaTablet,
  KapustaContainer,
  NameImage,
  TextSmartFinance,
} from "./KapustaBg.styled";

import KapustaMobile from "../../assets/kapusta/kapustaMobile.svg";
import KapustaTablet from "../../assets/kapusta/kapustaTablet.svg";
import KapustaDesktop from "../../assets/kapusta/kapustaDesktop.svg";
import KapustaBottomMobile from "../../assets/kapusta/kapustaBottomMobile.svg";
import KapustaBottomTablet from "../../assets/kapusta/kapustaBottomDouble.svg";
import Name from "../../assets/Name.svg"

const KapustaBg = () => {
  return (
    <>
      <KapustaContainer>
        <NameImage src={Name} alt="App name"/>
        <TextSmartFinance>smart finance</TextSmartFinance>
        <ImageKapusta src={KapustaMobile} alt="kapusta" />
        <ImageKapustaTablet src={KapustaTablet} alt="kapusta" />
        <ImageKapustaDesktop src={KapustaDesktop} alt="kapusta" />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </KapustaContainer>
      <ImageKapustaBottomMobile src={KapustaBottomMobile} alt="kapusta" />
      <ImageKapustaBottomTablet src={KapustaBottomTablet} alt="Two kapusta" />
    </>
  );
};
export default KapustaBg;
