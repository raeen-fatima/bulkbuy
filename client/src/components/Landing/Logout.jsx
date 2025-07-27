import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  // अगर आप localStorage में login token रखते हैं, यहाँ clear कर सकते हैं
  // useEffect(() => { localStorage.removeItem("token"); }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 px-2">
      <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6 items-center max-w-sm w-full">
        <FiLogOut className="text-5xl text-red-500" />
        <h2 className="text-2xl font-bold text-indigo-700 text-center">
          You’ve been logged out
        </h2>
        <p className="text-gray-600 text-center">
          Thank you for using <span className="font-semibold text-indigo-600">BULKBUY</span>.<br />
          Come back soon!
        </p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 to-blue-700 text-white rounded-full shadow hover:scale-105 transition"
        >
          <FiArrowLeft />
          Go To Homepage
        </button>
      </div>
    </section>
  );
}
