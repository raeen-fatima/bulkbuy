import React from "react";

export default function Raw() {
  const materials = [
    {
      id: 1,
      name: "Wheat Grain",
      price: "₹25/kg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKz7oNGTthJYghmm7PgqEfG-d3_hWd0D0qA&s",
    },
    {
      id: 2,
      name: "Refined Sugar",
      price: "₹38/kg",
      image:
        "https://tiimg.tistatic.com/fp/1/008/360/25-to-50-kgs-bag-packaging-white-refined-sugar-082.jpg",
    },
    {
      id: 3,
      name: "Palm Oil (15L)",
      price: "₹1500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lY6YrkgbaGryygDQGcD-UmqQZk6hdIESMw&s",
    },
    {
      id: 4,
      name: "Raw Cotton",
      price: "₹78/kg",
      image:
        "https://ashapuraexporters.com/wp-content/uploads/2024/07/Raw-Cotton.webp",
    },
  ];

  return (
    <div className="h-164 bg-blue-50 px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Raw Material Deals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {materials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-blue-700 font-bold">{item.price}</p>
            <button className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-xl">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
