import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaEye } from 'react-icons/fa';

import shoe1 from '../assets/sepatu1.jpg';
import shoe2 from '../assets/sepatu2.jpg';
import shoe3 from '../assets/sepatu3.jpg';

function ProductList() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Nike Jordan',
      price: 1000000,
      image: shoe1,
      category: 'Basketball',
      description: 'Sepatu basket premium dengan desain stylish dan nyaman digunakan.',
    },
    {
      id: 2,
      name: 'Arka Khaki',
      price: 1200000,
      image: shoe2,
      category: 'Casual',
      description: 'Sepatu casual modern cocok untuk aktivitas sehari-hari.',
    },
    {
      id: 3,
      name: 'Footstep Footwear',
      price: 1500000,
      image: shoe3,
      category: 'Running',
      description: 'Sepatu lari ringan dengan teknologi bantalan maksimal.',
    },
  ];

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} berhasil ditambahkan ke cart!`);
  };

  const handleViewDetail = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <section className="py-12 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Produk Terbaru
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>

              <h3 className="text-2xl font-bold mb-2">
                {product.name}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>

              <p className="text-2xl font-bold text-black mb-6">
                Rp {product.price.toLocaleString('id-ID')}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleViewDetail(product)}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <FaEye />
                  Detail
                </button>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
                >
                  <FaShoppingCart />
                  Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;