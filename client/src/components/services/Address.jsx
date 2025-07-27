// Address.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Address() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); // group or single
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, address, pincode, city } = formData;
    if (!name || !phone || !address || !pincode || !city) {
      setError("Please fill in all fields.");
      return;
    }

    // Save to localStorage (simulate backend step)
    localStorage.setItem("address", JSON.stringify(formData));
    navigate(`/summary/${id}?type=${type}`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 py-16 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Delivery Address</h2>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Full Address"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            rows="3"
            value={formData.address}
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-1/2 px-4 py-2 border rounded focus:outline-none"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              className="w-1/2 px-4 py-2 border rounded focus:outline-none"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-950 text-white py-2 w-full rounded hover:bg-blue-900 transition"
          >
            Continue to Summary
          </button>
        </form>
      </div>
    </section>
  );
}
