import axios from "axios";
const key="bf6baa7b14e8467fbd6a0ac538b5c26c";

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