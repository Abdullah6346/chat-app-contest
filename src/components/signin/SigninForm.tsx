import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";
import CaptchaButton from "@/components/signin/CaptchaButton";
import OrBorder from "./OrBorder";
import Apple from "./Apple";
import Google from "./Google";
import Facebook from "./Facebook";
import Signup from "./Signup";

const Form = () => {
  return (
    <div className="px-4 sm:px-12 py-6">
      <div className=" text-2xl sm:text-3xl text-[#212529] text-center">
        <h1>Sign in to your account</h1>
      </div>
      <form
        className="flex flex-col justify-between items-start
        gap-4  "
      >
        <div className="flex flex-col gap-4 lg:px-16 justify-center py-8 w-[100%] ">
          <input
            name="tel"
            id="tel"
            type="tel"
            placeholder="Phone number or email"
            className="px-4 py-2 rounded-lg border-2 border-[#E9ECEF]"
          />
        
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            className="px-4 py-2 rounded-lg border-2 border-[#E9ECEF]"
          />
        </div>
        <div className="text-blue-600 text-xl w-[100%] lg:px-16 text-end">
          <Link href="/">Forgot password?</Link>
        </div>
        <div className="xl:w-[75%] lg:w-[70%] md:w-[100%] w-full lg:ml-14 xl:ml-0">
          <SigninButton />
        </div>
        <div className=" xl:ml-16 lg:ml-14">
          <CaptchaButton />
        </div>
        <div className="xl:w-[75%] lg:w-[70%] md:w-[100%] w-full xl:ml-16 lg:ml-14">
          <OrBorder />
        </div>
        <div className="flex flex-col gap-2 mx-auto container xl:pl-14 lg:pl-12">
          <Apple />
          <Google />
          <Facebook />
        </div>
        <div>
          <Signup />
        </div>
      </form>
    </div>
  );
};

export default Form;
