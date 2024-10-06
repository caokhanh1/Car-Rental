// src/components/DashRevenue.js
import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
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

const sampleData = [
  { month: "Jan", revenue: 4000, profit: 2400 },
  { month: "Feb", revenue: 3000, profit: 1398 },
  { month: "Mar", revenue: 2000, profit: 9800 },
  { month: "Apr", revenue: 2780, profit: 3908 },
  { month: "May", revenue: 1890, profit: 4800 },
  { month: "Jun", revenue: 2390, profit: 3800 },
  { month: "Jul", revenue: 3490, profit: 4300 },
  { month: "Aug", revenue: 2000, profit: 2400 },
  { month: "Sep", revenue: 3000, profit: 1398 },
  { month: "Oct", revenue: 2500, profit: 9800 },
  { month: "Nov", revenue: 3500, profit: 3908 },
  { month: "Dec", revenue: 4000, profit: 4800 },
];

export default function DashRevenue() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(sampleData);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8 mt-6">
      <div className="py-8">
        <h2 className="text-2xl font-semibold leading-tight mb-4">Revenue Statistics</h2>
        
        {/* Tổng quan doanh thu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <h5 className="text-lg font-bold">Total Revenue</h5>
            <p className="text-2xl font-semibold">$50,000</p>
          </Card>
          <Card>
            <h5 className="text-lg font-bold">Monthly Revenue</h5>
            <p className="text-2xl font-semibold">$10,000</p>
          </Card>
          <Card>
            <h5 className="text-lg font-bold">Profit</h5>
            <p className="text-2xl font-semibold">$20,000</p>
          </Card>
        </div>
        
        {/* Biểu đồ doanh thu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Biểu đồ đường doanh thu và lợi nhuận */}
          <Card>
            <h5 className="text-lg font-bold mb-4">Revenue Over Months</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
          
          {/* Biểu đồ cột so sánh doanh thu và lợi nhuận */}
          <Card>
            <h5 className="text-lg font-bold mb-4">Revenue Comparison</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="profit" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
}
