import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Checkout = () => {
  const navigate = useNavigate();

  // ambil data cart
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // hitung total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Cart kosong!');
      return;
    }

    alert('Pembayaran berhasil!');

    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    const newOrder = {
      id: Date.now(),
      products: cartItems, // 🔥 simpan semua produk
      total: total,
      status: 'Diproses',
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // kosongkan cart
    localStorage.removeItem('cart');

    navigate('/orders');
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto">

        {/* 🔙 Back */}
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg mb-6 hover:bg-gray-800 transition"
        >
          <FaArrowLeft />
          Kembali
        </button>

        <h1 className="text-4xl font-bold mb-6">Checkout</h1>

        <div className="bg-white p-6 rounded-xl shadow-md">

          {/* 🧾 LIST PRODUK */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Produk:</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Tidak ada produk</p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b py-2"
                >
                  <span>{item.name}</span>
                  <span>
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* 🧾 TOTAL */}
          <div className="mb-6">
            <p className="text-lg font-semibold">
              Total: Rp {total.toLocaleString('id-ID')}
            </p>
          </div>

          {/* 📦 FORM */}
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Alamat Pengiriman"
            className="w-full border p-3 rounded mb-4"
          />

          {/* 💳 BUTTON */}
          <button
            onClick={handleCheckout}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Bayar Sekarang
          </button>

        </div>
      </div>
    </div>
  );
};

export default Checkout;