import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import shoe1 from '../assets/sepatu1.jpg';
import shoe2 from '../assets/sepatu2.jpg';
import shoe3 from '../assets/sepatu3.jpg';

const Recommendation = () => {
    const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Sepatu Lari Nike',
      price: 1000000,
      image: shoe1,
      category: 'lari',
    },
    {
      id: 2,
      name: 'Sepatu Casual Adidas',
      price: 1200000,
      image: shoe2,
      category: 'casual',
    },
    {
      id: 3,
      name: 'Sepatu Sport Puma',
      price: 1500000,
      image: shoe3,
      category: 'sport',
    },
  ];

  const handleSearch = () => {
    const filtered = products.filter((p) =>
      input.toLowerCase().includes(p.category)
    );

    setResults(filtered);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">

        <button
        onClick={() => navigate('/home')}
        className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg mb-6 hover:bg-gray-800"
      >
        <FaArrowLeft />
        Kembali
      </button>

      <h1 className="text-4xl font-bold mb-6 text-center">
        Recommendation
      </h1>

      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Contoh: sepatu lari budget 1jt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleSearch}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Cari Rekomendasi
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {results.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl shadow">
            <img src={product.image} className="h-48 w-full object-cover rounded" />
            <h2 className="text-xl font-bold mt-3">{product.name}</h2>
            <p>Rp {product.price.toLocaleString('id-ID')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;