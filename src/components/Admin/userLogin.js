import axios from "axios";

const API_URL = "https://api.srminternationalrealestate.ae/api/auth/login";

export const userLogin = async (username, password) => {
  try {
    const response = await axios.post(API_URL, { username, password });

    if (response.data?.token) {
      localStorage.setItem("authToken", response.data.token);
    }

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};
