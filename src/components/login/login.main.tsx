import React from "react";
import Form from "../signin/SigninForm";
import Login_conversation from "./Login.conversation";

const Login_main = () => {
  return (
    <div className="grid border grid-cols-1 md:grid-cols-2">
      <Form />
      <div className="hidden md:block">
        <Login_conversation />
      </div>
    </div>
  );
};

export default Login_main;
