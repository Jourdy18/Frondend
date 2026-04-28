import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import shoe1 from '../assets/sepatu1.jpg';
import shoe2 from '../assets/sepatu2.jpg';
import shoe3 from '../assets/sepatu3.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🔥 data produk (sementara)
  const products = [
    {
      id: 1,
      name: 'Nike Air Max',
      price: 1000000,
      image: shoe1,
      desc: 'Sepatu nyaman untuk olahraga dan sehari-hari.',
    },
    {
      id: 2,
      name: 'Adidas Runner',
      price: 800000,
      image: shoe2,
      desc: 'Cocok untuk lari dan aktivitas outdoor.',
    },
    {
      id: 3,
      name: 'Footstep Casual',
      price: 600000,
      image: shoe3,
      desc: 'Desain santai untuk penggunaan sehari-hari.',
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
      name: product.name,
      price: product.price,
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Produk ditambahkan ke cart!');
  };

  if (!product) {
    return <p>Produk tidak ditemukan</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

        {/* 🔙 Back */}
        <button
          onClick={() => navigate('/home')}
          className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg mb-6"
        >
          <FaArrowLeft />
          Kembali
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">

          {/* IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl"
          />

          {/* INFO */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-blue-600 text-2xl font-bold mb-4">
              Rp {product.price.toLocaleString('id-ID')}
            </p>

            <p className="text-gray-600 mb-6">
              {product.desc}
            </p>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              Tambah ke Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;