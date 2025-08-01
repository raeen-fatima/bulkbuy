import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-20 bg-gray-950 text-white overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-400 opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-indigo-300 opacity-10 rounded-full filter blur-2xl z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight mb-4">
          Ready to save more with every purchase?
        </h2>
        <p className="text-base sm:text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of street vendors using BULKBUY to access bulk deals, trusted suppliers, and real-time support.
        </p>
        <Link to="/signup">
          <button className="px-6 sm:px-8 cursor-pointer py-3 bg-white text-gray-950 font-semibold rounded-full text-base sm:text-lg shadow-lg hover:bg-indigo-100 active:scale-95 transition">
            Get Started →
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
