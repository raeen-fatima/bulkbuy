import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiMessageCircle, FiX } from "react-icons/fi";

// Demo AI reply (you can replace with real backend)
function aiReply(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you today? 😊";
  }
  if (input.includes("order") && input.includes("track")) {
    return "To track your order, go to 'Services' > 'Track Order'.";
  }
  if (input.includes("bulk") || input.includes("group")) {
    return "We offer group buying options to help save more! 🛒";
  }
  if (input.includes("refund")) {
    return "Refunds are processed within 3-5 business days. Contact support for help.";
  }
  if (input.includes("delivery") || input.includes("shipping")) {
    return "Delivery usually takes 2–4 days depending on your location.";
  }
  if (input.includes("contact") || input.includes("support")) {
    return "You can contact us at support@bulkbuy.com or call 1800-123-456.";
  }
  if (input.includes("bye")) {
    return "Goodbye! Have a great day! 👋";
  }

  return "Hmm, I didn’t get that. Try asking about order, refund, group buy, or support.";
}

export default function Bot() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm your BulkBuy Assistant 🤖. How can I help you?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [typing, setTyping] = useState(false);
  const endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, show]);

  function handleSend(e, textFromBtn = null) {
    e?.preventDefault();
    const userMsg = textFromBtn || input.trim();
    if (!userMsg) return;

    const newMsg = {
      from: "user",
      text: userMsg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botResponse = aiReply(userMsg);
      const botMsg = {
        from: "bot",
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 800);
  }

  const suggestedQuestions = [
    "Track my order",
    "What is BulkBuy?",
    "How do I get a refund?",
    "Delivery time?",
    "Contact support",
  ];

  return (
    <>
      {!show && (
        <button
          onClick={() => setShow(true)}
          className="cursor-pointer fixed bottom-5 right-6 z-50 p-4 bg-gradient-to-r from-indigo-800 to-blue-950 rounded-full shadow-lg text-white text-2xl hover:scale-110 transition"
          aria-label="Open Chatbot"
        >
          <FiMessageCircle />
        </button>
      )}

      {show && (
        <div className="fixed bottom-5 right-5 sm:right-10 z-50 w-80 max-w-xs bg-white rounded-2xl shadow-2xl border border-blue-100 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-t-2xl">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <FiMessageCircle /> BulkBuy ChatBot
            </div>
            <button onClick={() => setShow(false)} className="cursor-pointer text-white hover:text-red-300 text-xl">
              <FiX />
            </button>
          </div>

          {/* Chat body */}
          <div className="flex-1 p-3 overflow-y-auto max-h-72 space-y-3 bg-blue-50/50 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-2xl shadow max-w-[80%]
                  ${msg.from === "user" ? "bg-indigo-500 text-white self-end rounded-br-md" : "bg-white border border-blue-100 text-gray-800 self-start rounded-bl-md"}`}>
                  {msg.text}
                  <div className="text-[10px] text-gray-400 mt-1 text-right">{msg.time}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="text-gray-500 text-xs italic">Bot is typing...</div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-3 pb-1 pt-2 flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={(e) => handleSend(e, q)}
                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-blue-200 hover:bg-indigo-100 transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="flex items-center gap-2 px-3 pb-3 pt-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm"
              autoComplete="off"
            />
            <button
              type="submit"
              className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-lg shadow transition"
              aria-label="Send"
            >
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
