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
    <section className="min-h-screen py-12 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white shadow-md border border-blue-200 rounded-2xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-950 mb-10 tracking-tight">
          📦 Group Order Summary
        </h2>

        {/* Order Cards */}
        <div className="space-y-6">
          {groupOrders.map((user, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between gap-4 p-5 border border-indigo-100 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex-1">
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

        {/* Total Quantity Summary */}
        <div className="mt-10 text-right text-base sm:text-lg font-semibold text-blue-900">
          🧮 Total Quantity Ordered:
          <span className="ml-2 text-red-600 font-bold">{totalQty} kg</span>
        </div>

        {/* Payment Section */}
        <div className="mt-12">
          <GroupPaymentSection />
        </div>
      </div>
    </section>
  );
}
