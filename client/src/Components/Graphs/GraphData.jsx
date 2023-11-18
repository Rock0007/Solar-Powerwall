export const generateRandomData = () => {
  const labels = Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);

  // Generate random data for power consumption, generation, saving, and battery storage
  const powerConsumptionData = Array.from(
    { length: 7 },
    () => Math.floor(Math.random() * 10) + 1
  );
  const powerGenerationData = powerConsumptionData.map(
    (value) => value + Math.floor(Math.random() * 5) + 1
  );
  const powerSavingData = powerConsumptionData.map(
    (value) => Math.floor(Math.random() * value) + 1
  );

  return {
    labels: labels,
    datasets: [
      {
        label: "Power Consumption",
        data: powerConsumptionData,
        fill: false,
        backgroundColor: "rgb(37, 99, 235, 0.5)",
        borderColor: "rgb(37 99 235)",
        tension: 0.1,
      },
      {
        label: "Power Generation",
        data: powerGenerationData,
        fill: false,
        backgroundColor: "rgb(219, 39, 119, 0.5)",
        borderColor: "rgb(219 39 119)",
        tension: 0.1,
      },
      {
        label: "Power Saving",
        data: powerSavingData,
        fill: false,
        backgroundColor: "rgb(22, 163, 74, 0.5)",
        borderColor: "rgb(22 163 74)",
        tension: 0.1,
      },
    ],
  };
};

// Calculate total power consumed
export const totalPowerConsumed = generateRandomData().datasets[0].data.reduce(
  (total, value) => total + value,
  0
);

// Calculate total power generated
export const totalPowerGenerated = generateRandomData().datasets[1].data.reduce(
  (total, value) => total + value,
  0
);

// Calculate total power saved
export const totalPowerSaved = generateRandomData().datasets[2].data.reduce(
  (total, value) => total + value,
  0
);
