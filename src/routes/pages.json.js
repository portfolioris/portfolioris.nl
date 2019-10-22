import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function get(req, res, next) {
  const pages = [];

  fs
    .readdirSync('src/pages')
    .filter(file => file[0] !== '.' && path.extname(file) === '.md')
    .map(file => {
      const md = fs.readFileSync(`src/pages/${file}`, 'utf-8');
      pages.push({
        slug: path.basename(file, '.md'),
        ...matter(md)
      });
    });

  let items = pages.map(page => {
    return {
      text: page.data.title,
      href: page.slug,
    }
  });

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify(items));
}
