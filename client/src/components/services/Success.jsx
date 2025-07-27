// Success.jsx
import { useSearchParams, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function Success() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const msg =
    type === "group"
      ? "You’ve successfully joined a group order!"
      : "Your individual order has been placed successfully!";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-100 px-4 py-20">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md w-full">
        <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-6">{msg}</p>

        <Link
          to="/"
          className="inline-block bg-blue-950 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-900 transition"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
