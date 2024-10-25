import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Side_nav = () => {
  return (
    <div className=" px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-5">
      <div className="flex items-center gap-4 ">
        <Image
          src="/icons/logo.png"
          alt="logo"
          className="w-5"
          width={20}
          height={20}
        />
        <p className="text-black  font-medium text-2xl">Logo Here</p>
      </div>
      <div className="">
        <Button
          sx={{
            width: "25%",
            border: "1px solid",
            borderRadius: "0.75rem",
            backgroundColor: "#007BFF",
            color: "white",
            margin: "1rem 0rem",
          }}
          variant="outlined"
        >
          New Chat +
        </Button>
      </div>

      <div className="flex items-center justify-between w-3/12  ">
        <Image
          src="/icons/search-normal.png"
          alt="logo"
          className="w-5"
          width={20}
          height={20}
        />
        <Image
          src="/icons/setting-4.png"
          alt="logo"
          className="w-5"
          width={20}
          height={20}
        />
      </div>
      <div className="flex items-center justify-between w-3/12 mt-4 ">
      <p className="text-black  font-medium text-sm">Recent Chats</p>
        <Image
          src="/icons/arrow-right.png"
          alt="logo"
          className="w-5"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Side_nav;
