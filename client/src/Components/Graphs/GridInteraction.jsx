// GridInteraction.jsx

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GridInteraction = () => {
  const chartRef = useRef(null);

  // Generate random data for grid interaction
  const gridInteractionData = Array.from(
    { length: 7 },
    () => Math.random() < 0.5
  );

  const totalGridDraws = gridInteractionData.filter((value) => value).length;
  const totalGridFeeds = gridInteractionData.length - totalGridDraws;

  useEffect(() => {
    const ctx = document.getElementById("gridInteractionChart");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
        datasets: [
          {
            label: "Grid Draws",
            data: gridInteractionData.map((value) => (value ? 1 : 0)),
            backgroundColor: "rgba(13, 148, 136, 0.6)",
            borderColor: "rgba(13, 148, 136, 1)",
            borderWidth: 1,
          },
          {
            label: "Grid Feeds",
            data: gridInteractionData.map((value) => (value ? 0 : 1)),
            backgroundColor: "rgba(82, 82, 82, 0.6)",
            borderColor: "rgba(82, 82, 82, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: "black",
            },
          },
          y: {
            beginAtZero: true,
            max: 1,
            ticks: {
              color: "black",
            },
          },
        },
      },
    });

    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return (
    <div className="w-full mx-auto mt-10 p-6 flex items-center justify-center">
      <div className="text-center lg:text-left mr-8">
        <canvas id="gridInteractionChart" width="700" height="400" />
      </div>

      <div className="text-left">
        <h1 className="font-bold text-xl mb-4">Grid Interaction</h1>
        <p className="text-black">
          <span className="font-bold text-md text-teal-600">Grid Draws - </span>
          {totalGridDraws}
        </p>
        <p className="text-black">
          <span className="font-bold text-md text-neutral-600">
            Grid Feeds -{" "}
          </span>
          {totalGridFeeds}
        </p>
      </div>
    </div>
  );
};

export default GridInteraction;
