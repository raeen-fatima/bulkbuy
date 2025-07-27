import React, { useState, useEffect } from "react";
import { FaUsers, FaClock, FaComments, FaBolt } from "react-icons/fa";
import GroupOrderSummary from "./GroupOrderSummary";

export default function JoinGroupOrder() {
  const [groupMembers, setGroupMembers] = useState(["Aman", "Priya", "Ravi"]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [timeLeft, setTimeLeft] = useState(3600); // in seconds

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
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto   rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white px-6 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Join Group Order</h2>
            <p className="text-sm text-blue-100">
              Team up & save more – limited time only!
            </p>
          </div>
          <FaBolt className="text-3xl animate-pulse" />
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="space-y-2 text-gray-800">
              <p>
                <FaUsers className="inline mr-2 text-blue-950" />
                <strong>{groupMembers.length}/15</strong> people joined
              </p>
              <p>
                <FaClock className="inline mr-2 text-red-500" />
                Time Left: <span className="font-semibold">{formatTime(timeLeft)}</span>
              </p>
              <p className="text-green-700 font-semibold mt-1">
                🎁 Save ₹20 by joining this group!
              </p>
            </div>

            {/* Member Tags */}
            <div className="flex flex-wrap gap-2">
              {groupMembers.map((name, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-950 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>

            {/* Join Button */}
            <button className="w-full py-2 bg-gray-950 hover:bg-blue-950 text-white rounded-lg font-semibold transition">
               Join Now & Save
            </button>
          </div>

          {/* Right Side - Chat */}
          <div className="border border-gray-200 rounded-xl p-4 flex flex-col h-64">
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {chat.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-2 rounded-lg text-sm shadow-sm"
                >
                  <strong className="text-blue-800">{msg.name}:</strong>{" "}
                  <span className="text-gray-800">{msg.text}</span>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex items-center gap-2 mt-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-blue-950 hover:bg-blue-900 text-white p-2 rounded-md"
              >
                <FaComments />
              </button>
            </div>
          </div>
        </div>

        {/* Group Summary Below */}
        <div className="border-t mt-8 px-8 pb-10 pt-6">
          <GroupOrderSummary />
        </div>
      </div>
    </section>
  );
}
