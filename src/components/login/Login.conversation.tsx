import Image from "next/image";
import React from "react";
import Conversation_input from "../Conversations/Conversation.input";
import Login_messages from "./Loigin.messages";

const Login_conversation = () => {
  return (
    <div className="border rounded-xl px-5">
      <div className="flex items-center justify-between pr-4 border-b py-10 border-gray-300 pb-4">
        <p className="text-black font-medium text-2xl">Welcome back</p>

        <Image
          src="/icons/ocean-center.png"
          alt="profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer border-2 border-white transform transition-transform duration-200 hover:scale-105"
        />
      </div>

      <Login_messages />
      <div>
        <Conversation_input />
      </div>
    </div>
  );
};

export default Login_conversation;
