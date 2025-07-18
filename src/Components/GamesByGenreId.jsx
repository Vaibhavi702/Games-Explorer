import React, { useEffect } from "react";

function GamesByGenreId({ gameListByGenres ,selectedGenreName}) {
  useEffect(() => {
    gameListByGenres;
    selectedGenreName;
  }, []);

  return (
    <div className="md:block bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 ml-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700">
        {selectedGenreName} Games
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {gameListByGenres.map((item) => (
          <div
            key={item.name}
            className="relative flex flex-col bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <img
              src={item.background_image}
              alt={item.name}
              className="w-full h-[180px] object-cover rounded-lg"
            />
            {item.metacritic && (
              <span
                className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${
                  item.metacritic >= 80
                    ? "bg-green-500"
                    : item.metacritic >= 60
                    ? "bg-yellow-500"
                    : "bg-red-500"
                } text-white`}
              >
                {item.metacritic}
              </span>
            )}
            <h1 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
              {item.name}
            </h1>
            
            <div className="flex items-center justify-between text-gray-600 dark:text-gray-300 mt-2">
              <span className="flex items-center text-yellow-500 dark:text-yellow-400">
                ⭐ {item.rating}
              </span>
              <span className="flex items-center text-gray-500 dark:text-gray-400">
                💬 {item.reviews_count}
              </span>
              <span className="flex items-center text-red-500">
                🔥 {item.reviews_text_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenreId;
