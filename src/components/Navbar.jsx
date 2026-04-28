import { Link, useNavigate } from 'react-router-dom';
import {
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaSearch,
  FaThLarge,
  FaClipboardList,
  FaChartLine,
  FaLightbulb,
} from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logout berhasil!');
    navigate('/');
  };

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      
      <Link
        to="/home"
        className="text-3xl font-bold tracking-wide"
      >
        ShoeStore
      </Link>

      <ul className="hidden md:flex gap-8 items-center">
        
        <li>
          <Link to="/home" className="hover:text-gray-300 transition">
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/search"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaSearch />
            Search
          </Link>
        </li>

        <li>
          <Link
            to="/category"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaThLarge />
            Category
          </Link>
        </li>

        <li>
          <Link
            to="/orders"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaClipboardList />
            Orders
          </Link>
        </li>

        <li>
          <Link
            to="/recommendation"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaLightbulb />
            Recommend
          </Link>
        </li>

        <li>
          <Link
            to="/analytics"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaChartLine />
            Analytics
          </Link>
        </li>

      </ul>

      <div className="flex items-center gap-6">

        <Link
          to="/profile"
          className="hover:text-gray-300 transition"
          title="Profile"
        >
          <FaUser className="text-2xl" />
        </Link>

        <Link
          to="/cart"
          className="relative hover:text-gray-300 transition"
          title="Cart"
        >
          <FaShoppingCart className="text-2xl" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </Link>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="hover:text-red-400 transition"
          title="Logout"
        >
          <FaSignOutAlt className="text-2xl" />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;