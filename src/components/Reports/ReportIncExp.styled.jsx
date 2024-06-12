import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  height: 85px;
  width: 280px;
  text-align: center;
  margin: 0 auto 30px auto;
  background-color: #ffffff;
  box-shadow: 5px 10px 20px 0px #aab2c566;
  border-radius: 20px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 704px;
    border-radius: 30px;
    box-shadow: 0px 10px 60px 0px #aab2c533;
  }

  @media screen and (min-width: 1280px) {
    width: 1035px;
  }
`;

export const StatisticsList = styled.ul`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  color: #52555f;
`;

export const StatisticsElement = styled.li`
  width: 140px;
  height: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  letter-spacing: 0.04em;
  justify-content: space-around;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 10px;
  gap: 4px;
  padding-inline: 10px;
  &.income {
    border-left: 1px solid #e0e5eb;
  }
  @media screen and (min-width: 768px) {
    padding-block: 8px;
    flex-direction: row;
    width: 50%;
    height: 36px;
    gap: 0px;
    &.income {
      padding-left: 20px;
      justify-content: flex-start;
    }
    &.expenses {
      padding-right: 20px;
      justify-content: flex-end;
    }
  }
`;
export const StatsIncome = styled.span`
  color: green;
  display: inline-block;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;
export const StatsExpenses = styled.span`
  color: red;
  display: inline-block;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;
