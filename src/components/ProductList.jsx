import { useNavigate } from 'react-router-dom';

import shoe1 from '../assets/sepatu1.jpg';
import shoe2 from '../assets/sepatu2.jpg';
import shoe3 from '../assets/sepatu3.jpg';

function ProductList() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Nike Jordan',
      price: 1000000, // 🔥 ubah ke number
      image: shoe1,
    },
    {
      id: 2,
      name: 'Arka Khaki',
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

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Produk ditambahkan ke cart!');
  };

  return (
    <section className="py-12 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {product.name}
              </h3>

              <p className="text-gray-600 text-lg mb-4">
                Rp {product.price.toLocaleString('id-ID')}
              </p>

              {/* 🔥 FIX tombol */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ❗ biar tidak pindah ke detail
                  handleAddToCart(product);
                }}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;