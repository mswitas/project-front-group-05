import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BalanceSection = styled.section`
  box-sizing: border-box;
  background: #f2f5fc;
  display: flex;
  align-items: center;
  height: 128px;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 32px;
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
    gap: 30vw;
  }
`;

export const ReportBox = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 767px) {
    width: 84px;
    height: 24px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ReportText = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  letter-spacing: 0.04em;
  color: #52555fb2;
  padding: 0px;
  margin: 0px;
  padding-top: 7px;
`;
export const ReportIcon = styled.svg`
  width: 14px;
  height: 14px;
  padding: 5px;
  text-align: center;
`;

export const SectionBar = styled.svg`
  @media (max-width: 767px) {
    width: ;
    height: ;
    padding: ;
    margin-bottom: 8px;
  }
`;
export const Link = styled(NavLink)``;