import React from 'react';
import ReactApexChart from "react-apexcharts";

const PieChart = (props) => {
    let pieChartData = props.pieChartData ;
    const pieChartOptions = {
        labels: ["Devis/Proposition", "Négociation", "Gagnée", "Perdue"],
        colors: ["#FBC42D", "#6AD2FF",  "#09A837", "#D9534F"],
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
          enabled: false
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
          colors: ["#FBC42D", "#6AD2FF",  "#09A837", "#D9534F",]
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