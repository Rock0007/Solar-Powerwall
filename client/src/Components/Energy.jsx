import React from "react";
import { Footer, Navbar } from "./index";
import PowerConsumptionGraph from "./Graphs/PowerConsumption";
import { generateRandomData } from "./Graphs/GraphData";
import {
  BatteryStorageGraph,
  GridInteractionGraph,
  CarbonOffsetGraph,
} from "./Graphs/index";

const Energy = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar />
      <div className="w-full mx-auto mt-10 p-6">
        {/* Power Consumption Graph */}
        <h1 className="pl-6 font-bold text-2xl">Power Statistics</h1>
        <PowerConsumptionGraph data={generateRandomData()} />
        {/* Battery Storage Graph Section */}
        <div className="mt-20 bg-black text-white p-6 rounded-lg">
          <h1 className="font-bold text-2xl mb-4">Battery Storage Metrics</h1>
          <BatteryStorageGraph />
        </div>
        <div className="mt-10 bg-gray-200 text-black p-6 rounded-lg">
          <h1 className="font-bold text-2xl">Grid Interaction</h1>
          <GridInteractionGraph />
        </div>
        <div className="mt-10 bg-black text-white p-6 rounded-lg">
          <h1 className="font-bold text-2xl">Carbon Offset</h1>
          <CarbonOffsetGraph />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Energy;
