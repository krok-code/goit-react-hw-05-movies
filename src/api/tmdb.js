import axios from 'axios';

const BASEURL = 'https://api.themoviedb.org/3';

const CONFIG = {
  method: 'GET',
  BASEURL,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGFhNzY1ZjlhMzVhOTdiNTBiZjI5NmNkZGIzZTBhNyIsInN1YiI6IjY0NTE4NGUwMzNhZDhmMDBmZWYyN2FhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryw4dh3H0xPOea1Y2cbKZvI8bFHdhr2M3oPtuPEBQes',
  },
};

const DEFAULT_QUERY_PARAMS_FOR_SEARCH = {
  include_adult: false,
  language: 'en-US',
  page: 1,
};

const tmdb = axios.create(CONFIG);

export async function getTrending(timeWindow = 'day', language = 'en-US') {
  const url = `/trending/movie/${timeWindow}`;
  const params = { language };
  const response = await tmdb.get(url, { params });
  return response.data.results;
}

export async function getMovieBySearch(query, page) {
  const url = `/search/movie`;
  const params = { ...DEFAULT_QUERY_PARAMS_FOR_SEARCH, query, page };
  const response = await tmdb.get(url, { params });
  return response.data.results;
}
