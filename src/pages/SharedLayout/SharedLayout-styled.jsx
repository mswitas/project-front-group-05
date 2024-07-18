import styled from "styled-components";

import imageTabBg from "../../images/backTablet.png";
import imageDeskBg from "../../images/bgDeskKapusta.png";

export const SharedLayoutContainer = styled.div`
  display: flex;
  box-shadow: 5px 10px 20px 0px #aab2c566;
  flex-direction: column;
  height: 300vh;
  width: 320px;
  margin: 0px auto;
  background-color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const ImageKapustaDesktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    z-index: 0;
    position: absolute;
    display: flex;
    align-items: center;
    top: 1030px;
    left: 60%;
    width: 183px;
    height: 280px;
    background-image: url(${imageTabBg});
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    top: -100px;
    left: 10px;
    flex-direction: row;
    justify-content: center;
    width: 1280px;
    height: 232px;
    background-image: url(${imageDeskBg});
    background-repeat: no-repeat;
  }
`;
