import { useState } from "react";
import { FiUser, FiSettings, FiBell, FiLogOut, FiHeart, FiMapPin, FiBox, FiCreditCard, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function AccountDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ml-4">
      {/* Trigger Button */}
      <button
        className=" h-10  flex items-center gap-1 bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700 text-white py-1 px-3 cursor-pointer rounded-full shadow-md hover:scale-105 transition-all font-semibold focus:outline-none"
        onClick={() => setOpen(v => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)} // Delay for item click
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8NjLnkZ8LOnk0G7D2aYz3myxlxDCuHTA1hki7RROzK2wbzyhsRxdMlTrzb_Ktrcv3db4&usqp=CAU"
          alt="kya"
          className="w-9 h-9 rounded-full border-2 border-white"
        />
        <span>Account</span>
        <FiUser className="text-xl" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 min-w-[270px] bg-white shadow-2xl rounded-2xl py-2 z-50 border border-blue-100 animate-fade-in-down">
          {/* Header */}
          <div className="flex items-center px-5 py-3 border-b">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8NjLnkZ8LOnk0G7D2aYz3myxlxDCuHTA1hki7RROzK2wbzyhsRxdMlTrzb_Ktrcv3db4&usqp=CAU" alt="Avatar" className="w-12 h-12 rounded-full mr-3 border-2 border-indigo-400" />
            <div>
              <div className="font-bold text-indigo-700">Your Name</div>
              <div className="text-xs text-gray-500">user@email.com</div>
              <button className="flex items-center mt-1 text-xs text-blue-600 hover:underline">
                <FiEdit className="mr-1" /> Edit Profile
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <ul className="py-1">
           <Link to='/profile'>  <MenuItem icon={<FiUser />} text="View Profile" /></Link>
            <MenuItem icon={<FiCreditCard />} text="Billing & Subscriptions" />
            <MenuItem icon={<FiBox />} text="Orders" />
            <MenuItem icon={<FiMapPin />} text="Manage Addresses" />
            <MenuItem icon={<FiHeart />} text="Saved Items" />
            <Link to = '/notification' >     <MenuItem icon={<FiBell />} text="Notifications" /> </Link>
       
            <MenuItem icon={<FiSettings />} text="Settings" />
          </ul>
          <hr className="my-1" />

           <Link to = '/logout'> <button className="flex items-center w-full px-5 py-3 text-red-600 hover:bg-red-50 rounded-b-2xl transition">
            <FiLogOut className="mr-2" />
            Logout
          </button></Link>
         
        </div>
      )}
    </div>
  );
}

// Helper for single menu item
function MenuItem({ icon, text }) {
  return (
    <li className="flex items-center px-5 py-2 hover:bg-blue-50 cursor-pointer transition">
      <span className="mr-3 text-blue-600">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
