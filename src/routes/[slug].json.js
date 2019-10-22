import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function get(req, res, next) {
  const lookup = new Map();

  fs
    .readdirSync('src/pages')
    .filter(file => file[0] !== '.' && path.extname(file) === '.md')
    .map(file => {
      const md = fs.readFileSync(`src/pages/${file}`, 'utf-8');
      lookup.set(path.basename(file, '.md'), matter(md));
    });

  // the `slug` parameter is available because this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(lookup.get(slug)));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
