import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from 'react-icons/fa';

const Profile = () => {
    const navigate = useNavigate();    
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

        <h1 className="text-4xl font-bold text-center mb-10">
          Profil Saya
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-black h-40"></div>

          <div className="px-8 pb-8">
            <div className="flex flex-col items-center -mt-20">
              <img
                src=""
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
              />

              <h2 className="text-3xl font-bold mt-4">
                User
              </h2>

              <p className="text-gray-500">
                Premium Member
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <FaUser className="text-2xl text-blue-600" />
                <div>
                  <p className="text-gray-500">Nama Lengkap</p>
                  <p className="font-semibold">User</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <FaEnvelope className="text-2xl text-green-600" />
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-semibold">user@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <FaPhone className="text-2xl text-purple-600" />
                <div>
                  <p className="text-gray-500">Nomor Telepon</p>
                  <p className="font-semibold">08123456789</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <FaMapMarkerAlt className="text-2xl text-red-600" />
                <div>
                  <p className="text-gray-500">Alamat</p>
                  <p className="font-semibold">Airmadidi, Indonesia</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;