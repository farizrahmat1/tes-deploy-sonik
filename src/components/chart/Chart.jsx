import "./chart.scss";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

const data = [
  {
    name: "January",
    ac: 30,
    dc: 20,
  },
  {
    name: "February",
    ac: 23,
    dc: 21,
  },
  {
    name: "March",
    ac: 34,
    dc: 32,
  },
  {
    name: "April",
    ac: 35,
    dc: 33,
  },
  {
    name: "May",
    ac: 54,
    dc: 42,
  },
  {
    name: "June",
    ac: 58,
    dc: 50,
  },
  {
    name: "July",
    ac: 63,
    dc: 56,
  },
  {
    name: "August",
    ac: 66,
    dc: 61,
  },
  {
    name: "September",
    ac: 71,
    dc: 68,
  },
  {
    name: "October",
    ac: 73,
    dc: 70,
  },
  {
    name: "November",
    ac: 76,
    dc: 73,
  },
  {
    name: "December",
    ac: 80,
    dc: 78,
    // amt: 2100,
  },
];

// const data01 = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 278 },
//   { name: "Group F", value: 189 },
// ];

const data01 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const Chart = () => {
  return (
    <div className="areachart">
      {"Area Chart"}
      <ResponsiveContainer width="100%" height="100%" aspect={5}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ac" fill="#8884d8" />
          <Bar dataKey="dc" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div className="piechart">
        {"Pie Chart"}
        <ResponsiveContainer width="100%" height="100%" aspect={4}>
          <PieChart width={300} height={600}>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
