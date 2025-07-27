import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function OrderPage() {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 100;
  const productName = "Fresh Tomatoes (5kg)";

  const totalPrice = quantity * pricePerUnit;

  return (
    <div className=" py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto  overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left - Order Summary */}
          <div className="p-8 bg-gradient-to-br from-indigo-50 to-red-50">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Order Summary</h2>

            <div className="text-blue-950 space-y-3">
              <p><span className="font-semibold">Product:</span> {productName}</p>
              <p><span className="font-semibold">Price per unit:</span> ₹{pricePerUnit}</p>
              <p><span className="font-semibold">Quantity:</span> {quantity}</p>
              <p><span className="font-semibold text-xl">Total:</span> ₹{totalPrice}</p>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-900 mb-1">Update Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full px-3 py-2 outline-none  border-b "
              />
            </div>
          </div>

          {/* Right - Buyer Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-6">Your Details</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" placeholder="John Doe" required className="w-full px-4 py-2 border-b border-blue-950 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" placeholder="9876543210" required className="w-full px-4 py-2 border-b border-blue-950  outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea placeholder="Your full delivery address" rows="3" required className="w-full px-4 py-2 border-b border-blue-950  outline-none"></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-gray-950 text-white rounded-md hover:bg-blue-950 font-semibold text-lg transition"
              >
                Confirm Order - ₹{totalPrice}
              </button>

              <Link to="/" className="block text-center text-blue-950 hover:underline mt-4">
                ← Back to Home
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
