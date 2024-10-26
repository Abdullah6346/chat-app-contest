import Image from "next/image";
import React from "react";
import Conversation_input from "./Conversation.input";

const Conversation_main = () => {
  return (
    <div className="p-2 sm:p-6 w-[80%] min-h-[80vh] flex flex-col">
      <div className="flex items-center justify-between border-b border-gray-300 pb-4">
        <Image
          src="/icons/maximize-3.png"
          alt="expand"
          width={24}
          height={24}
          className="cursor-pointer max-sm:hidden transform transition-transform duration-200 hover:scale-110"
        />
        <p className="text-black font-medium md:text-2xl text-base">
          Welcome back, John Doe
        </p>

        <Image
          src="/icons/Ellipse 2.png"
          alt="profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer border-2 border-white transform transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Centering the ocean-center image without causing overflow */}
      <div className="flex-grow flex items-center justify-center">
        <Image
          src="/icons/ocean-center.png"
          alt="chat"
          width={100}
          height={100}
        />
      </div>

      {/* <Conversation_input /> */}
    </div>
  );
};

export default Conversation_main;
