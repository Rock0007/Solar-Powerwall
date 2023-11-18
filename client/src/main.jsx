import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "./Context/AuthContext";

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
