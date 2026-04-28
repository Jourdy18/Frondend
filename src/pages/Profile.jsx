import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaSave,
  FaCamera,
} from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: 'User',
    email: 'user@gmail.com',
    phone: '08123456789',
    address: 'Airmadidi, Indonesia',
    image: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
    setIsEditing(false);
    alert('Profil berhasil diperbarui!');
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };


  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfile({
          ...profile,
          image: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

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
            <div className="flex flex-col items-center -mt-20 relative">

              <div className="relative">
                <img
                  src={
                    profile.image ||
                    'https://via.placeholder.com/150'
                  }
                  alt="Profile"
                  className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
                />

                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer">
                    <FaCamera />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <h2 className="text-3xl font-bold mt-4">
                {profile.name}
              </h2>

              <p className="text-gray-500">
                Premium Member
              </p>

              
              <button
                onClick={() =>
                  isEditing ? handleSave() : setIsEditing(true)
                }
                className="mt-4 flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg"
              >
                {isEditing ? <FaSave /> : <FaEdit />}
                {isEditing ? 'Simpan' : 'Edit Profil'}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {/* NAMA */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4 mb-2">
                  <FaUser className="text-2xl text-blue-600" />
                  <p className="text-gray-500">Nama Lengkap</p>
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                ) : (
                  <p className="font-semibold">{profile.name}</p>
                )}
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4 mb-2">
                  <FaEnvelope className="text-2xl text-green-600" />
                  <p className="text-gray-500">Email</p>
                </div>

                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                ) : (
                  <p className="font-semibold">{profile.email}</p>
                )}
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4 mb-2">
                  <FaPhone className="text-2xl text-purple-600" />
                  <p className="text-gray-500">Nomor Telepon</p>
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                ) : (
                  <p className="font-semibold">{profile.phone}</p>
                )}
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4 mb-2">
                  <FaMapMarkerAlt className="text-2xl text-red-600" />
                  <p className="text-gray-500">Alamat</p>
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                ) : (
                  <p className="font-semibold">{profile.address}</p>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;