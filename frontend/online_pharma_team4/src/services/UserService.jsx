import axios from "axios";

const API_URL = "https://online-pharma-backend.onrender.com/api/user";

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;  // User profile data
};
