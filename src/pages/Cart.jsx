import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(data);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">

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

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600 text-lg">
                Keranjang kamu masih kosong
              </p>

              <button
                onClick={() => navigate('/home')}
                className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
              >
                Belanja Sekarang
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b py-4"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500">
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                  </div>


                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}


              <div className="mt-6 text-right">
                <p className="text-xl font-bold">
                  Total: Rp {total.toLocaleString('id-ID')}
                </p>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
              >
                Checkout
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Cart;