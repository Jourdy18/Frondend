import { Link, useNavigate } from 'react-router-dom';
import {
  FaBoxOpen,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSignOutAlt,
} from 'react-icons/fa';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const menus = [
    {
      title: 'Tambah Produk',
      icon: <FaPlus className="text-4xl mb-4" />,
      path: '/admin/add-product',
      color: 'bg-green-500',
    },
    {
      title: 'Edit Produk',
      icon: <FaEdit className="text-4xl mb-4" />,
      path: '/admin/edit-product',
      color: 'bg-blue-500',
    },
    {
      title: 'Delete Produk',
      icon: <FaTrash className="text-4xl mb-4" />,
      path: '/admin/delete-product',
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <FaBoxOpen className="text-5xl text-black" />
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menus.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className={`${menu.color} text-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition duration-300`}
          >
            {menu.icon}
            <h2 className="text-2xl font-semibold">
              {menu.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;