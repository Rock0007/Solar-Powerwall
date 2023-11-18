import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const signUp = async (formData) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, formData);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const login = async (formData) => {
  try {
    const response = await axios.post("/login", formData);
    return response.data;
  } catch (error) {
    console.error("Error Logging up:", error);
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get("/logout");
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error.response.data;
  }
};
