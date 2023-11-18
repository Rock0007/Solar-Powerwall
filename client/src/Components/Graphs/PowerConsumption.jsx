import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  totalPowerConsumed,
  totalPowerGenerated,
  totalPowerSaved,
} from "./GraphData";

const PowerConsumptionGraph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("powerConsumptionChart");

    // Ensure the canvas context is cleared before rendering the chart
    if (ctx) {
      const context = ctx.getContext("2d");
      context.clearRect(0, 0, ctx.width, ctx.height);
    }

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartRef.current.destroy();
    };
  }, [data]);

  return (
    <div className="w-full mx-auto mt-10 p-6 flex items-center justify-center">
      {/* Power Consumption Graph - Left Side */}
      <div className="text-center lg:text-left mr-8">
        <canvas id="powerConsumptionChart" width="700" height="400" />
      </div>

      {/* Text Content - Right Side */}
      <div className="text-left">
        <h1 className="font-bold text-xl mb-4">Real-Time Power Consumption</h1>

        <p>
          {" "}
          <span className="font-bold text-md text-pink-600">
            Total Power Generated -{" "}
          </span>
          {totalPowerGenerated} kWh
        </p>
        <p>
          {" "}
          <span className="font-bold text-md text-blue-600">
            Total Power Consumed -{" "}
          </span>
          {totalPowerConsumed} kWh
        </p>
        <p>
          {" "}
          <span className="font-bold text-md text-green-600">
            Total Power Saved -{" "}
          </span>
          {totalPowerSaved} kWh
        </p>
      </div>
    </div>
  );
};

export default PowerConsumptionGraph;
