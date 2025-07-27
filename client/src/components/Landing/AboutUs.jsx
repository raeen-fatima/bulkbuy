import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaInstagram, FaYoutube } from "react-icons/fa";

export default function AboutUs() {

    
  
  
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4 text-center">
     

      {/* About Us Text */}
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-sm uppercase tracking-wide text-black font-mono mb-3">About Us</p>
        <h2 className="text-5xl font-extrabold text-gray-800 font-playfair">The Delicious Story</h2>

        <p className="text-gray-600 mt-4 text-sm leading-relaxed">our journey began with a simple idea: to bring the best street food vendors together and make it easier for them to access bulk deals and trusted suppliers. BULKBUY is not just a platform; it's a community where vendors can thrive, connect, and grow.</p>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          From humble beginnings, we have grown into a vibrant network of street vendors who share a passion for quality food and exceptional service. Our mission is to empower these vendors by providing them with the tools they need to succeed, from bulk pricing to real-time support. we believe that when vendors come together, they can achieve more than they ever could alone.can unlock better deals, share resources, and create a stronger community.
        </p>
      </div>

      {/* Images and Social Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto items-center mt-10">
        <div className="rounded-t-full overflow-hidden w-68 h-68 mx-auto shadow-lg">
          <img
            src="https://i.ytimg.com/vi/4XcKBcZElq8/maxresdefault.jpg"
            alt="side vendor 1"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="rounded-t-full rounded-b-full overflow-hidden mx-auto shadow-lg">
          <img
            src="https://i.pinimg.com/474x/ca/60/97/ca6097c33cf5489571f4ef7a7ee2ca58.jpg"
            alt="main chef"
            className="object-cover w-[300px] h-full"
          />
        </div>

        <div className="rounded-t-full overflow-hidden w-68 h-68 mx-auto shadow-lg">
          <img
            src="https://www.savaari.com/blog/wp-content/uploads/2023/08/1024px-Roadside_Snacks_Stall.webp"
            alt="side vendor 2"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Circular Social Stats */}
      <div  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-md mx-auto mt-12">
        <div className="cursor-pointer" onClick={ ()=>{}}><CircleCard icon={<FaYoutube />} label="14K+" subtext="SUBSCRIBE" /></div>
       <div className="cursor-pointer" onClick={()=>{}}> <CircleCard icon={<FaInstagram />} label="14K+" subtext="FOLLOW US"  /></div>
      </div>
    </section>
  );
}



function CircleCard({ icon, label, subtext }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-36 h-36 rounded-full bg-blue-950 text-white flex flex-col items-center justify-center shadow-lg">
        <div className="text-2xl mb-1">{icon}</div>
        <h2 className="text-2xl font-bold">{label}</h2>
        <span className="text-sm font-light tracking-wider">{subtext}</span>
      </div>
    </div>
  );
}