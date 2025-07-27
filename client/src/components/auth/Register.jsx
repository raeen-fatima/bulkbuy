import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaTimes } from 'react-icons/fa';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/Firebase'; // Make sure this is correct

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Optionally update displayName
      await updateProfile(userCredential.user, { displayName: name });
      navigate('/');
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white shadow-2xl rounded p-8 pt-12 w-full max-w-md border border-gray-400 relative">
        {/* Close Button */}
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

        {error && (
          <div className="text-sm text-red-600 mb-4 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-blue-950">Full Name</label>
            <div className="flex items-center border-b border-blue-950 rounded px-3 py-2">
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
            className="w-full bg-gray-950 hover:bg-blue-950 text-white py-2 rounded-full text-sm font-semibold shadow transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-700 font-medium hover:underline ml-1"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
