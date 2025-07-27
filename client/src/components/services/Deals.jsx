import { Link } from "react-router-dom";
import { FaUsers, FaTags, FaClock, FaFire } from "react-icons/fa";
import { useEffect, useState } from "react";

const deals = [
  {
    id: 1,
    title: "Fresh Tomatoes (5kg)",
    price: "₹120",
    discountPrice: "₹100",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg",
    groupJoined: 10,
    groupLimit: 15,
    timeLeft: 3600,
  },
  {
    id: 2,
    title: "Onions (10kg)",
    price: "₹250",
    discountPrice: "₹200",
    image:
      "https://m.media-amazon.com/images/I/51DJ-9xkuQL._UF1000,1000_QL80_.jpg",
    groupJoined: 7,
    groupLimit: 12,
    timeLeft: 7200,
  },
  {
    id: 3,
    title: "Cooking Oil (5L)",
    price: "₹500",
    discountPrice: "₹420",
    image: "https://5.imimg.com/data5/HQ/SB/MY-19588085/sunflower-oil-5ltr.png",
    groupJoined: 4,
    groupLimit: 10,
    timeLeft: 1800,
  },
  {
    id: 4,
    title: "Green Chilies (2kg)",
    price: "₹80",
    discountPrice: "₹65",
    image:
      "https://cdn.shopify.com/s/files/1/1489/8850/files/green-chilli_759_480x480.jpg?v=1649307953",
    groupJoined: 13,
    groupLimit: 15,
    timeLeft: 5400,
  },
];

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function DealsPage() {
  const [timers, setTimers] = useState(deals.map((deal) => deal.timeLeft));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) =>
        prev.map((time) => (time > 0 ? time - 1 : 0))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-gradient-to-b from-gray-100 to-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-14 sm:mb-16">
          Available Bulk Deals
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {deals.map((deal, index) => (
            <Link
              to={`/deals/${deal.id}`}
              key={deal.id}
              className="bg-gradient-to-b from-indigo-50 to-indigo-100 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 block"
            >
              {/* Image with labels */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <FaFire className="text-xs" /> Deal
                </div>
                <div className="absolute bottom-2 right-2 bg-white text-red-700 text-xs px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <FaClock className="text-red-700" />
                  <span className="font-medium">{formatTime(timers[index])}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug">
                  {deal.title}
                </h3>

                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FaUsers className="text-blue-950" />
                    {deal.groupJoined}/{deal.groupLimit} joined
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-blue-950 bg-blue-200 px-2 py-1 rounded-md">
                    <FaTags className="text-sm" /> Group Save
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400 line-through text-sm">{deal.price}</p>
                    <p className="text-red-700 font-bold text-base sm:text-lg">{deal.discountPrice}</p>
                  </div>

                  <Link
                    to={`/buy/${deal.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-blue-950 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow hover:bg-blue-900 transition"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
