import React from "react";
import { Navbar, Footer } from "./index";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10 px-20 mb-20">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-gray-700 mb-6">
          Welcome to Solar Powerwall! We are passionate about harnessing the
          power of solar energy to create a sustainable future. Our journey
          began with a vision to revolutionize solar power consumption, reduce
          carbon footprints, and promote renewable energy solutions.
        </p>

        <p className="text-gray-700 mb-6">
          At Solar Powerwall, we've leveraged the MERN (MongoDB, Express.js,
          React, Node.js) stack to develop a cutting-edge platform that
          seamlessly integrates hardware and software. This powerful combination
          allows us to provide real-time insights into solar power consumption,
          personalized dashboards, historical usage trends, and valuable
          insights for our users.
        </p>

        <p className="text-gray-700 mb-6">
          Our commitment extends beyond technological innovation; it's about
          instilling a sense of responsibility and championing a greener, more
          sustainable way of living. Join us on this transformative journey as
          we empower individuals to adopt and integrate sustainable energy
          practices seamlessly.
        </p>

        {/* Tech Team Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Tech Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <img
                src="https:via.placeholder.com/100/100"
                alt="Team Member 1"
                className="rounded-full mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2">Sai Pranav Morisetty</h2>
              <a
                href="https:www.linkedin.com/in/sai-pranav-morisetty-965b67261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <FaLinkedin size={20} className="inline-block mr-1" />
              </a>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <img
                src="https:via.placeholder.com/100/100"
                alt="Team Member 2"
                className="rounded-full mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2">Laxmi Narayana</h2>
              <a
                href="https:www.linkedin.com/in/kasturi-laxmi-narayana-452793262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <FaLinkedin size={20} className="inline-block mr-1" />
              </a>
            </div>

            {/* Additional Team Member Cards */}
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <img
                src="https:via.placeholder.com/100/100"
                alt="Team Member 3"
                className="rounded-full mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2">Sanveer Reddy</h2>
              <a
                href="https:www.linkedin.com/in/sanveer-reddy-meda-b744b1242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <FaLinkedin size={20} className="inline-block mr-1" />
              </a>
            </div>

            {/*  */}
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <img
                src="https:via.placeholder.com/100/100"
                alt="Team Member 2"
                className="rounded-full mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2">Varshith Thungapalli</h2>
              <a
                href="https:www.linkedin.com/in/varshith-thungapalli-b862b3262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <FaLinkedin size={20} className="inline-block mr-1" />
              </a>
            </div>
            {/*  */}
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <img
                src="https:via.placeholder.com/100/100"
                alt="Team Member 2"
                className="rounded-full mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2">Lokesh Raju</h2>
              <a
                href="https:www.linkedin.com/in/lokesh-raju-4429b2213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <FaLinkedin size={20} className="inline-block mr-1" />
              </a>
            </div>

            {/* Adjust the size, padding, and add more team members as needed */}
          </div>
        </div>
      </div>
      ;
      <Footer />
    </div>
  );
};

export default About;
