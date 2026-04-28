import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // ambil data user lama
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // cek email sudah ada atau belum
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert('Email sudah terdaftar!');
      return;
    }

    // tambah user baru
    const newUser = {
      name,
      email,
      password,
      role: 'USER',
    };

    users.push(newUser);

    // simpan ke localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registrasi berhasil!');

    // kembali ke login
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Register your ShoeStore account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
            required
          />

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
            Register
          </button>
        </form>

        <p className="text-center mt-6">
          Sudah punya akun?{' '}
          <button
            onClick={() => navigate('/')}
            className="font-semibold hover:underline"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;