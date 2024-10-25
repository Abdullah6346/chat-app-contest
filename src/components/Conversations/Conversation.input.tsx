"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";

const Conversation_input = () => {
  const [message, setMessage] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessage("");
  };

  // Toggle the dropdown on clip icon click
  const handleClipClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <form className="px-4 mb-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <Image
          src="/icons/paperclip.png"
          alt="paperclip"
          width={20}
          height={20}
          className="absolute inset-y-0 left-3 mt-2 flex items-center cursor-pointer"
          onClick={handleClipClick}
        />

        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 pl-10 pr-10 bg-[#F0F0F0] border-gray-300 text-black"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="absolute inset-y-0 right-3 flex items-center pe-3"
        >
          <Image
            src="/icons/send-2.png"
            alt="send"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute left-8 bottom-full mb-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-40">
            <ul className="py-2">
              <li className="px-4 py-1 gap-3 flex items-center hover:bg-gray-100 cursor-pointer">
                <Image
                  src={"/icons/camera.png"}
                  alt="camera"
                  width={20}
                  height={20}
                />
                Select a file
              </li>
              <li className="px-4  py-1 gap-3 flex items-center hover:bg-gray-100 cursor-pointer">
                <Image
                  src={"/icons/microphone.png"}
                  alt="camera"
                  width={20}
                  height={20}
                />
                Audio
              </li>
              <li className="px-4 py-1 gap-3 flex items-center hover:bg-gray-100 cursor-pointer">
                <Image
                  src={"/icons/document-upload.png"}
                  alt="camera"
                  width={20}
                  height={20}
                />
                Video
              </li>
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};

export default Conversation_input;
