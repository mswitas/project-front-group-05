import styled from "styled-components";
import backgroundMobile from "../../images/backgroundMobile.png";
import backgroundTablet from "../../images/backgroundTablet.png";
import backgroundDesktop from "../../images/backgroundDesktop.png";
import backGroundDiagram from "../../images/bgDeskKapusta.png";
import backgroundTableTabl from "../../images/kapustaTab.svg";
export const Background = styled.div`
  background-image: url(${backgroundMobile});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    /* margin: 0 32px; */
    padding: 0 32px;
    background-image: url(${backgroundTablet}), url(${backgroundTableTabl});
    background-size: 100%, 25%;
    background-position: top, bottom -40px right 88px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 123px;
    background-image: url(${backgroundDesktop}), url(${backGroundDiagram});
    background-size: 100%;
    background-position: top, bottom;
  }
`;
