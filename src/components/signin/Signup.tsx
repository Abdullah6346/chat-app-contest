import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="container mx-auto space-x-3">
      <p className="text-black text-center px-16 ">
        Don&apos;t you have an account?
        <Link href="/signup" className="text-blue-600 ml-2">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Signup;
