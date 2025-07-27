import { motion } from "framer-motion";
import { FaTags, FaUserCheck, FaComments } from "react-icons/fa";
import Footer from "./Footer";

function Feature({ title, desc, icon }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-b from-indigo-50 to-indigo-200 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300"
    >
      <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-b from-indigo-100 to-indigo-200 text-blue-950 rounded-full mb-4 mx-auto text-lg sm:text-xl">
        {icon}
      </div>
      <h4 className="text-base sm:text-lg font-semibold text-gray-800 text-center">{title}</h4>
      <p className="text-gray-600 text-sm sm:text-base mt-2 text-center">{desc}</p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-14"
        >
          What Makes BULKBUY Powerful
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <Feature
            title="Bulk Pricing"
            desc="Get cheaper rates when more vendors join a single deal."
            icon={<FaTags />}
          />
          <Feature
            title="Verified Suppliers"
            desc="Only trusted and rated suppliers are listed for orders."
            icon={<FaUserCheck />}
          />

         
          <Feature
            title="Live Chat"
            desc="Stay connected with your vendor group and supplier anytime."
            icon={<FaComments />}
          />
        </div>
      </div>
    </section>
    
  );
}
