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
      <div className="relative md:w-full max-w-md md:min-h-[550px] rounded-xl  bg-white px-6 py-6 md:p-10 shadow-2xl flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
