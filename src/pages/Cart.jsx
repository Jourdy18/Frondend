import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';

function Cart() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Tombol kembali */}
        <button
          onClick={() => navigate('/home')}
          className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg mb-6 hover:bg-gray-800 transition"
        >
          <FaArrowLeft />
          Kembali
        </button>

        <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
          <FaShoppingCart />
          Shopping Cart
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <p className="text-gray-600 text-lg">
            Keranjang kamu masih kosong
          </p>

          <button
            onClick={() => navigate('/home')}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Belanja Sekarang
          </button>

          <button
            onClick={() => navigate('/checkout')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cart;