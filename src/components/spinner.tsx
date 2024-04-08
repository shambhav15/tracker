import React from "react";

const Spinner = () => {
  return (
    <div className="animate-pulse relative flex max-w-sm w-full mx-auto space-x-4">
      <div className="rounded-full bg-white h-3 w-3 ml-1"></div>
    </div>
  );
};

export default Spinner;
