import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import shoe1 from '../assets/sepatu1.jpg';
import shoe2 from '../assets/sepatu2.jpg';
import shoe3 from '../assets/sepatu3.jpg';

import {
  FaBox,
  FaCheckCircle,
  FaClock,
  FaTruck,
} from 'react-icons/fa';

const OrderHistory = () => {
    const navigate = useNavigate();
  const orders = [
    {
      id: '1',
      product: 'Nike Jordan',
      date: '25 April 2026',
      price: 1000000,
      status: 'Selesai',
      image: shoe1,
    },
    {
      id: '2',
      product: 'Arka Khaki',
      date: '23 April 2026',
      price: 1200000,
      status: 'Diproses',
      image: shoe2,
    },
    {
      id: '3',
      product: 'Footstep Footwear',
      date: '20 April 2026',
      price: 1500000,
      status: 'Dikirim',
      image: shoe3,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Selesai':
        return <FaCheckCircle className="text-green-500 text-xl" />;
      case 'Diproses':
        return <FaClock className="text-yellow-500 text-xl" />;
      case 'Dikirim':
        return <FaTruck className="text-blue-500 text-xl" />;
      default:
        return <FaBox className="text-gray-500 text-xl" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selesai':
        return 'bg-green-100 text-green-700';
      case 'Diproses':
        return 'bg-yellow-100 text-yellow-700';
      case 'Dikirim':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <button
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg mb-6 hover:bg-gray-800 transition"
        >
            <FaArrowLeft />
            Kembali
        </button>

        <h1 className="text-4xl font-bold text-center mb-10">
          Riwayat Pesanan
        </h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={order.image}
                  alt={order.product}
                  className="w-36 h-36 object-cover rounded-xl"
                />

                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {order.product}
                      </h2>
                      <p className="text-gray-500">
                        Order ID: {order.id}
                      </p>
                    </div>

                    <span
                      className={`mt-3 md:mt-0 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <p>
                      <strong>Tanggal:</strong> {order.date}
                    </p>

                    <p>
                      <strong>Total:</strong> Rp{' '}
                      {order.price.toLocaleString('id-ID')}
                    </p>
                  </div>

                  <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;