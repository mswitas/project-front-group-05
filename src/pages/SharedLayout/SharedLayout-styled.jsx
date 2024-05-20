import styled from "styled-components";

export const SharedLayoutContainer = styled.div`
  width: 320px;
  margin: 0px auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
export const OutletContainer = styled.div`
  box-sizing: -box;
  padding-inline: 20px;
  background: inherit;

  @media screen and (min-width: 768px) {
    padding-inline: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-inline: 91px;
  }
`;
