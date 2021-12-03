import glob from 'glob';
import fs from 'fs';
import fm from 'front-matter';
import path from 'path';
import xml2js from 'xml2js';

export const getPages = (directory, uriPrefix = '') => {
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

  // sort by date, descending
  pages.sort((a, b) => b.date.getTime() - a.date.getTime());

  return pages;
};

export async function getMovies() {
  const response = await fetch(import.meta.env.VITE_TMDB_API_URL, {
    headers: {
      Authorization: import.meta.env.VITE_TMDB_API_TOKEN,
    },
  });

  const result = await response.json();
  return result.results;
}

export async function getBooks() {
  const response = await fetch(import.meta.env.VITE_GOODREADS_URL);

  const xml = await response.text();
  const parser = new xml2js.Parser({ explicitArray: false });
  const result = await parser.parseStringPromise(xml);
  return result.GoodreadsResponse.reviews.review;
}
