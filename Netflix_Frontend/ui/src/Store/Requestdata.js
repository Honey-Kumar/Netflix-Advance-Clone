import React from "react";
const kids = "kid";
export let count = 1;
export const YTAPI_KEY = "AIzaSyCMjZ6mfcDOMEUYPOymH58X-hM3HbkiyyY";
export const YTAPI_URL = (searchterm) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchterm}&key=${YTAPI_KEY}`
export const API_KEY = "2f1f62b5a54f31e7f6836c9e757a21a7";
export const API_URL = "https://api.themoviedb.org/3";
export const request = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  NetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  Toprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  TopActions: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  genres: `/genre/movie/list?api_key=${API_KEY}`,
  Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Horrow: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Documentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  kids: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${kids}&include_adult=false`,
  Drama: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Drama&include_adult=false`,
  News: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=News&include_adult=false`,
  Music: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Music&include_adult=false`,
  Thriller: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Thriller&include_adult=true`,
  Mystery: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Mystery&include_adult=true`,
  Talk: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Talk&include_adult=true`,
  Western: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Western&include_adult=true`,
  Politics: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=War & Politics&include_adult=true`,
  Crime: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Crime&include_adult=true`,
  Soap: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Soap&include_adult=true`,
  gameshow: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=gameshow&include_adult=true`,
  SciFantasy: `/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=Sci-Fi & Fantasy&include_adult=true`,
  upcomming: `/movie/upcoming?api_key=${API_KEY}&language=tr-TR&page=${count}`,
  hindi: `/discover/movie?api_key=${API_KEY}&with_origin_country=IN&language=hi  `,
  // Search: `search/movie?query=${search_data}&api_key=${Constants.API_KEY}`,
};
//  https://api.themoviedb.org/3/search/tv?api_key=<>&language=en-US&page=1&query=death&include_adult=false
