import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSearch, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";

const steps = [
  {
    title: "Find Best Raw Material Deals",
    desc: "Street vendors can explore high-quality raw materials at the lowest prices.",
    icon: <FaSearch className="text-2xl sm:text-3xl text-blue-950" />,
    badges: ["Live Prices", "Location-Based", "Verified Listings"],
  },
  {
    title: "Join Hands with Nearby Vendors",
    desc: "Group up with nearby sellers to unlock bulk pricing from trusted suppliers.",
    icon: <FaHandshake className="text-2xl sm:text-3xl text-blue-950" />,
    badges: ["Bulk Discounts", "Chat with Vendors", "Secure Payment"],
  },
  {
    title: "Track Group Order in Real-Time",
    desc: "Live updates on your order status, delivery, and supplier progress.",
    icon: <FaMapMarkedAlt className="text-2xl sm:text-3xl text-blue-950" />,
    badges: ["Live Delivery Map", "ETA Prediction", "Order History"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-indigo-100 to-indigo-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          How BulkBuy Helps Vendors
        </motion.h2>

        <div className="space-y-24 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8 sm:gap-12`}
            >
              {/* Icon & Text Block */}
              <div className="flex flex-col items-center md:items-start gap-4 max-w-xl text-center md:text-left px-2">
                <div className="bg-indigo-100 w-14 h-14 flex items-center justify-center rounded-full shadow-md animate-pulse ring-2 ring-indigo-300">
                  {step.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {step.desc}
                </p>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                  {step.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="bg-indigo-50 text-blue-950 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step Number Circle */}





             <button className="">
               <div className="flex justify-center items-center cursor-pointer">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-blue-950 text-blue-950 font-bold text-lg sm:text-xl flex items-center justify-center shadow-xl bg-blue-950/60 backdrop-blur-sm hover:scale-105 transition-transform">
                  0{index + 1}
                </div>
              </div>
          </button>


      
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
   


              <Link
            to="/raw"
          >
             <button className="px-6 sm:px-8 cursor-pointer py-3 bg-blue-950 hover:bg-blue-900 text-white rounded-full text-base sm:text-lg shadow-lg transition">
            Explore Raw Material Deals →
          </button>
          </Link>


        </motion.div>
      </div>
    </section>
  );
}
