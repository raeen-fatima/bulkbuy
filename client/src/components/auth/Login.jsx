import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaTimes } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white shadow-2xl rounded p-8 pt-12 w-full max-w-md border border-gray-400 relative">
        {/* Cross icon inside the card */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-950 text-lg transition"
          aria-label="Close"
        >
          <FaTimes />
        </Link>

        <h2 className="text-3xl font-extrabold text-center text-gray-950 mb-8 tracking-tight">
          Welcome Back 👋
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-blue-950">Email Address</label>
            <div className="flex items-center border-b border-blue-950 rounded px-3 py-2">
              <FaEnvelope className="text-blue-950 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent outline-none w-full text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-blue-950">Password</label>
            <div className="flex items-center border-b border-blue-950 rounded px-3 py-2">
              <FaLock className="text-blue-950 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-transparent outline-none w-full text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-950 hover:bg-blue-900 text-white py-2 rounded-full text-sm font-semibold shadow transition duration-300"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-blue-700 font-medium hover:underline ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
