import { motion } from "framer-motion";
import { FaTags, FaUserCheck, FaComments } from "react-icons/fa";

function Feature({ title, desc, icon }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto text-xl">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24  to-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-14"
        >
          What Makes BULKBUY Powerful
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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
