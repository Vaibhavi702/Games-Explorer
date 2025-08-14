import axios from "axios";
const key="a305f0f865bf4657bd37158239ddf99c";

const axiosCreate = axios.create({      
    baseURL: "https://api.rawg.io/api"
});

const getGenres = axiosCreate.get('/genres?key='+key);
const getGames = axiosCreate.get('/games?key='+key);
const getGamesByGenre =(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);

export default{
    getGenres,
    getGames,
    getGamesByGenre
}