import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-blue-300/20 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Icon */}
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-extrabold font-sans tracking-tight text-indigo-600 hover:opacity-90 transition"
        >
          <FaLeaf className="text-blue-950 text-2xl" />
          BULK<span className="text-gray-800">BUY</span>
        </Link>

        {/* Nav Buttons */}
        <div className="space-x-3">
          <Link
            to="/login"
            className="text-blue-950 border-2 border-blue-950 py-1 px-3 rounded-full font-medium hover:bg-blue-950 hover:text-white transition"
          >
            Login/Sign Up
          </Link>
          <Link
            to="/services"
            className="bg-blue-950 text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-blue-900 transition"
          >
            Services
          </Link>
        </div>
      </div>
    </header>
  );
}
