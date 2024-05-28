"use client";

import { useState, useEffect } from "react";
import Message from "./Message";
import useStore from "@/app/store";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const wantToChat = useStore((state) => state.wantToChat);
  const toggleWantToChat = useStore((state) => state.toggleWantToChat);

  useEffect(() => {
    setIsOpen(wantToChat);
  }, [wantToChat]);

  const [isOpen, setIsOpen] = useState(wantToChat);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
    toggleWantToChat();
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages }),
        }
      );

      const data = await response.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.answer },
      ]);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed ${isOpen ? "bottom-2 right-0" : "bottom-8 right-8"} sm:bottom-10  sm:right-10 z-50 `}>
      <button
        className="text-white bg-main rounded-full w-12 sm:w-14 h-12 sm:h-14 flex justify-center items-center shadow-lg focus:outline-none border-[1px] border-black p-[2px]"
        onClick={toggleChatBox}
      >
        {!isOpen ? (
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 119.35"
            stroke="#05aff2"
            className="z-10"
          >
            <title>chatbot</title>
            <path d="M57.49,29.2V23.53a14.41,14.41,0,0,1-2-.93A12.18,12.18,0,0,1,50.44,7.5a12.39,12.39,0,0,1,2.64-3.95A12.21,12.21,0,0,1,57,.92,12,12,0,0,1,61.66,0,12.14,12.14,0,0,1,72.88,7.5a12.14,12.14,0,0,1,0,9.27,12.08,12.08,0,0,1-2.64,3.94l-.06.06a12.74,12.74,0,0,1-2.36,1.83,11.26,11.26,0,0,1-2,.93V29.2H94.3a15.47,15.47,0,0,1,15.42,15.43v2.29H115a7.93,7.93,0,0,1,7.9,7.91V73.2A7.93,7.93,0,0,1,115,81.11h-5.25v2.07A15.48,15.48,0,0,1,94.3,98.61H55.23L31.81,118.72a2.58,2.58,0,0,1-3.65-.29,2.63,2.63,0,0,1-.63-1.85l1.25-18h-.21A15.45,15.45,0,0,1,13.16,83.18V81.11H7.91A7.93,7.93,0,0,1,0,73.2V54.83a7.93,7.93,0,0,1,7.9-7.91h5.26v-2.3A15.45,15.45,0,0,1,28.57,29.2H57.49ZM82.74,47.32a9.36,9.36,0,1,1-9.36,9.36,9.36,9.36,0,0,1,9.36-9.36Zm-42.58,0a9.36,9.36,0,1,1-9.36,9.36,9.36,9.36,0,0,1,9.36-9.36Zm6.38,31.36a2.28,2.28,0,0,1-.38-.38,2.18,2.18,0,0,1-.52-1.36,2.21,2.21,0,0,1,.46-1.39,2.4,2.4,0,0,1,.39-.39,3.22,3.22,0,0,1,3.88-.08A22.36,22.36,0,0,0,56,78.32a14.86,14.86,0,0,0,5.47,1A16.18,16.18,0,0,0,67,78.22,25.39,25.39,0,0,0,72.75,75a3.24,3.24,0,0,1,3.89.18,3,3,0,0,1,.37.41,2.22,2.22,0,0,1,.42,1.4,2.33,2.33,0,0,1-.58,1.35,2.29,2.29,0,0,1-.43.38,30.59,30.59,0,0,1-7.33,4,22.28,22.28,0,0,1-7.53,1.43A21.22,21.22,0,0,1,54,82.87a27.78,27.78,0,0,1-7.41-4.16l0,0ZM94.29,34.4H28.57A10.26,10.26,0,0,0,18.35,44.63V83.18A10.26,10.26,0,0,0,28.57,93.41h3.17a2.61,2.61,0,0,1,2.41,2.77l-1,14.58L52.45,94.15a2.56,2.56,0,0,1,1.83-.75h40a10.26,10.26,0,0,0,10.22-10.23V44.62A10.24,10.24,0,0,0,94.29,34.4Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="z-10"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white w-[350px] rounded-lg shadow-lg border border-gray-200">
          <div className="bg-main h-10 p-0 flex items-center rounded-lg">
            <p className="px-2 font-bold">My personal chatbot</p>
          </div>

          <div className="overflow-y-auto h-[400px] px-5 pt-5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user" ? "user-message" : "assistant-message"
                }
              >
                <Message type={msg.role} message={msg.content} />
              </div>
            ))}
            {loading && <Message type={"assistant"} message={"Typing..."} />}
          </div>

          <form onSubmit={sendMessage} className="mt-auto">
            <div>
              <input
                className="w-full max-w-md p-2 border-2 border-gray-300 rounded shadow-xl text-secondary outline-none"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question about Luis..."
                disabled={loading}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
