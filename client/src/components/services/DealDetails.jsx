import { useParams, Link } from "react-router-dom";
import { FaUsers, FaTags, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";

const deals = [
  {
    id: 1,
    title: "Fresh Tomatoes (5kg)",
    description: "High-quality ripe tomatoes sourced directly from farmers.",
    price: "₹120",
    discountPrice: "₹100",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg",
    groupJoined: 10,
    groupLimit: 15,
    timeLeft: 3600,
  },
  // Add other deals similarly...
];

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function DealDetails() {
  const { id } = useParams();
  const deal = deals.find((item) => item.id === Number(id));
  const [timer, setTimer] = useState(deal?.timeLeft || 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!deal)
    return (
      <div className="p-8 text-center text-red-600 text-lg font-semibold">
        Deal not found.
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-[300px] sm:h-[400px] md:h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-white text-red-700 text-xs px-3 py-1 rounded-full shadow flex items-center gap-1">
              <FaClock className="text-red-700" /> {formatTime(timer)}
            </div>
          </div>

          {/* Text & Action Section */}
          <div className="p-6 sm:p-8 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {deal.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {deal.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaUsers className="text-blue-950" />
              {deal.groupJoined}/{deal.groupLimit} joined
            </div>

            <div className="text-sm text-blue-950 bg-blue-100 px-3 py-1 w-fit rounded-full flex items-center gap-2 mt-1">
              <FaTags /> Save more with group order
            </div>

            <div className="flex items-center gap-3 text-lg mt-2">
              <p className="text-gray-400 line-through">{deal.price}</p>
              <p className="text-red-700 font-bold text-xl">{deal.discountPrice}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                to="/login"
                className="bg-blue-950 text-white text-sm px-5 py-2 rounded-full shadow hover:bg-blue-900 transition text-center"
              >
                Join Group Order
              </Link>
              <Link
                to={`/buy/${deal.id}`}
                className="bg-green-600 text-white text-sm px-5 py-2 rounded-full shadow hover:bg-green-700 transition text-center"
              >
                Buy Individually
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
