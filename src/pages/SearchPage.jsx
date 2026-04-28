import { useState } from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


import shoe1 from '../assets/sepatu1.jpg';
import shoe2 from '../assets/sepatu2.jpg';
import shoe3 from '../assets/sepatu3.jpg';

const SearchPage = () => {
    const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Nike Jordan',
      price: 1000000,
      image: shoe1,
    },
    {
      id: 2,
      name: 'Arda Khaki',
      price: 1200000,
      image: shoe2,
    },
    {
      id: 3,
      name: 'Footstep Footwear',
      price: 1500000,
      image: shoe3,
    },
  ];

  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <button
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg mb-6 hover:bg-gray-800 transition"
        >
            <FaArrowLeft />
            Kembali
        </button>

        <h1 className="text-4xl font-bold text-center mb-8">
          Cari Sepatu
        </h1>

        <div className="relative max-w-2xl mx-auto mb-10">
          <FaSearch className="absolute top-5 left-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari sepatu favorit Anda..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  {product.name}
                </h2>

                <p className="text-blue-600 text-xl font-bold">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;