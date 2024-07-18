import { ChartWrapper, SectionWrapper } from "./Chart.styled";
import Chart from "react-apexcharts";
import { useMatchMedia } from "../../../hooks/MediaQuery";

const data = [
  { x: "Chicken", y: 1000 },
  { x: "Fuel", y: 500 },
  { x: "Beef", y: 800 },
  { x: "Turkey", y: 250 },
  { x: "Honey", y: 550 },
];

const ChartComponent = () => {
  //Data handling
  const sortedData = data.sort((a, b) => b.y - a.y);

  //Media
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const options = {
    chart: {
      padding: {
        left: 0,
        right: 300,
        top: 30,
        bottom: 50,
      },
      width: "90%",
      height: "90%",
      type: "bar",
      redrawOnParentResize: true,
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: "end",
        columnWidth: 38,
        distributed: true,
        hideZeroBarsWhenGrouped: true,
        backgroundBarOpacity: 1,
        dataLabels: {
          position: "top",
          minWidth: 0,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `${val} UAH`;
      },
      style: {
        fontSize: 12,
        fontFamily: "Roboto",
        fontWeight: 400,
        colors: ["#52555F"],
      },
      offsetY: -25,
      distributed: false,
    },
    xaxis: {
      categories: sortedData.map((item) => item.x),
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      colors: ["#FF751D", "#FFDAC0", "#FFDAC0"],
    },
    grid: {
      show: true,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          yaxis: {
            labels: {
              minWidth: 0,
              show: true,
              textAnchor: "end",
              offsetX: 60,
              offsetY: -20,
              style: {
                fontSize: 12,
                fontFamily: "Roboto",
                fontWeight: 400,
                colors: ["#52555F"],
              },
            },
          },
          xaxis: {
            show: false,
            labels: {
              minWidth: 0,
              show: false,
            },
          },
          grid: {
            show: false,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: 15,
            },
          },
          dataLabels: {
            enabled: true,
            offsetY: -20,
            offsetX: 40,
            position: "center",
          },
        },
      },
    ],
  };

  const series = [
    {
      data: sortedData.map((item) => item.y),
    },
  ];

  return (
    <SectionWrapper>
      <ChartWrapper>
        <Chart
          options={options}
          series={series}
          type="bar"
          height={(isMobile && 493) || (isTablet && 410) || (isDesktop && 422)}
        />
      </ChartWrapper>
    </SectionWrapper>
  );
};

export default ChartComponent;
