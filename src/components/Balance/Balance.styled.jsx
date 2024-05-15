import styled from "styled-components";

export const BalanceSection = styled.section`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }
`;
export const BalanceForm = styled.form``;
export const BalanceText = styled.label`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #52555fb2;
`;
export const BalanceInput = styled.input`
  width: 125px;
  height: 44px;
  top: 96px;
  left: 541px;
  gap: 0px;
  border-radius: 16px 0px 0px 0px;
  border: 2px solid #ffffff;
  ::placeholder {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    letter-spacing: 0.02em;
    text-align: right;
    color: #000000;
  }
`;

export const BalanceButton = styled.button``;

export const ReportBox = styled.div``;
export const ReportText = styled.p``;
export const ReportIcon = styled.svg``;

export const SectionBar = styled.svg`
  @media (max-width: 767px) {
    width: ;
    height: ;
    padding: ;
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;
// @media (max-width: 767px) {

// }

// @media (min-width: 768px) {
// }
// @media (min-width: 1280px) {
// }
