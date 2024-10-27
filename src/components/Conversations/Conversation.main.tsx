"use client";
import Image from "next/image";
import React from "react";
import Conversation_input from "./Conversation.input";
import Side_nav from "../SIdenav/Side.nav";

const icons = [
  { src: "/icons/copy.png", alt: "copy" },
  { src: "/icons/volume-low.png", alt: "volume" },
  { src: "/icons/refresh-2.png", alt: "refresh" },
  { src: "/icons/like.png", alt: "like" },
  { src: "/icons/dislike.png", alt: "dislike" },
];

const Conversation_main = ({
  mobile,
  desktop,
}: {
  mobile: boolean;
  desktop: boolean;
}) => {
  return (
    <div className="p-2 sm:p-6 w-full min-h-[80vh] flex flex-col bg-white shadow-lg rounded-md border border-gray-200">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-3">
        {!desktop && <Side_nav />}
        <Image
          src="/icons/maximize-3.png"
          alt="expand"
          width={24}
          height={24}
          className="cursor-pointer max-sm:hidden transform transition-transform duration-200 hover:scale-110"
        />
        <Image
          className="absolute right-4 z-10 top-10 bg-white rounded-full"
          src="/icons/notification.png"
          alt="notification"
          width={24}
          height={24}
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

      {/* Message content area */}
      {!desktop ? (
        <div className="flex flex-col space-y-2 p-4 overflow-y-auto">
          {/* Message Section with Logo on the Left */}
          <div className="flex items-start space-x-4">
            {/* Logo Section */}
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer flex-shrink-0"
            />

            {/* Text Message Section */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-3xl">
              <p className="text-gray-800 text-sm leading-6">
                This is the hamster. Hamsters are small and cute rodents. They
                are often kept as pets, and there are different types, the most
                popular being Syrian hamsters and dwarf hamsters. They are
                nocturnal animals, so they are usually active at night. Hamsters
                like to live alone, and in nature, they carry their food in
                their cheek pouches. They need toys such as running wheels in
                their cages because they need to move around a lot. They are
                easy to care for, but their teeth can grow back quickly if care
                is not taken, so appropriate food and toys must be provided.
                Their average lifespan is 2-3 years.
              </p>
            </div>
          </div>

          {/* Icon Row Section */}
          <div className="flex items-center space-x-3 pt-2">
            {icons.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                className="cursor-pointer"
              />
            ))}
            <p className="text-sm text-blue-400 cursor-pointer">
              See translation
            </p>
            <p className="text-xs text-gray-500">12:59</p>
          </div>

          {/* Voice and Waveform Section (Aligned to the Right) */}
          <div className="flex items-center justify-end space-x-2 pt-2">
            <Image
              src="/icons/play-circle.png"
              alt="play"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src="/icons/Waveform.png"
              alt="waveform"
              width={86}
              height={32}
            />
            <p className="text-xs text-gray-500">0:05</p>
          </div>
        </div>
      ) : null}

      {/* Centering an icon or image in the chat area */}
      <div className="flex-grow flex items-center justify-center">
        {desktop ? (
          <Image
            src="/icons/ocean-center.png"
            alt="chat"
            width={100}
            height={100}
          />
        ) : null}
      </div>

      {/* Conditional rendering of input component */}
      {!mobile && <Conversation_input />}
    </div>
  );
};

export default Conversation_main;
