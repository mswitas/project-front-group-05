import BalanceReports from "../../components/Balance/BalanceReports/BalanceReports";
import Chart from '../../components/Reports/Chart/Chart'
import { ReportIncExp } from "../../components/Reports/ReportsIncExp/ReportIncExp";
import { Background } from "./Reports.styled";

const Reports = () => {
  const data = [35, 51, 15, 60, 70, 12];
  const labels = ["L1", "L2", "L3", "L4", "L5", "L6"];
  return (
    <Background>
      <BalanceReports />
      <ReportIncExp />
      <Chart data={data} labels={labels} />
    </Background>
  );
};
export default Reports;
