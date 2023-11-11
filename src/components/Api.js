import axios from 'axios';

const API_KEY = '2c8b5740783f6142728e542efc99987b';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMovie = async query => {
  const params = {
    api_key: API_KEY,
    query,
    include_adult: false,
    language: 'en-US',
  };
  const response = await axios.get(`${BASE_URL}search/movie`, { params });
  return response.data.results;
};

export const fetchDetails = async movie_id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const response = await axios.get(`${BASE_URL}movie/${movie_id}`, { params });
  return response.data;
};

export const fetchCasts = async movie_id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const response = await axios.get(`${BASE_URL}movie/${movie_id}/credits`, {
    params,
  });
  return response.data.cast;
};

export const fetchReviews = async movie_id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const response = await axios.get(`${BASE_URL}movie/${movie_id}/reviews`, {
    params,
  });
  return response.data.results;
};
