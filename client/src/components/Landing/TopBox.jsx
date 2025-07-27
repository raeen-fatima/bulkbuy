import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

function InfoBox({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <div className="text-xl sm:text-2xl text-blue-950 mb-2">{icon}</div>
      <h3 className="font-semibold text-base sm:text-lg text-gray-800">{title}</h3>
      <p className="text-sm sm:text-[15px] text-gray-600">{desc}</p>
    </div>
  );
}

function TopBox() {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10">
        <InfoBox
          icon={<FaMapMarkerAlt />}
          title="Locate Us"
          desc="Riverside 25, San Diego, California"
        />
        <InfoBox
          icon={<FaClock />}
          title="Open Hours"
          desc="Mon to Fri: 10 AM - 9 PM"
        />
        <InfoBox
          icon={<FaPhoneAlt />}
          title="Reservation"
          desc="62 123 456789 - mail@exampl.com"
        />
      </div>
    </div>
  );
}

export default TopBox;
