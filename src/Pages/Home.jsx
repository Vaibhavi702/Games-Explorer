import React, { useState, useEffect } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";
function Home() {
  const [games, setGames] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");
  useEffect(() => {
    getGames();
    getGamesByGenre(4);
  }, []);

  const getGames = () => {
    GlobalApi.getGames.then((resp) => {
      setGames(resp.data.results);
    });
  };

  const getGamesByGenre = (id) => {
    GlobalApi.getGamesByGenre(id).then((resp) => {
      console.log("GenreIUD", id);
      setGameListByGenres(resp.data.results);
      console.log(resp.data.results);
      
    });
  };
  return (
    <>
      <div className="grid grid-cols-4">
        <div className=" h-full hidden md:block dark:bg-slate-900">
          <GenreList genreId={(genreId)=>{getGamesByGenre(genreId)}}
            selectedGenreName={(name)=>setSelectedGenreName(name)}/>
        </div>
        <div className="col-span-4 md:col-span-3 dark:bg-slate-900">

          {games?.length>0 ?
          <div>
          <Banner gameBanner={games[0]} />
          <TrendingGames Trendgames={games} />
          <GamesByGenreId gameListByGenres={gameListByGenres} 
          selectedGenreName={selectedGenreName}/>
          </div>
          :null}
        </div>
      </div>
    </>
  );
}

export default Home;
