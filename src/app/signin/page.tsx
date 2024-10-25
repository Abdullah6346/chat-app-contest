import React from "react";
import SigninForm from "@/components/signin/SigninForm";

const page = () => {
  return (
    <div className="  bg-[#FFFFFF] py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto container ">
        <div className=" w-full border-2 border-black">
          <SigninForm />
        </div>
        <div>hii</div>
      </div>
    </div>
  );
};

export default page;
