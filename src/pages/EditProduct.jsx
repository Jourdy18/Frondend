import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaArrowLeft, FaSave } from 'react-icons/fa';

import shoe1 from '../assets/sepatu1.jpg';
import shoe2 from '../assets/sepatu2.jpg';
import shoe3 from '../assets/sepatu3.jpg';


const EditProduct = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Nike Jordan',
      price: 1000000,
      category: 'Running',
      description: 'Sepatu running premium dengan kenyamanan maksimal.',
      image: shoe1,
    },
    {
      id: 2,
      name: 'Arda Khaki',
      price: 1200000,
      category: 'Sport',
      description: 'Sepatu olahraga dengan teknologi Boost terbaru.',
      image: shoe2,
    },
    {
      id: 3,
      name: 'Footstep Footwear',
      price: 1500000,
      category: 'Casual',
      description: 'Sepatu casual modern dengan desain stylish.',
      image: shoe3,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (e) => {
    setSelectedProduct({
      ...selectedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product
    );

    setProducts(updatedProducts);
    alert('Produk berhasil diperbarui!');
    setSelectedProduct(null);
  };

  // HALAMAN FORM EDIT
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <button
            onClick={() => setSelectedProduct(null)}
            className="flex items-center gap-2 bg-gray-600 text-white px-5 py-3 rounded-lg mb-8 hover:bg-gray-700"
          >
            <FaArrowLeft />
            Kembali
          </button>

          <h1 className="text-4xl font-bold text-center mb-8">
            Edit Produk
          </h1>

          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-80 object-cover rounded-xl mb-8"
          />

          <form onSubmit={handleSave} className="space-y-5">
            <input
              type="text"
              name="name"
              value={selectedProduct.name}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
              placeholder="Nama Produk"
              required
            />

            <input
              type="number"
              name="price"
              value={selectedProduct.price}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
              placeholder="Harga"
              required
            />

            <input
              type="text"
              name="category"
              value={selectedProduct.category}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
              placeholder="Kategori"
              required
            />

            <textarea
              name="description"
              rows="5"
              value={selectedProduct.description}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
              placeholder="Deskripsi"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-blue-700"
            >
              <FaSave />
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    );
  }

  // HALAMAN LIST PRODUK
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg mb-8 hover:bg-gray-800"
        >
          <FaArrowLeft />
          Kembali
        </button>

        <h1 className="text-4xl font-bold text-center mb-10">
          Pilih Produk yang Akan Diedit
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
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

                <p className="text-gray-600 mb-2">
                  {product.category}
                </p>

                <p className="text-blue-600 text-xl font-bold mb-4">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
                >
                  <FaEdit />
                  Edit Produk
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;