import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BatteryGraph = () => {
  const chartRef = useRef(null);

  const batteryStorageData = Array.from(
    { length: 7 },
    () => Math.floor(Math.random() * 20) + 1
  );

  const totalBatteryStorage = batteryStorageData.reduce(
    (total, value) => total + value,
    0
  );

  useEffect(() => {
    const ctx = document.getElementById("batteryGraph");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
        datasets: [
          {
            label: "Battery Storage Metrics",
            data: batteryStorageData,
            backgroundColor: "rgb(250, 204, 21, 0.6)",
            borderColor: "rgba(255, 206, 86, 1)",
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
            max: Math.max(...batteryStorageData),
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
    <div className="w-full mx-auto p-6 flex items-center justify-center">
      {/* Power Consumption Graph - Left Side */}
      <div className="text-center lg:text-left mr-8">
        <canvas id="batteryGraph" width="700" height="400" />
      </div>

      {/* Text Content - Right Side */}
      <div className="text-left">
        <h1 className="font-bold text-xl mb-4">Real-Time Battery Storage</h1>

        <p className="text-white">
          {" "}
          <span className="font-bold text-md text-amber-600">
            Battery Storage -{" "}
          </span>
          {totalBatteryStorage} kWh
        </p>
      </div>
    </div>
  );
};

export default BatteryGraph;
