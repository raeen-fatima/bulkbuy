import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaHandHoldingUsd } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-indigo-100 to-indigo-200 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Buy Together.{" "}
            <span className="text-indigo-600">
              <Typewriter
                options={{
                  strings: ['Save More.', 'Get Bulk Deals.', 'Support Local Vendors.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            BULKBUY helps street food vendors get affordable raw materials by enabling group purchasing with verified suppliers.
          </p>

          <Link to="/signup">
            <button className="mt-6 flex items-center gap-2 px-6 py-3 border-2 border-blue-950 hover:bg-blue-950 hover:text-white text-blue-950 rounded-full shadow-lg transition">
              <FaHandHoldingUsd className="text-xl" />
              Join Now
            </button>
          </Link>
        </motion.div>

        {/* Right Illustration */}
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          src="https://media.istockphoto.com/id/154959807/photo/good-boat-in-the-floating-market-in-bangkok-thailand.jpg?s=612x612&w=0&k=20&c=oX9JE4yJKNVNfIXuaLzat3-iFDozuP_mb0EzC9-g_HE=" // You can change this image
          alt="Community Vendors"
          className="w-[400px] h-[400px] max-w-full rounded-t-full shadow-md"
        />
      </div>
    </section>
  );
}
