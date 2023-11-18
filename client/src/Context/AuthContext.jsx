// AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { signUp } from "../Api/index";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      try {
        const response = await axios.get("/profile", {
          withCredentials: true,
        });
        if (isMounted) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser(null);
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const login = async (formData) => {
    try {
      const response = await axios.post("/login", formData, {
        withCredentials: true,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      await getProfile();
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const getProfile = async () => {
    try {
      const response = await axios.get("/profile", {
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await axios.get("/logout", { withCredentials: true });
      localStorage.removeItem("token");
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, getProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
