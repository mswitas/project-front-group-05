import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart({ data, labels }) {
  return (
    <BarChart
      series={[{ data: data, color: "#FF751D" }]}
      height={290}
      xAxis={[{ data: labels, scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      borderRadius={16}
    />
  );
}
