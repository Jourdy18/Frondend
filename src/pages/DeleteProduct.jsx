import { useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Nike Air Max', price: 'Rp 2.500.000' },
    { id: 2, name: 'Adidas Ultraboost', price: 'Rp 3.000.000' },
    { id: 3, name: 'Puma RS-X', price: 'Rp 2.200.000' },
  ];

  const handleDelete = (name) => {
    alert(`${name} berhasil dihapus!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Delete Produk
        </h1>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border p-5 rounded-xl"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {product.name}
                </h2>
                <p className="text-gray-600">
                  {product.price}
                </p>
              </div>

              <button
                onClick={() => handleDelete(product.name)}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/admin')}
          className="mt-8 w-full bg-gray-500 text-white py-4 rounded-lg hover:bg-gray-600 transition"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;