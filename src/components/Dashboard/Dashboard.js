import React from 'react';
import './Dashboard.css';
import useCharts from '../../Hooks/useChart';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Dashboard = () => {
  const [charts, setCharts] = useCharts();

  return (
    <div className="dashboard-chart-container">
      <div className="line1-chart-container">
        <h3 className="text-center my-4">Month wise Sell</h3>
        <LineChart width={400} height={400} data={charts}>
          <Line dataKey={'sell'}></Line>
          <XAxis dataKey={'month'} />
          <Tooltip />
          <YAxis />
        </LineChart>
      </div>
      <div className="line2-chart-container">
        <h3 className="text-center my-4">Investment VS Revenue</h3>
        <AreaChart
          width={400}
          height={400}
          data={charts}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
      <div className="bar-chart-container">
        <h3 className="text-center my-4">Investment VS Revenue</h3>
        <BarChart width={400} height={400} data={charts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="pie-chart-container">
        <h3 className="text-center my-4">Investment VS Revenue</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={charts}
            dataKey="investment"
            nameKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={charts}
            dataKey="revenue"
            nameKey="revenue"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
