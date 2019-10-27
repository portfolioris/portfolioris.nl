import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import getPages from '../getPages';

export function get(req, res, next) {
  const pages = getPages();

  // the `slug` parameter is available because this file is called [slug].json.js
  const { slug } = req.params;

  const page = pages.find((page) => page.slug === slug);
  if (page) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    res.end(JSON.stringify(page));
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});

    res.end(JSON.stringify({message: 'Not found'}));
  }
}
