"use client";
import { Button, Drawer, IconButton, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import React, { useState } from "react";
import Prefrences_nav from "./prefrences.nav";
import Support_nav from "./support.nav";
import Plan_setting from "./Plan.setting";

interface Chat {
  id: number;
  name: string;
  time: string;
}

const Side_nav: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [chats, setChats] = useState<Chat[]>([
    { id: 1, name: "What is AI assistant?", time: "Today" },
    { id: 2, name: "Best laptop brands and features", time: "Today" },
    { id: 3, name: "How many days are there in a year?", time: "Yesterday" },
    { id: 4, name: "Can AI lead to job displacement?", time: "Yesterday" },
    {
      id: 5,
      name: "What role does AI play in addressing global issues?",
      time: "Yesterday",
    },
    { id: 6, name: "Who is John Doe?", time: "Yesterday" },
    {
      id: 7,
      name: "Lorem ipsum lorem ipsum dolor sit amet.",
      time: "Yesterday",
    },
    { id: 8, name: "How many days are there in a year?", time: "Last week" },
    { id: 9, name: "Can AI lead to job displacement?", time: "Last week" },
    {
      id: 10,
      name: "Lorem ipsum dolor sit amet, consectetur.",
      time: "Last week",
    },
  ]);

  // Function to handle creating a new chat
  const handleNewChat = () => {
    const newChat: Chat = {
      id: chats.length + 1,
      name: `New Chat ${chats.length + 1}`,
      time: "Today",
    };
    setChats([newChat, ...chats]);
  };

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedChats = filteredChats.reduce(
    (acc: Record<string, Chat[]>, chat) => {
      if (!acc[chat.time]) acc[chat.time] = [];
      acc[chat.time].push(chat);
      return acc;
    },
    {}
  );

  return (
    <div>
      <div className="md:hidden p-2">
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="md:hidden"
      >
        <div className="w-64 px-4 py-5 relative">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/logo.png"
              alt="logo"
              className="w-5 cursor-pointer"
              width={20}
              height={20}
            />
            <p className="text-black font-medium text-2xl">Logo Here</p>
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          {/* Search Input - Only shown when isSearchVisible is true */}
          {isSearchVisible && (
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ marginTop: "1rem" }}
            />
          )}

          <div className="mt-4">
            <Button
              sx={{
                width: "100%",
                border: "1px solid",
                borderRadius: "0.75rem",
                backgroundColor: "#007BFF",
                color: "white",
                margin: "1rem 0",
              }}
              variant="outlined"
              onClick={handleNewChat}
            >
              New Chat +
            </Button>
          </div>

          <div className="flex items-center justify-between w-full mt-4">
            <Image
              src="/icons/search-normal.png"
              alt="search"
              className="w-5 cursor-pointer"
              width={20}
              height={20}
              onClick={() => setIsSearchVisible(!isSearchVisible)} // Toggle visibility
            />
            <Image
              src="/icons/setting-4.png"
              alt="settings"
              className="w-5 cursor-pointer"
              width={20}
              height={20}
            />
          </div>

          <div className="flex items-center justify-between w-full mt-4">
            <p className="text-black font-medium text-sm">Recent Chats</p>
            <Image
              src="/icons/arrow-right.png"
              alt="expand"
              className="w-5 cursor-pointer"
              width={20}
              height={20}
            />
          </div>

          <div className="mt-4 h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            {Object.entries(groupedChats).map(([time, chats]) => (
              <div key={time} className="mb-4">
                <p className="text-gray-500 font-bold mb-2">{time}</p>
                {chats.map((chat) => (
                  <div key={chat.id} className="pl-4 mb-1">
                    <p className="text-black truncate">{chat.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Prefrences_nav />
          <Support_nav />
          <Plan_setting />
        </div>
      </Drawer>

      {/* Full Sidebar - Visible on Desktop */}
      <div className="hidden md:block px-4 py-5 w-64">
        <div className="flex items-center gap-4">
          <Image
            src="/icons/logo.png"
            alt="logo"
            className="w-5 cursor-pointer"
            width={20}
            height={20}
          />
          <p className="text-black font-medium text-2xl">Logo Here</p>
        </div>

        {/* Search Input - Only shown when isSearchVisible is true */}
        {isSearchVisible && (
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ marginTop: "1rem" }}
          />
        )}

        <div className="mt-4">
          <Button
            sx={{
              width: "100%",
              border: "1px solid",
              borderRadius: "0.75rem",
              backgroundColor: "#007BFF",
              color: "white",
              margin: "1rem 0",
            }}
            variant="outlined"
            onClick={handleNewChat}
          >
            New Chat +
          </Button>
        </div>

        <div className="flex items-center justify-between w-full mt-4">
          <Image
            src="/icons/search-normal.png"
            alt="search"
            className="w-5 cursor-pointer"
            width={20}
            height={20}
            onClick={() => setIsSearchVisible(!isSearchVisible)} // Toggle visibility
          />
          <Image
            src="/icons/setting-4.png"
            alt="settings"
            className="w-5 cursor-pointer"
            width={20}
            height={20}
          />
        </div>

        <div className="flex items-center justify-between w-full mt-4">
          <p className="text-black font-medium text-sm">Recent Chats</p>
          <Image
            src="/icons/arrow-right.png"
            alt="expand"
            className="w-5 cursor-pointer"
            width={20}
            height={20}
          />
        </div>

        <div className="mt-4 h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          {Object.entries(groupedChats).map(([time, chats]) => (
            <div key={time} className="mb-4">
              <p className="text-gray-500 font-bold mb-2">{time}</p>
              {chats.map((chat) => (
                <div key={chat.id} className="pl-4 mb-1">
                  <p className="text-black truncate">{chat.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Prefrences_nav />
        <Support_nav />
        <Plan_setting />
      </div>
    </div>
  );
};

export default Side_nav;
