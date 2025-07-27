import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaTimes } from 'react-icons/fa';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ name, email }));
    navigate('/');
  };

  return (
    <div className="h-164 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="bg-white shadow-2xl rounded p-8 pt-12 w-full max-w-md border border-gray-400 relative">
        {/* Cross icon inside card */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-950 text-lg transition"
          aria-label="Close"
        >
          <FaTimes />
        </Link>

        <h2 className="text-3xl font-extrabold text-center text-gray-950 mb-8 tracking-tight">
          Create Your Account 
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block mb-1 font-medium text-blue-950">Full Name</label>
            <div className="flex items-center border-b border-blue-950 rounded px-3 py-2 ">
              <FaUser className="text-blue-950 mr-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-transparent outline-none w-full text-sm"
                placeholder="Your Name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1 font-medium text-blue-950">Email Address</label>
            <div className="flex items-center border-b border-blue-950 rounded px-3 py-2 ">
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

          {/* Password Field */}
          <div>
            <label className="block mb-1 font-medium text-blue-950">Password</label>
            <div className="flex items-center border-b border-blue-950 rounded px-3 py-2 bg-gray-50 ">
              <FaLock className="text-blue-950 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-transparent outline-none w-full text-sm"
                placeholder="Create a strong password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-gray-950 hover:bg-blue-950 text-white py-2 rounded-full text-sm font-semibold shadow transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-800 font-medium hover:underline ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
