import React from "react";
import background from "../assets/bg_login.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center blur-none"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="absolute inset-0 bg-white/30" />
      <div className="relative w-full mx-4 md:w-full md:mx-0 max-w-md rounded-xl bg-white p-6 md:p-8 shadow-2xl flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
