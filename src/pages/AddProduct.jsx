import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const file = files[0];

      setProduct({
        ...product,
        image: file,
      });

      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);
    alert('Produk berhasil ditambahkan!');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Tambah Produk
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Nama Produk"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Harga Produk"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Kategori"
            value={product.category}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <textarea
            name="description"
            rows="5"
            placeholder="Deskripsi Produk"
            value={product.description}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <div>
            <label className="block mb-3 font-semibold">
              Upload Gambar Produk
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
              required
            />
          </div>

          {preview && (
            <div className="mt-6">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="w-full bg-gray-500 text-white py-4 rounded-lg hover:bg-gray-600 transition"
            >
              Kembali
            </button>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition"
            >
              Simpan Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;