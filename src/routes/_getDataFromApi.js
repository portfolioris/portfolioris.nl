import glob from 'glob';
import fs from 'fs';
import fm from 'front-matter';
import path from 'path';

const fetch = require('node-fetch');
const xml2js = require('xml2js');

require('dotenv')
  .config({
    path: `.env.${process.env.NODE_ENV}`,
  });

const getMovies = (async () => {
  const response = await fetch(process.env.TMDB_API_URL, {
    headers: {
      Authorization: process.env.TMDB_API_TOKEN,
    },
  });

  const result = await response.json();
  return result.results;
});

const getBooks = (async () => {
  const response = await fetch(process.env.GOODREADS_URL);

  const xml = await response.text();
  const parser = new xml2js.Parser({ explicitArray: false });
  const result = await parser.parseStringPromise(xml);
  return result.GoodreadsResponse.reviews.review;
});

const getPages = (directory, uriPrefix = '') => {
  const pages = [];

  const files = glob.sync('**/*.md', {
    cwd: directory,
  });

  files.forEach((file) => {
    const fileData = fs.readFileSync(`${directory}/${file}`);
    const page = fm(fileData.toString()).attributes;
    page.uri = `${uriPrefix}${path.dirname(file) === '.' ? '' : `${path.dirname(file)}/`}${path.basename(file, '.md')}`;
    pages.push(page);
  });

  return pages;
};

export { getPages, getMovies, getBooks };
