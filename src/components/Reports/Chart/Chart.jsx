// import { useMatchMedia } from "../../../hooks/MediaQuery";
import { ChartWrapper, SectionWrapper } from "./Chart.styled";
import { BarChart, Bar, XAxis, LabelList } from "recharts";
const colors = ["#FF751D", "#FFDAC0"];
const data = [
  { name: "Chicken", value: 1000, fill: "#FF751D" },
  { name: "Fuel", value: 500, fill: "#FFDAC0" },
  { name: "Beef", value: 8000, fill: "#FFDAC0" },
  // ...
];
// "#FF751D";
const Chart = () => {
  const activeIds = [0, 3, 6, 9, 12, 15];
  return (
    <SectionWrapper>
      <ChartWrapper>
        <BarChart
          width={758}
          height={422}
          data={data}
          margin={{ top: 30, right: 0, bottom: 0, left: 0 }}
          style={{
            color: "#52555F",
            fontFamily: "Roboto",
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 14.06,
            letterSpacing: 0.02,
            textAlign: "center",
          }}
        >
          <defs>
            <pattern
              id="stripes"
              width="100%"
              height="40"
              patternUnits="userSpaceOnUse"
              y="-10"
            >
              <rect x="0" y="0" width="100%" height="2" fill="#F5F6FB" />
              <rect x="0" y="2" width="100%" height="40" fill="#FFFFFF" />
            </pattern>
          </defs>
          <rect x={0} y={0} width={1034} height={422} fill="url(#stripes)" />

          <XAxis dataKey="name" axisLine={false} tickLine={false}></XAxis>
          <Bar
            dataKey="value"
            barSize={38}
            radius={[10, 10, 0, 0]}
            itemStyle={(props) => ({ fill: props.payload.fill })}
          >
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) => `${value} UAH`}
              style={{ whiteSpace: "nowrap" }}
              width={100}
              fill="#52555F"
            />
          </Bar>
        </BarChart>
      </ChartWrapper>
    </SectionWrapper>
  );
};

export default Chart;
