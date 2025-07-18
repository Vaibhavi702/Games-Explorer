import React, { useEffect } from "react";

function TrendingGames({ Trendgames }) {
  useEffect(() => {
    Trendgames;
  }, []);
  return (
    <div className=" hidden md:block dark:bg-gray-900"> 
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 ml-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700">
        Trending Games
      </h1>

      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-gray-900">
        {Trendgames.map(
          (item, index) =>
            index < 4 && (
              <div
                key={item.name}
                className="flex flex-col items-center transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="w-full h-[300px] object-cover rounded-t-lg"
                />
                <h1 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h1>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
