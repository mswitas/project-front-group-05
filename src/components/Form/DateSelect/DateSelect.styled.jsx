import styled from "styled-components";

export const Picker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .calendarIcon {
    width: 20px;
    height: 20px;
    fill: #52555f;
    margin-right: 5px;
  }
  .datePicker {
    display: flex;
    gap: 8px;
    align-items: center;
    height: 20px;
    font-size: 12px;
    font-weight: 900;
    line-height: calc(14 / 12);
    letter-spacing: 1.04;
    color: #52555f;
    outline: none;
    border: none;
    cursor: pointer;
    :hover,
    :focus {
      color: #ff751d;
    }
    :hover .calendarIcon,
    :focus .calendarIcon {
      fill: #ff751d;
    }
  }
`;
