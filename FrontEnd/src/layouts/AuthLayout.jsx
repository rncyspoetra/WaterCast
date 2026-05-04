import React from "react";
import background from "../assets/bg_login.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center blur-none"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative w-full max-w-md min-h-[550px] rounded-2xl  bg-white p-10 shadow-2xl flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
