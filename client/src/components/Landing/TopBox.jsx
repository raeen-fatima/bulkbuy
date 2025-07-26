import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaInstagram, FaYoutube } from "react-icons/fa";

function InfoBox({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-2xl text-blue-950 mb-2">{icon}</div>
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
function TopBox() {
  return (
    <div className="py-20 px-6">
       {/* Top Info Boxes */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        <InfoBox icon={<FaMapMarkerAlt />} title="Locate Us" desc="Riverside 25, San Diego, California" />
        <InfoBox icon={<FaClock />} title="Open Hours" desc="Mon to Fri: 10 AM - 9 PM" />
        <InfoBox icon={<FaPhoneAlt />} title="Reservation" desc="62 123 456789 - mail@exampl.com" />
      </div>
    </div>
  )
}

export default TopBox
