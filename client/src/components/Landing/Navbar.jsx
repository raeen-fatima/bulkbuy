import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { auth } from "../../config/Firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const username = user?.displayName || user?.email?.split("@")[0];

  return (
    <header className="bg-blue-300/20 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Icon */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-600 hover:opacity-90 transition font-sans"
        >
          <FaLeaf className="text-blue-950 text-xl sm:text-2xl" />
          BULK<span className="text-gray-800">BUY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-gray-700 font-medium">👋 Hi, {username}</span>
              <button
                onClick={handleLogout}
                className="text-blue-950 border-2 border-blue-950 py-1 px-3 rounded-full font-medium hover:bg-blue-950 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-blue-950 border border-blue-950 py-1 px-3 rounded-full font-medium hover:bg-blue-950 hover:text-white transition"
            >
              Login / Sign Up
            </Link>
          )}

          <Link
            to="/services"
            className="bg-blue-950 text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-blue-900 transition"
          >
            Services
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-blue-950 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {user ? (
            <>
              <span className="block text-sm text-gray-700 font-medium">
                👋 Hi, {username}
              </span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="block w-full text-blue-950 border-2 border-blue-950 py-2 px-4 rounded-full font-medium hover:bg-blue-950 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-blue-950 border-2 border-blue-950 py-2 px-4 rounded-full text-center font-medium hover:bg-blue-950 hover:text-white transition"
            >
              Login / Sign Up
            </Link>
          )}

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-950 text-white px-5 py-2 rounded-full text-center font-medium shadow-md hover:bg-blue-900 transition"
          >
            Services
          </Link>
        </div>
      )}
    </header>
  );
}
