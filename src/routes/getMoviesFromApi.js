const fetch = require('node-fetch');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const getMoviesFromApi = (async () => {
  const response = await fetch(process.env.TMDB_API_URL, {
    headers: {
      Authorization: process.env.TMDB_API_TOKEN,
    },
  });

  const result = await response.json();
  return result.results;
});

export default getMoviesFromApi;
