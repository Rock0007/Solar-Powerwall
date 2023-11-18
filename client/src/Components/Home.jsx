import React from "react";
import { Footer, Navbar } from "./index";
import { Home3, Home2, Home4, Home_Vid_1 } from "../Assets/index";

const Home = () => {
  return (
    <div className="w-full min-h-screen ">
      <Navbar />
      {/* Section - 1 */}
      <div className="flex w-full mx-auto mt-28 p-6 max-w-5xl">
        {/* Left Section - Text */}
        <div className="w-2/3 pr-8">
          <h1 className="text-6xl font-extrabold text-black mb-6">
            Next-Gen Solar Monitoring <br />
          </h1>
          <p className="text-black mb-4">
            At Solar Powerwall, we embark on a transformative journey to
            revolutionize the way we capture and oversee solar power
            utilization. Our unparalleled fusion of state-of-the-art software
            and avant-garde hardware not only propels technological boundaries
            but also empowers individuals to adopt and integrate sustainable
            energy methodologies seamlessly.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-2/3">
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Home_Vid_1} type="video/mp4" />
          </video>
        </div>
      </div>
      {/*  Section - 2 */}
      <div className="flex w-full mx-auto mt-28 p-6 max-w-5xl">
        {/* Left Section - Image */}
        <div className="w-2/1 mx-auto">
          <img
            src={Home2}
            alt="Sustainable Living"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-1/2 pl-8">
          <h2 className="text-6xl font-extrabold text-black mb-6 text-left">
            Our Purpose
          </h2>
          <p className="text-black mb-4 text-left">
            Our project is underpinned by a resolute commitment to sustainable
            development, with the overarching goal of ushering in a cleaner,
            greener future through the widespread adoption of solar power. This
            dedication is manifest in our meticulous approach to innovative
            hardware integration, where cutting-edge electrical devices are
            crafted. Through the incorporation of advanced sensors, cellular
            devices, and communication modules, we strive to optimize the
            efficiency of our solar power infrastructure, setting high standards
            for execution and technical expertise.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-black text-white py-20 mt-28">
        <div className="w-full mx-auto text-center">
          <img
            src={Home3}
            alt="Solar Panels"
            className="mx-auto mb-8 rounded-lg"
          />
          <h1 className="text-4xl font-extrabold mb-4">
            Empowering Tomorrow with Solar Energy
          </h1>
          <p className="text-lg">
            Harness the power of the sun to create a sustainable future.
          </p>
        </div>
      </div>
      {/* About Section */}
      <div className="w-full mx-auto mt-24 p-6 max-w-5xl flex">
        {/* Left Section - Text */}
        <div className="w-2/3 pr-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission and Goals</h2>
          <p className="text-black mb-4">
            At the heart of our project lies a commitment to forging a
            sustainable future. Our goal is to harness solar power to its
            fullest potential, driving innovation in hardware and software
            integration. We strive to empower users with real-time insights into
            energy generation, consumption, and savings. With a mission to
            optimize solar infrastructure, we aim to set new standards for
            efficiency and environmental impact. Our journey is guided by a
            vision of cleaner, greener living, achieved through cutting-edge
            technology and a resolute dedication to sustainable development.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-2/1">
          <img
            src={Home4}
            alt="Solar Panels"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      {/*  */}
      <div className="bg-black text-white">
        <div className="w-full mx-auto mt-24 max-w-5xl flex">
          {/* Left Section - Key Features */}
          <div className="w-1/2 pr-8 py-16 mt-10">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Real-time monitoring of solar panel efficiency</li>
              <li>Advanced sensors for precise energy data</li>
              <li>IoT connectivity for seamless data transmission</li>
              <li>Smart battery storage optimization</li>
              {/* Add more features as needed */}
            </ul>
          </div>

          {/* Right Section - Benefits */}
          <div className="w-2/3 pl-8 py-16 mt-10">
            <h2 className="text-3xl font-bold mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Maximized energy savings through data-driven insights</li>
              <li>
                Positive environmental impact with sustainable energy usage
              </li>
              <li>Enhanced grid reliability and reduced power outages</li>
              {/* Add more benefits as needed */}
            </ul>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="w-full mx-auto py-10 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-300 mb-4 pb-12">
            Our platform orchestrates a seamless integration of cutting-edge
            hardware and software, starting with the placement of solar panels
            on rooftops. Advanced sensors capture real-time data on solar
            irradiance, panel temperature, and energy consumption. This
            information is transmitted through IoT devices to our user-friendly
            dashboards, offering users a comprehensive view of their energy
            usage trends. The system intelligently optimizes battery storage,
            ensuring a continuous and efficient power supply. Users can
            effortlessly navigate through interfaces, gaining valuable insights
            for informed decision-making and contributing to a sustainable,
            greener future.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
