// Summary.jsx
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Your deals data (or fetch from API)
const deals = [
  {
    id: 1,
    title: "Fresh Tomatoes (5kg)",
    price: "₹120",
    discountPrice: "₹100",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg",
  },
  {
    id: 2,
    title: "Onions (10kg)",
    price: "₹250",
    discountPrice: "₹200",
    image:
      "https://m.media-amazon.com/images/I/51DJ-9xkuQL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "Cooking Oil (5L)",
    price: "₹500",
    discountPrice: "₹420",
    image: "https://5.imimg.com/data5/HQ/SB/MY-19588085/sunflower-oil-5ltr.png",
  },
  {
    id: 4,
    title: "Green Chilies (2kg)",
    price: "₹80",
    discountPrice: "₹65",
    image:
      "https://cdn.shopify.com/s/files/1/1489/8850/files/green-chilli_759_480x480.jpg?v=1649307953",
  },
];

export default function Summary() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); // group or single
  const navigate = useNavigate();

  const [deal, setDeal] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const selected = deals.find((d) => d.id === parseInt(id));
    setDeal(selected);

    const addr = JSON.parse(localStorage.getItem("address"));
    setAddress(addr);

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) navigate("/login");
  }, [id, navigate]);

  const handlePlaceOrder = () => {
    // optionally clear storage: localStorage.removeItem("address")
    navigate(`/success?type=${type}`);
  };

  if (!deal || !address) return null;

  const finalPrice = type === "group" ? deal.discountPrice : deal.price;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 py-16 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl w-full space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Order Summary</h2>

        {/* Deal Info */}
        <div className="flex items-center gap-6">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-32 h-32 object-cover rounded"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{deal.title}</h3>
            <p className="text-gray-600 text-sm mt-1">
              Order Type:{" "}
              <span className="font-medium text-blue-700 capitalize">
                {type === "group" ? "Group Buy" : "Individual Buy"}
              </span>
            </p>
            <p className="mt-2 text-red-700 font-bold text-xl">{finalPrice}</p>
          </div>
        </div>

        {/* Address Info */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-2">Delivering To</h4>
          <p className="text-sm text-gray-700">{address.name}</p>
          <p className="text-sm text-gray-700">{address.phone}</p>
          <p className="text-sm text-gray-700">{address.address}</p>
          <p className="text-sm text-gray-700">
            {address.city} - {address.pincode}
          </p>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full shadow"
        >
          Place Order
        </button>
      </div>
    </section>
  );
}
