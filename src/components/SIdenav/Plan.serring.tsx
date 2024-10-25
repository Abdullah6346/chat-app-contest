import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Plan_setting = () => {
  return (
    <div className="flex items-center justify-between w-full mt-4">
      <div className="flex items-center space-x-1">
        <Image
          src="/icons/ocean-protocol-(ocean).png"
          alt="expand"
          className="w-7"
          width={20}
          height={20}
        />
        <p className="text-black font-medium text-md">
          Plan Settings
          <p className="text-xs">20/20 left credit</p>
        </p>
      </div>

      <Button variant="contained" sx={{ backgroundColor: "#FD7E14" }}>
        Upgrade
      </Button>
    </div>
  );
};

export default Plan_setting;
