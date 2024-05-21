import styled from "styled-components";

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: auto;
margin-right: auto;
width:280px;
height:500px
}

@media screen and (min-width: 768px) {
.container {
  align-items: stretch;
  padding-left: 50px;
  padding-right: 50px;
  width: 768px;
}
}

@media screen and (min-width: 1280px) {
.container {
  height:500px;
  width: 1260px;
  padding-left: 100px;
  padding-right: 100px;
}
}`;
export const ImageKapustaDesktop = styled.img`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 1334px;
    height: 232px;
    fill: rgba(223, 226, 235, 1);
    margin: -100 auto 0 auto;
  }
`;
export const ImageKapustaTablet = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 183px;
    height: 142px;
    fill: rgba(223, 226, 235, 1);
    position: absolute;
    left: 497px;

    @media screen and (min-width: 1280px) {
      left: 230px;
      top: 658px;
    }
  }
`;
