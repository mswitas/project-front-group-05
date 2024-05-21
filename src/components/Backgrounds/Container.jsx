import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
  ImageKapustaDesktop,
  ImageKapustaTablet,
  TitleContainer,
} from "./Container.styled";
import { Loader } from "../../service/Loader/Loader";

import KapustaBottomTablet from "../../assets/kapusta/kapustaBottomDouble.svg";
import KapustaDesktop from "../../assets/kapusta/kapustaDesktop.svg";

const Background = () => {
  return (
    <>
      <TitleContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </TitleContainer>
      <ImageKapustaTablet src={KapustaBottomTablet} alt="Two kapusta" />
      <ImageKapustaDesktop src={KapustaDesktop} alt="kapusta" />
    </>
  );
};
export default Background;
