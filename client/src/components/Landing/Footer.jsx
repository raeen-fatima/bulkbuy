import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-gray-950 text-gray-300 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">BULKBUY</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
            Empowering street vendors through bulk ordering, verified supply chains, and smarter pricing.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold text-lg">Explore</h3>
          <Link to="/" className="hover:text-white text-sm">Home</Link>
          <Link to="/signup" className="hover:text-white text-sm">Join Now</Link>
          <Link to="/login" className="hover:text-white text-sm">Login</Link>
          <a href="#" className="hover:text-white text-sm">Privacy Policy</a>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Connect</h3>
          <div className="flex space-x-5 text-xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:support@bulkbuy.app"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} BULKBUY. All rights reserved.
      </div>
    </footer>
  );
}
