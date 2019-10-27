import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import getPages from '../getPages';

export function get(req, res, next) {
  const pages = getPages();

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify(pages));
}
