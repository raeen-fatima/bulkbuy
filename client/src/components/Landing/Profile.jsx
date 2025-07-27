import { FiEdit, FiMail, FiMapPin, FiSmartphone, FiUser, FiBox, FiHeart, FiLogOut } from "react-icons/fi";

export default function Profile() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 px-2">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 pt-10 relative">
        {/* Profile Avatar */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8NjLnkZ8LOnk0G7D2aYz3myxlxDCuHTA1hki7RROzK2wbzyhsRxdMlTrzb_Ktrcv3db4&usqp=CAU"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
            alt="Profile Avatar"
          />
        </div>
        {/* Edit Profile Button */}
        <button className="absolute right-6 top-6 bg-blue-50 hover:bg-blue-200 transition p-2 rounded-full shadow">
          <FiEdit className="text-blue-700 text-xl" />
        </button>
        {/* Details */}
        <div className="mt-20 text-center">
          <h2 className="font-bold text-2xl text-indigo-700 flex items-center justify-center gap-2">
            <FiUser className="text-lg" /> Name
          </h2>
          <p className="text-gray-500 mb-3 flex justify-center items-center gap-1">
            <FiMail /> user@email.com
          </p>
          <div className="flex justify-center gap-6 text-gray-600 text-sm mb-4">
            <span className="flex items-center gap-1"><FiSmartphone /> +91 98765 43210</span>
            <span className="flex items-center gap-1"><FiMapPin /> City, State</span>
          </div>
        </div>
        {/* Stats & Quick Links */}
        <div className="grid grid-cols-3 gap-3 mt-6 text-center">
          <StatCard icon={<FiBox />} label="Orders" value="12" />
          <StatCard icon={<FiHeart />} label="Wishlist" value="8" />
          <StatCard icon={<FiLogOut />} label="Logout" value="" link /* onClick for logout */ />
        </div>
      </div>
    </section>
  );
}

// Helper for Stats Card/Buttons
function StatCard({ icon, label, value, link }) {
  return link ? (
    <button className="bg-blue-50 hover:bg-blue-200 transition flex flex-col items-center p-3 rounded-xl cursor-pointer">
      <span className="text-blue-700 text-lg mb-1">{icon}</span>
      <span className="font-semibold">{label}</span>
    </button>
  ) : (
    <div className="bg-blue-50 flex flex-col items-center p-3 rounded-xl transition">
      <span className="text-blue-700 text-lg mb-1">{icon}</span>
      <span className="font-semibold">{label}</span>
      {value && <span className="text-xs text-gray-600">{value}</span>}
    </div>
  );
}
