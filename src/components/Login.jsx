import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = 'admin@gmail.com';
    const adminPassword = '12345';

    const userEmail = 'user@gmail.com';
    const userPassword = '12345';


    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('role', 'ADMIN');
      localStorage.setItem('email', email);
      navigate('/admin');
    } 

    else if (email === userEmail && password === userPassword) {
      localStorage.setItem('role', 'USER');
      localStorage.setItem('email', email);
      navigate('/home');
    } 

    else {
      alert('Email atau password salah!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Login to your ShoeStore account
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm">
          <p className="font-semibold">Test</p>
          <p>Email: admin@gmail.com</p>
          <p>Password: 12345</p>
          <p>Email: user@gmail.com</p>
          <p>Password: 12345</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        {/* REGISTER */}
        <p className="text-center mt-6 text-gray-600">
          Belum punya akun?{' '}
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="text-black font-semibold hover:underline"
          >
            Buat Akun
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;