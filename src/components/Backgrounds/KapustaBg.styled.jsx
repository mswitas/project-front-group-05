import styled from "styled-components";

export const KapustaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  height: 286px;
  width: 100%;
  background-color: rgba(245, 246, 251, 1);
  border-bottom-left-radius: 30%;
  position: relative;

  @media screen and (min-width: 768px) {
    align-items: stretch;
    min-width: 768px;
    width: 100%;
    height: 526px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
    padding-left: 100px;
    padding-right: 100px;
    height: 526px;
    border-bottom-left-radius: 20%;
  }
`;
export const ImageKapusta = styled.img`
  width: 83px;
  display: flex;
  height: 89px;
  fill: rgba(223, 226, 235, 1);
  /* margin-bottom: 5px; */
  position: absolute;
  top: 104px;
  right: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const ImageKapustaTablet = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 1334px;
    height: 232px;
    fill: rgba(223, 226, 235, 1);
    position: absolute;
    top: 28px;
    left: -250px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const ImageKapustaDesktop = styled.img`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 1334px;
    height: 232px;
    fill: rgba(223, 226, 235, 1);
  }
`;

export const ImageKapustaBottomMobile = styled.img`
  display: flex;
  width: 89px;
  height: 83px;
  fill: rgba(223, 226, 235, 1);
  position: absolute;
  top: 767px;
  left: 35px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ImageKapustaBottomTablet = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 183px;
    height: 142px;
    fill: rgba(223, 226, 235, 1);
    position: absolute;
    top: 826px;
    left: 103px;

    @media screen and (min-width: 1280px) {
      left: 230px;
      top: 658px;
    }
  }
`;
export const NameImage = styled.img`
  width: 183px;
  height: 47px;
  margin-bottom: 5px;
  position: absolute;
  left: 20px;
  top: 86px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    width: 307px;
    height: 78px;
    left: 171px;
    top: 80px;
  }
  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
    top: 308px;
    left: 229px;
  }
`;
export const TextSmartFinance = styled.p`
  text-transform: uppercase;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.15;
  letter-spacing: 0.15em;
  color: #52555f;
  position: absolute;
  left: 11px;
  top: 137px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.18em;
    left: 224px;
    top: 161px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.18em;
    left: 301px;
    top: 428px;
  }
`;
