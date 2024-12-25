import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="text-center mt-12">
    <h2 className="text-4xl font-bold mb-6">Welcome to Your Health Tracker</h2>
    <div className="space-x-4">
      <Link to="/log-meal" className="bg-blue-500 text-white px-4 py-2 rounded">
        Log Meal
      </Link>
      <Link to="/dashboard" className="bg-green-500 text-white px-4 py-2 rounded">
        View Dashboard
      </Link>
    </div>
  </div>
);

export default HomePage;
