// CarbonOffset.jsx

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CarbonOffset = () => {
  const chartRef = useRef(null);

  // Generate random data for carbon offset
  const carbonOffsetData = Array.from(
    { length: 7 },
    () => Math.floor(Math.random() * 20) + 1
  );

  const totalCarbonOffset = carbonOffsetData.reduce(
    (total, value) => total + value,
    0
  );

  useEffect(() => {
    const ctx = document.getElementById("carbonOffsetChart");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
        datasets: [
          {
            label: "Carbon Offset",
            data: carbonOffsetData,
            backgroundColor: "rgba(46, 204, 113, 0.6)",
            borderColor: "rgba(46, 204, 113, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: "white",
            },
          },
          y: {
            beginAtZero: true,
            max: Math.max(...carbonOffsetData),
            ticks: {
              color: "white",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "white",
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
        <canvas id="carbonOffsetChart" width="700" height="400" />
      </div>

      <div className="text-left">
        <h1 className="font-bold text-xl mb-4">Carbon Offset</h1>
        <p className="text-white">
          <span className="font-bold text-md text-green-600">
            Total Carbon Offset -{" "}
          </span>
          {totalCarbonOffset} tons
        </p>
      </div>
    </div>
  );
};

export default CarbonOffset;
