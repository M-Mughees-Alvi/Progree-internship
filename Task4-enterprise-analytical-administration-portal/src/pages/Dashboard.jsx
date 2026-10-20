import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { monthly_data, products } from "../data";

function Dashboard() {
  const [selected_region, setSelectedRegion] = useState("All");

  // filter the products for the bar chart
  let chart_products = products;
  if (selected_region !== "All") {
    chart_products = products.filter(function (item) {
      return item.region === selected_region;
    });
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="card">
        <h3>Monthly Revenue and Profit</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthly_data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
            <Line type="monotone" dataKey="profit" stroke="#22c55e" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h3>Revenue by Product</h3>
        <label>
          Region:{" "}
          <select
            value={selected_region}
            onChange={function (e) {
              setSelectedRegion(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
        </label>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chart_products}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
