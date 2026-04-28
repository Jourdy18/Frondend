import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', sales: 10 },
  { month: 'Feb', sales: 20 },
  { month: 'Mar', sales: 15 },
  { month: 'Apr', sales: 25 },
];

const Analytics = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen p-8 bg-gray-100">

        <button
        onClick={() => navigate('/home')}
        className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg mb-6 hover:bg-gray-800"
      >
        <FaArrowLeft />
        Kembali
      </button>

      <h1 className="text-4xl font-bold mb-8 text-center">
        Dashboard Analytics
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Penjualan Bulanan
        </h2>

        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="month"/>
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="sales" />
        </LineChart>
      </div>
    </div>
  );
};

export default Analytics;