import Image from "next/image";
import React from "react";

const PreferencesNav = () => {
  return (
    <div className="flex items-center justify-between w-full mt-4">
      <div className="flex items-center space-x-1">
        <Image src="/icons/setting.png" alt="expand" width={20} height={20} />
        <p className="text-black font-medium text-sm">Preferences</p>
      </div>

      <Image src="/icons/arrow-right.png" alt="expand" width={20} height={20} />
    </div>
  );
};

export default PreferencesNav;
