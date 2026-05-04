import React from "react";
import { Spinner } from "@/components/ui/spinner";

const LoadingHandler = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner className="w-6 h-6 animate-spin" />
    </div>
  );
};

export default LoadingHandler;
