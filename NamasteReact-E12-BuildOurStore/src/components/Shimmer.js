import React from "react";

const Shimmer = () => {
  return (
    <div className="container mx-auto animate-pulse flex gap-x-4 flex-wrap space-x-4 justify-center">
      {Array(28)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-80 h-[400px]  max-w-sm bg-gray-400 border border-gray-200 rounded-lg mt-4 mb-4"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
