import Navbar from "../components/Navbar";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
];

const Contact = () => {
  return (
    <>
    <div className="back">
    <h1 className="heading">Charts</h1>
    <Navbar />
    <div className="graph-container">
      <h1 style={{fontWeight:"lighter"}}>Rainfall</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
        <CartesianGrid strokeDasharray="3 3" stroke="black" /> {/* Lighter stroke for grid */}
        <XAxis dataKey="name" stroke="black" /> {/* Blue stroke for XAxis */}
        <YAxis stroke="black" /> {/* Blue stroke for YAxis */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="black" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="yellow" />
      </LineChart>
    </ResponsiveContainer>
    </div>
    </div>
    </>

  );
};

export default Contact;
