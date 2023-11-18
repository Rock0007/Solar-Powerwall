import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Api/index";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    area: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(formData);
      const existingSuccessToastId = toast.isActive("signupSuccessToast");

      console.log("User Signup Successful");

      if (!existingSuccessToastId) {
        const successMessage =
          response.data && response.data.message
            ? response.data.message
            : "User registered successfully";

        toast.success(successMessage, {
          position: "bottom-right",
          autoClose: 3000,
          toastId: "signupSuccessToast",
        });
      }

      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
      const existingErrorToastId = toast.isActive("signupErrorToast");

      if (!existingErrorToastId) {
        const errorMessage =
          error.response && error.response.data && error.response.data.error
            ? error.response.data.error
            : "An error occurred during signup";

        toast.error(errorMessage, {
          position: "bottom-right",
          autoClose: 3000,
          toastId: "signupErrorToast",
        });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-50 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="input-style p-2 border rounded-md focus:outline-none focus:border-black w-full text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="joe@gmail.com"
              className="input-style p-2 border rounded-md focus:outline-none focus:border-black w-full text-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input-style p-2 border rounded-md focus:outline-none focus:border-black w-full text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-black"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="input-style p-2 border rounded-md focus:outline-none focus:border-black w-full text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="area"
            className="block text-sm font-semibold text-black"
          >
            Area
          </label>
          <select
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="input-style p-2 border rounded-md focus:outline-none focus:border-black w-full"
            required
          >
            <option value="" disabled className="bg-gray-300">
              Select an area
            </option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded hover:shadow-xl"
        >
          Sign-up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
