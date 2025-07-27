
import React, { useState } from "react";
import TrackOrderService from "./TrackOrder";

const initialGroupMembers = [
  { name: "Aman", qty: 3, address: "Delhi", hasPaid: false },
  { name: "Priya", qty: 2, address: "Mumbai", hasPaid: false },
  { name: "Ravi", qty: 1, address: "Lucknow", hasPaid: false },
];

const itemPrice = 100;

export default function GroupPaymentSection() {
  const [groupMembers, setGroupMembers] = useState(initialGroupMembers);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleDummyPayment = (memberIndex) => {
    const updatedMembers = [...groupMembers];
    updatedMembers[memberIndex].hasPaid = true;
    setGroupMembers(updatedMembers);

    alert(`${updatedMembers[memberIndex].name} paid ₹${updatedMembers[memberIndex].qty * itemPrice} ✅`);

    const allPaid = updatedMembers.every((m) => m.hasPaid);
    if (allPaid) {
      setTimeout(() => {
        setOrderPlaced(true);
      }, 1000);
    }
  };

  const totalAmount = groupMembers.reduce(
    (sum, m) => sum + m.qty * itemPrice,
    0
  );

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-indigo-200  p-6 rounded shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Group Order Summary</h2>

      {groupMembers.map((member, idx) => (
        <div key={idx} className="flex justify-between items-center border-b py-3">
          <div>
            <p className="font-semibold">
              {member.name} ({member.qty}kg)
            </p>
            <p className="text-sm text-gray-500">{member.address}</p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-red-500 font-semibold">₹{member.qty * itemPrice}</span>
            {member.hasPaid ? (
              <span className="text-green-600 text-sm">✅ Paid</span>
            ) : (
              <button
                onClick={() => handleDummyPayment(idx)}
                className="bg-gray-950 text-white px-4 py-1 rounded hover:bg-blue-950 transition"
              >
                Dummy Pay
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Show order placed summary */}
      {orderPlaced && (
        <div className="mt-6 p-5 bg-green-50 border border-green-300 rounded-xl shadow-inner">
          <h3 className="text-xl font-bold text-green-800 mb-4">🎉 Order Placed Successfully!</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {groupMembers.map((m, i) => (
              <div
                key={i}
                className="border p-3 rounded bg-white shadow-sm hover:bg-gray-50"
              >
                <p><strong>👤 Name:</strong> {m.name}</p>
                <p><strong>📦 Qty:</strong> {m.qty} kg</p>
                <p><strong>💰 Paid:</strong> ₹{m.qty * itemPrice}</p>
                <p><strong>🏠 Address:</strong> {m.address}</p>
              </div>
            ))}

          </div>

          <div className="mt-5 text-right text-base font-semibold text-green-700">
            Total Order Value: ₹{totalAmount}
      <TrackOrderService />

          </div>
        </div>
      )}
    </div>
  );
}

