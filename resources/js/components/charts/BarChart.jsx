import React from 'react';
import Chart from "react-apexcharts";

const BarChart = () => {
    const barChartDataCharts1 = [
        {
          name: "Sales by age",
          data: [20, 30, 40, 20, 45, 30]
        }
      ];
      const barChartOptionsCharts1 = {
        chart: {
          toolbar: {
            show: false
          }
        },
        tooltip: {
          style: {
            fontSize: "12px",
            fontFamily: undefined
          },
          onDatasetHover: {
            style: {
              fontSize: "12px",
              fontFamily: undefined
            }
          },
          theme: "dark"
        },
        xaxis: {
          categories: ["16-20", "21-25", "26-30", "31-35", "36-42", "42+"],
          show: true,
          labels: {
            show: true,
            style: {
              colors: "#A3AED0",
              fontSize: "12px",
              fontWeight: "500"
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          show: true,
          color: "black",
          labels: {
            show: true,
            style: {
              colors: "#CBD5E0",
              fontSize: "14px"
            }
          }
        },
        grid: {
          strokeDashArray: 5,
          yaxis: {
            lines: {
              show: true
            }
          },
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        fill: {
          type: "solid",
          colors: ["#000000"]
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "40px"
          }
        }
      };

    return (
        <div>
        <Chart
        options={barChartOptionsCharts1}
        series={barChartDataCharts1}
        type="bar"
        width="100%"
        height="100%"
      />
        </div>
    );
};

export default BarChart;