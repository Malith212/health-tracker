import axios from "axios";

const API_URL = "http://localhost:5000";

export const logMeal = async (mealData) => {
  try {
    const response = await axios.post(`${API_URL}/log-meal`, mealData);
    return response.data;
  } catch (error) {
    console.error("Error logging meal", error);
  }
};
