import React from 'react';
import ReactApexChart from "react-apexcharts";

const PieChart = (props) => {
    let pieChartData = props.pieChartData ;
    const pieChartOptions = {
        labels: ["Devis/Proposition", "Négociation", "Perdue", "Gagnée"],
        colors: ["#FBC42D", "#6AD2FF", "#D9534F",  "#09A837"],
        chart: {
          width: "50px"
        },
        states: {
          hover: {
            filter: {
              type: "none"
            }
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: true,

        },
        hover: { mode: null },
        plotOptions: {
          donut: {
            expandOnClick: false,
            donut: {
              labels: {
                show: false
              }
            }
          }
        },
        fill: {
          colors: ["#FBC42D", "#6AD2FF",  "#D9534F", "#09A837",]
        },
        tooltip: {
          enabled: true,
          theme: "dark"
        }
      };
    return (
        <div>
        <ReactApexChart
        options={pieChartOptions}
        series={pieChartData}
        type="pie"
        width="100%"
        height="180%"
        />
        </div>
    );
};

export default PieChart;