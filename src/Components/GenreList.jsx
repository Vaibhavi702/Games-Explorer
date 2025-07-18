import React, { useEffect,useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
function GenreList({genreId,selectedGenreName}) {
    const [genres, setGenres] = useState([]);
    useEffect(()=>{ 
        getGenres();
    },[])
    const getGenres = ()=>{
        GlobalApi.getGenres.then((resp)=>{
            setGenres(resp.data.results);
        })
    }
    return (
      <div className='p-4 w-full h-screen sticky top-0 left-0 bg-white dark:bg-gray-900 shadow-lg overflow-y-auto scrollbar-hide'>
      <h2 className="text-[30px] font-bold text-gray-900 dark:text-white mb-4">
      Genres
      </h2>
      {genres.map((item) => (
      <div
      onClick={()=>{genreId(item.id);selectedGenreName(item.name)}}
        key={item.id}
        className="flex gap-3 items-center mb-2 p-2 cursor-pointer rounded-lg 
        transition-all duration-300 transform hover:scale-105 
        hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <img
        src={item.image_background}
        alt={item.name}
        className="w-[70px] h-[70px] rounded-lg transition-transform duration-300 hover:scale-110 "
        />
        <h3 className="text-gray-900 dark:text-white text-lg font-medium 
        transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
        {item.name}
        </h3>
      </div>
      ))}
    </div>
    )
}

export default GenreList
