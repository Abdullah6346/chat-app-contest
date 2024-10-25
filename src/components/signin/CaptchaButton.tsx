import Image from "next/image";
import React from "react";
import captcha from "../../../public/Logo.png";

const captchaButton = () => {
  return (
    <div className="sm:px-8  border-2 border-[#E9ECEF] rounded-sm flex items-center justify-start xl:gap-[7.5rem] lg-[5.3rem] gap-16">
      <div className="flex items-center justify-center gap-5">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          className="w-6 h-6 rounded-lg"
        />
        <label className="text-black">I am human</label>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image src={captcha} alt="refresh" width={50} height={50} />
        <p className="text-black text-xs">Privacy - terms</p>
      </div>
    </div>
  );
};

export default captchaButton;
