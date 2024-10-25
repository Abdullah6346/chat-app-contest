import Image from "next/image";
import React from "react";

const Apple = () => {
  return (
    <div className="flex items-center justify-center gap-4 bg-slate-200 px-4 py-2 rounded-lg w-[85%]">
      <Image
        src="/icons/apple.png"
        alt="apple"
        width={30}
        height={30}
        className="pb-2"
      />
      <p className="text-black text-lg">Sign in with Apple ID</p>
    </div>
  );
};

export default Apple;
