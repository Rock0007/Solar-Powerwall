import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Api/index";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await login(formData);
      const existingSuccessToastId = toast.isActive("loginSuccessToast");

      if (!existingSuccessToastId) {
        toast.success(response.message || "Login successful", {
          position: "bottom-right",
          autoClose: 3000,
          toastId: "loginSuccessToast",
        });
      }

      const token = response.token;
      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      const existingErrorToastId = toast.isActive("loginErrorToast");

      if (!existingErrorToastId) {
        const errorMessage =
          error.response && error.response.data && error.response.data.error
            ? error.response.data.error
            : "Invalid Credentials. please try again!";

        toast.error(errorMessage, {
          position: "bottom-right",
          autoClose: 3000,
          toastId: "loginErrorToast",
        });
      }
    }
  };

  const handleGoogleLogin = () => {
    // Add logic for Google login here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-gray-50 px-12 py-10 shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-black"
            placeholder="joe@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-black"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-black hover:shadow-lg shadow-lg"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-gray-500 hover:text-black underline focus:text-black hover:underline focus:underline"
          >
            Sign-up
          </Link>
        </p>

        <div className="flex items-center mt-4">
          <div className="border-b w-full mr-4"></div>
          <span className="text-sm text-gray-600">or</span>
          <div className="border-b w-full ml-4"></div>
        </div>

        <button
          className="bg-black text-white px-4 py-2 rounded-md flex items-center justify-center mt-4"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="mr-2" /> Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
