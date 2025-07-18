import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {
    gameBanner
  }, []);
  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden pt-10">
      <img
        key={gameBanner.id}
        src={gameBanner.background_image}
        alt={gameBanner.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="absolute bottom-10 left-5 text-white">
        <h1 className="text-3xl font-bold drop-shadow-md">{gameBanner.name}</h1>
        <button className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
          Get Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
