import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-[50%] left-[50%]">
      <span className="loading loading-spinner text-secondary"></span>
    </div>
  );
};

export default Loader;
