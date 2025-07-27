import React, { useState, useEffect } from "react";
import { FaUsers, FaClock, FaUserCircle, FaComments } from "react-icons/fa";
import GroupOrderSummary from "./GroupOrderSummary";

export default function JoinGroupOrder() {
  const [groupMembers, setGroupMembers] = useState(["Aman", "Priya", "Ravi"]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [timeLeft, setTimeLeft] = useState(3600); // seconds

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { name: "You", text: message }]);
      setMessage("");
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}m ${sec}s`;
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto mt-10 overflow-hidden border border-blue-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-5 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Join Group Order</h2>
          <p className="text-sm text-blue-100">Bulk savings | Only few slots left!</p>
        </div>
        <FaUsers className="text-3xl" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 p-6">
        {/* Left: Info + Chat */}
        <div className="space-y-4">
          {/* Group Info */}
          <div className="text-gray-700">
            <p><FaUsers className="inline mr-2 text-purple-600" /> <strong>{groupMembers.length}/15</strong> people joined</p>
            <p><FaClock className="inline mr-2 text-red-500" /> Time left: <span className="font-semibold">{formatTime(timeLeft)}</span></p>
            <p className="mt-2 text-green-700 font-medium">Save ₹20 by joining this group!</p>
          </div>

          {/* Member Avatars */}
          <div className="flex flex-wrap gap-2 mt-3">
            {groupMembers.map((name, index) => (
              <div key={index} className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-800 font-medium shadow">
                {name}
              </div>
            ))}
          </div>

          {/* Join Button */}
          <button className="cursor-pointer bg-blue-700 text-white w-full py-2 rounded-lg mt-5 font-semibold hover:bg-blue-800 transition">
            ✅ Join Now & Save
          </button>
        </div>

        {/* Right: Chat Box */}
        <div className="border border-gray-300 rounded-xl p-4 h-64 flex flex-col justify-between">
          <div className="overflow-y-auto h-48 space-y-2 pr-2">
            {chat.map((msg, index) => (
              <div key={index} className="text-sm text-gray-800 bg-gray-100 p-2 rounded-lg">
                <strong>{msg.name}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none"
            />
            <button onClick={handleSend} className=" cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <FaComments />
            </button>
          </div>
        </div>
      </div>
      <GroupOrderSummary/>
    </div>
  );
}
