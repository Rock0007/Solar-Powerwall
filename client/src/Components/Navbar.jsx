import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, getProfile, logout } = useAuth();
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-orange-900 via-black to-black text-white py-6 px-10 flex justify-between items-center z-10 shadow-xl">
      {/* Left side */}
      <Link
        to="/"
        className="text-3xl italic font-bold select-none text-orange-400 rounded-sm"
      >
        Solar
      </Link>

      {/* Middle - Routes */}
      <div className="space-x-8 select-none">
        <Link
          to="/"
          className="hover:text-gray-300 transition duration-300 italic font-medium select-none"
        >
          Home
        </Link>
        <Link
          to="/energy"
          className="hover:text-gray-300 transition duration-300 italic font-medium select-none"
        >
          Energy
        </Link>
        <Link
          to="/hardware"
          className="hover:text-gray-300 transition duration-300 italic font-medium select-none"
        >
          Hardware
        </Link>
        <Link
          to="/about"
          className="hover:text-gray-300 transition duration-300 italic font-medium select-none"
        >
          About
        </Link>
      </div>

      {user ? (
        <div className="flex items-center space-x-4 select-none">
          <div className="rounded-full h-8 w-8 bg-gray-300"></div>
          <span className="text-white">{user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 select-none"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 select-none">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
