import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useMediaQuery } from "react-responsive";


import {
  StyledLoginPage,
  Image,
  Background,
  KapustaMobBottom,
  KapustaTabBotLeft,
  KapustaTabBotRight,
  ShadowTabBotLeft,
  ShadowTabBotRight,
  TextWrap,
  Text,
  KapustaMobTop,
  GroupTablet,
  GroupDesktop,
} from "./Login-styled";
import Name from "../../images/union.svg";
import imageMobBg from "../../images/backgroundMobile.png";
import imageTabBg from "../../images/backgroundTablet.png";
import imageDeskBg from "../../images/backgroundDesktop.png";
import kapusta from "../../images/kapusta.svg";
import tabShadow from "../../images/tabEllipse.svg";
import groupTablet from "../../images/groupTablet.png";
import groupDesktop from "../../images/groupDesktop.png";
import halfKapusta from "../../images/half.png";

// Login page
export default function LoginPage() {
  // Media
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <>
      <StyledLoginPage>
        <Background
          imgMobUrl={imageMobBg}
          imgTabUrl={imageTabBg}
          imgDeskUrl={imageDeskBg}
        >
          {/* For mobile */}
          {isMobile && (
            <>
              <KapustaMobTop src={halfKapusta} alt="bg" />
              <KapustaMobBottom src={kapusta} width="83" height="89" />
            </>
          )}
          {/* For Tablet */}
          {isTablet && (
            <>
              <GroupTablet src={groupTablet} alt="bg" />
              <KapustaTabBotLeft src={kapusta} width="83" height="89" />
              <ShadowTabBotLeft src={tabShadow} width="83" height="89" />
              <KapustaTabBotRight src={kapusta} width="83" height="89" />
              <ShadowTabBotRight src={tabShadow} width="83" height="89" />
            </>
          )}
          {/* For desktop */}
          {isDesktop && (
            <>
              <GroupDesktop src={groupDesktop} alt="bg" />
              <KapustaTabBotLeft src={kapusta} width="83" height="89" />
              <ShadowTabBotLeft src={tabShadow} width="83" height="89" />
              <KapustaTabBotRight src={kapusta} width="83" height="89" />
              <ShadowTabBotRight src={tabShadow} width="83" height="89" />
            </>
          )}
          <TextWrap>
            <Image src={Name} alt="Kapusta" />
            <Text>Smart Finance</Text>
          </TextWrap>
          <LoginForm />
        </Background>
      </StyledLoginPage>
    </>
  );
}
