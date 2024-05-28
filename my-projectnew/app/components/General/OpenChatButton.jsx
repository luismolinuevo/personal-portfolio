"use client";

import React from "react";
import useStore from "@/app/store";

//The button used in the about me
export default function OpenChatButton() {
  const toggleWantToChat = useStore((state) => state.toggleWantToChat);
  return (
    <div>
      <button
        className="border px-3 py-2 rounded-xl bg-main"
        onClick={toggleWantToChat}
      >
        Ask chatbot about me
      </button>
    </div>
  );
}
