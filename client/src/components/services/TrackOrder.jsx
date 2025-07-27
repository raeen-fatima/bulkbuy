import React from "react";

const TrackOrderService = () => {
  return (
    <div className=" bg-gradient-to-b from-indigo-50 to-blue-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200 p-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-indigo-100 text-indigo-800 rounded-full p-4 shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#6366F1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v2a1 1 0 002 0v-2a1 1 0 10-2 0zm4 0v2a1 1 0 002 0v-2a1 1 0 10-2 0zM4 10V4a1 1 0 011-1h15a1 1 0 011 1v6M4 10v6a1 1 0 001 1h2m12-7V4m0 6v6a1 1 0 01-1 1h-2m-8 0v-3a1 1 0 011-1h2a1 1 0 011 1v3" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-indigo-900 mb-1">
              Track Group Order in Real-Time
            </h1>
            <p className="text-gray-600 text-lg">
              Get live updates on your group order status, delivery, and supplier progress.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <FeatureCard
            title="Live Delivery Map"
            description="Track your order on a real-time map and see exactly where it is."
            icon="🗺️"
          />
          <FeatureCard
            title="ETA Predictions"
            description="Stay updated with accurate estimated times of arrival for each order phase."
            icon="⏰"
          />
          <FeatureCard
            title="Order History"
            description="View detailed logs and history of all your group orders in one place."
            icon="📜"
          />
        </div>

        <div className="flex items-center justify-center">
          <button className="px-8 py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl shadow-lg transition transform hover:scale-105 text-lg font-semibold">
            Explore Live Orders →
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper component for feature cards
const FeatureCard = ({ title, description, icon }) => (
  <div className="flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-6 w-full border hover:shadow-2xl transition">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-bold text-xl mb-2 text-indigo-800">{title}</h3>
    <p className="text-gray-500 text-center">{description}</p>
  </div>
);

export default TrackOrderService;
