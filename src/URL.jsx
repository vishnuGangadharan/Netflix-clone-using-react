import {API_KEI} from './constants/Constants'

export const original = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEI}&language=en-US`
export const actions = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEI}&with_genres=28`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEI}&with_genres=35`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEI}&with_genres=27`