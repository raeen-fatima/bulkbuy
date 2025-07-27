import React from "react";
import { FaLocationArrow, FaBox, FaUser } from "react-icons/fa";
import GroupPaymentSection from "./Grouppayment";
// import GroupPaymentSection from "./Grouppayment";

const groupOrders = [
  { name: "Aman", qty: 3, address: "Sector 21, Noida" },
  { name: "Priya", qty: 2, address: "DLF Phase 3, Gurgaon" },
  { name: "Ravi", qty: 5, address: "Rajouri Garden, Delhi" },
];

export default function GroupOrderSummary() {
  const totalQty = groupOrders.reduce((sum, user) => sum + user.qty, 0);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 max-w-4xl mx-auto mt-10 border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">📦 Group Order Summary</h2>

      <div className="space-y-4">
        {groupOrders.map((user, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-xl flex justify-between items-start shadow-sm">
            <div>
              <p className="text-blue-900 font-semibold flex items-center gap-2">
                <FaUser className="text-blue-500" /> {user.name}
              </p>
              <p className="text-gray-700 flex items-center gap-2 mt-1">
                <FaBox className="text-green-500" /> Needs: <strong>{user.qty} kg</strong>
              </p>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <FaLocationArrow className="text-red-400" /> Address: {user.address}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-lg font-semibold text-blue-700">
        🧮 Total Quantity: <span className="text-black">{totalQty} kg</span>
      </div>

      {/* <GroupPaymentSection /> */}
      <GroupPaymentSection />
    </div>
  );
}
