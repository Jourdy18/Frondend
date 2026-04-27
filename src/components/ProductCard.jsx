const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-gray-600 my-3">
          Rp {product.price.toLocaleString('id-ID')}
        </p>
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  )
}

export default ProductCard