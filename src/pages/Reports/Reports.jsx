import BalanceReports from "../../components/Balance/BalanceReports/BalanceReports";
import Chart from "../../components/Chart/Chart";

const Reports = () => {
  const data = [35, 51, 15, 60, 70, 12];
  const labels = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'];
  return (
    <div>
      <BalanceReports />
      <Chart data={data} labels={labels} />
    </div>
  );
};
export default Reports;
