import axios from 'axios';
import {
  INIT_FETCH_CONFIG,
  DEFAULT_QUERY_PARAMS_FOR_SEARCH,
} from 'utils/constant';

const tmdb = axios.create(INIT_FETCH_CONFIG);
let apiConfigDetails = null;

async function getApiConfigDetails() {
  const url = '/configuration';
  try {
    const response = await tmdb(url);
    apiConfigDetails = response.data;
    return response.data;
  } catch (error) {
    console.error(`Error in getting of API configuration:${error}`);
  }
}

getApiConfigDetails();

export function generateImageUrl(path, size) {
  const baseUrl = apiConfigDetails.images.secure_base_url;
  const url = baseUrl + size + path;
  console.log(`Image url: `, url);
  return url;
}

export async function getTrending(timeWindow = 'day', language = 'en-US') {
  const url = `/trending/movie/${timeWindow}`;
  const params = { language };
  const response = await tmdb(url, { params });
  return response.data.results;
}

export async function getMovieBySearch(query, page) {
  const url = `/search/movie`;
  const params = { ...DEFAULT_QUERY_PARAMS_FOR_SEARCH, query, page };
  const response = await tmdb(url, { params });
  return response.data.results;
}

export async function getMovieDetailsById(movieId, language = 'en-US') {
  const url = `/movie/${movieId}`;
  const params = { language };
  const response = await tmdb.get(url, { params });
  return response.data;
}
