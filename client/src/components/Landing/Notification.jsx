import { FiBell, FiClock, FiX } from "react-icons/fi";

// Sample notifications (replace with your real data or props)
const notifications = [
  {
    id: 1,
    title: "Order Shipped",
    message: "Your order #1234 has been shipped!",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    title: "Profile Updated",
    message: "Your profile details were updated successfully.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 3,
    title: "New Offer!",
    message: "Flat 20% off on your next bulk order.",
    time: "Just now",
    read: false,
  },
];

export default function NotificationSection() {
  return (
    <section className="flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 px-2">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 mt-10">
        {/* Header */}
        <div className="flex items-center mb-4 gap-2">
          <FiBell className="text-indigo-700 text-2xl" />
          <h2 className="font-bold text-indigo-700 text-2xl">Notifications</h2>
        </div>
        {/* List */}
        <ul className="divide-y">
          {notifications.length === 0 && (
            <div className="text-gray-500 text-center py-6">
              No notifications yet!
            </div>
          )}
          {notifications.map((n) => (
            <li
              key={n.id}
              className={`flex items-start py-4 px-1 transition ${!n.read ? "bg-indigo-50" : ""}`}
            >
              <div className="flex-shrink-0 mt-1">
                <FiBell className="text-blue-500 text-lg" />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`font-semibold ${!n.read ? "text-indigo-700" : "text-gray-800"}`}>
                      {n.title}
                    </span>
                    <p className="text-gray-600 text-sm">{n.message}</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-400 transition p-1 rounded">
                    <FiX />
                  </button>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                  <FiClock />
                  {n.time}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
