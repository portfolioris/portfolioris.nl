import fetch from 'node-fetch';
import { getBooks, getMovies } from './getDataFromApi';

export async function get(req, res) {
  let uri = req.params.rest.join('/');
  if (uri === 'home') { // defined in index.svelte
    uri = '';
  }

  const siteQuery = await fetch(`${process.env.GRAV_API_URL}?data=site`);
  const siteData = await siteQuery.json();

  if (!siteData.pages[`/${uri}`]) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found in lookup' }));
    return;
  }

  const pageQuery = await fetch(`${process.env.GRAV_API_URL}${uri}`);
  const pageData = await pageQuery.json();

  if (pageData.template === 'modular') {
    if (pageData.children.some((module) => module.moduleTemplate === 'modular/blogoverview')) {
      const blogsQuery = await fetch(`${process.env.GRAV_API_URL}blog?data=blogs`);
      pageData.blogs = await blogsQuery.json();
    }

    if (pageData.children.some((module) => module.moduleTemplate === 'modular/movies')) {
      pageData.movies = await getMovies();
    }

    if (pageData.children.some((module) => module.moduleTemplate === 'modular/books')) {
      pageData.books = await getBooks();
    }
  }

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify({
    ...pageData,
    site: siteData,
  }));
}
