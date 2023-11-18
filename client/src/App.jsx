import React from "react";
import axios from "axios";
import { Main } from "./Container/index";
import { Route, Routes } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login, SignUp } from "./Auth";
import { About, Energy, Hardware } from "./Components";

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div
      className="w-screen min-h-screen h-auto flex flex-col items-center justify-center"
      data-theme="light"
    >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/hardware" element={<Hardware />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
