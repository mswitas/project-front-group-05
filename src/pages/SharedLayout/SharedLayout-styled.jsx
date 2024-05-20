import styled from "styled-components";

export const SharedLayoutContainer = styled.div`

    display: flex;
    flex-direction: column;
    min-width: 320px;
    background-color: rgba(255, 255, 255, 1);
  @media (min-width: 480px) {
    body {
      min-width: 480px;
      max-width: 767px;
    }
  }
  @media (min-width: 768px) {
   
      font-size: 16px;
      line-height: 24px;
      min-width: 768px;
      max-width: 1279px;
  }
  @media (min-width: 1280px) {
      font-size: 16px;
      line-height: 27px;
      min-width: 1280px;
      max-width: 100%;}
  }
`;
