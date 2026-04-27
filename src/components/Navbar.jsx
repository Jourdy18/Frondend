import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">ShoeStore</h1>
      <ul className="hidden md:flex gap-8">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <FaShoppingCart className="text-2xl cursor-pointer" />
    </nav>
  )
}

export default Navbar