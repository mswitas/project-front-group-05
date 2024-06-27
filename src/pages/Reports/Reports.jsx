import BalanceReports from "../../components/Balance/BalanceReports/BalanceReports";
import Chart from '../../components/Reports/Chart/Chart'
import { ReportIncExp } from "../../components/Reports/ReportsIncExp/ReportIncExp";
import { Background } from "./Reports.styled";



const Reports = () => {

  //Data
  const data = [
    { name: "Chicken", value: 1000 },
    { name: "Fuel", value: 800 },
    { name: "Beef", value: 600 },
  ];

  return (
    <Background>
      <BalanceReports />
      <ReportIncExp />
      <Chart data={data} />
    </Background>
  );
};
export default Reports;
