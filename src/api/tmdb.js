import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';

const config = {
  method: 'GET',
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGFhNzY1ZjlhMzVhOTdiNTBiZjI5NmNkZGIzZTBhNyIsInN1YiI6IjY0NTE4NGUwMzNhZDhmMDBmZWYyN2FhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryw4dh3H0xPOea1Y2cbKZvI8bFHdhr2M3oPtuPEBQes',
  },
};

const tmdb = axios.create(config);
export async function getTrending(timeWindow = 'day', language = 'en-US') {
  const url = '/trending/movie/${timeWindow}';
  const params = { language };
  const response = await tmdb.get(url, { params });
  return response.data.results;
}
