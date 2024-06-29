// import { useMatchMedia } from "../../../hooks/MediaQuery";
import { ChartWrapper, SectionWrapper } from "./Chart.styled";
import { Tooltip, BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

const data = [
  { name: "Chicken", value: 1000, fill: "#FF751D" },
  { name: "Fuel", value: 500, fill: "#FFDAC0" },
  { name: "Beef", value: 8000, fill: "#FFDAC0" },
  // ...
];

const Char = () => {
  return (
    <SectionWrapper>
      <ChartWrapper>
        <BarChart
          width={758}
          height={422}
          data={data}
          margin={{ top: 30, right: 76, bottom: 0, left: 77 }}
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

const TabletChart = () => {
  return (
    <SectionWrapper>
      <ChartWrapper>
        <BarChart
          width={635}
          height={422}
          data={data}
          margin={{ top: 30, right: 15, bottom: 0, left: 15 }}
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
          <rect x={0} y={0} width={635} height={422} fill="url(#stripes)" />

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

// const Chart = () => {
//   return (
//     <SectionWrapper>
//       <ChartWrapper>
//         <BarChart
//           width={280}
//           height={495}
//           data={data}
//           margin={{ top: 30, right:10, bottom: 0, left: 10 }}
//           style={{
//             color: "#52555F",
//             fontFamily: "Roboto",
//             fontSize: 12,
//             fontWeight: 400,
//             lineHeight: 14.06,
//             letterSpacing: 0.02,
//             textAlign: "center",
//           }}
//         >
//           <YAxis dataKey="name" axisLine={true} tickLine={false}></YAxis>
//           <Bar
//             dataKey="value"
//             barSize={15}
//             radius={[10, 10, 0, 0]}
//             itemStyle={(props) => ({ fill: props.payload.fill })}
//           >
//             <LabelList
//               dataKey="value"
//               position="right"
//               formatter={(value) => `${value} UAH`}
//               style={{ whiteSpace: "nowrap" }}
//               width={100}
//               fill="#52555F"
//             />
//           </Bar>
//         </BarChart>
//       </ChartWrapper>
//     </SectionWrapper>
//   );
// };
const Chart = () => {
  return (
    <BarChart width={280} height={495} data={data}>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffffff" stopOpacity={1} />
          <stop offset="95%" stopColor="#ffffff" stopOpacity={1} />
        </linearGradient>
      </defs>
      <rect x={0} y={0} width={500} height={600} fill="url(#bg)" />
      <YAxis type="category" dataKey="name" />
      <Bar
        dataKey="value"
        fill="red"
        barSize={15}
        radius={[10, 10, 0, 0]}
      />
      <Tooltip />
    </BarChart>
  );
};
export default Chart;
