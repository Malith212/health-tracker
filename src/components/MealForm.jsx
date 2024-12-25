import { useState } from "react";
import { logMeal } from "../services/api";

const MealForm = () => {
  const [formData, setFormData] = useState({ date: "", meal: "", calories: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logMeal(formData);
    alert("Meal logged successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Log Your Meal</h2>
      <input
        type="date"
        name="date"
        className="border w-full p-2 mb-4"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="meal"
        placeholder="Meal"
        className="border w-full p-2 mb-4"
        value={formData.meal}
        onChange={handleChange}
      />
      <input
        type="number"
        name="calories"
        placeholder="Calories"
        className="border w-full p-2 mb-4"
        value={formData.calories}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Log Meal
      </button>
    </form>
  );
};

export default MealForm;
