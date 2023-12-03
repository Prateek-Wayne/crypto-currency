import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = ({ historyData }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  if (historyData?.data) {
    for (let i = 0; i < historyData?.data?.history.length; i += 1) {
      coinPrice.push(historyData?.data?.history[i].price);
      coinTimeStamp.push(
        new Date(historyData?.data?.history[i].timestamp).toLocaleDateString(),
      );
    }
  }
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backGroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    //    <Grid xs={11}>

    <div>
      <Line
        style={{ height: "500px", width: "1000px" }}
        data={data}
        options={options}
      />
    </div>
  );
};

export default LineChart;
