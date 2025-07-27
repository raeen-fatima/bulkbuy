import React from "react";
import { FaLocationArrow, FaBox, FaUser } from "react-icons/fa";
import GroupPaymentSection from "./Grouppayment";

const groupOrders = [
  { name: "Aman", qty: 3, address: "Sector 21, Noida" },
  { name: "Priya", qty: 2, address: "DLF Phase 3, Gurgaon" },
  { name: "Ravi", qty: 5, address: "Rajouri Garden, Delhi" },
];

export default function GroupOrderSummary() {
  const totalQty = groupOrders.reduce((sum, user) => sum + user.qty, 0);

  return (
    <section className="min-h-screen  py-12 px-4">
      <div className="max-w-5xl mx-auto p-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-950 mb-10 tracking-tight">
          📦 Group Order Summary
        </h2>

        {/* User Order Cards */}
        <div className="space-y-5">
          {groupOrders.map((user, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl p-6 shadow-sm border border-indigo-200 flex flex-col sm:flex-row justify-between items-start"
            >
              <div>
                <p className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                  <FaUser className="text-blue-950" /> {user.name}
                </p>

                <p className="text-sm text-gray-800 mt-2 flex items-center gap-2">
                  <FaBox className="text-blue-950" />
                  Quantity: <span className="font-bold">{user.qty} kg</span>
                </p>

                <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
                  <FaLocationArrow className="text-blue-950" />
                  Address: {user.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Quantity */}
        <div className="mt-10 text-right">
          <p className="text-lg sm:text-xl font-bold text-blue-950">
            🧮 Total Quantity Ordered:{" "}
            <span className="text-red-500">{totalQty} kg</span>
          </p>
        </div>

        {/* Payment Section */}
        <div className="mt-12">
          <GroupPaymentSection />
        </div>
      </div>
    </section>
  );
}
