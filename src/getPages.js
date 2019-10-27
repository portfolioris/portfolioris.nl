import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPages = () => {
  const pages = [];

  fs
    .readdirSync('src/pages')
    .filter(file => file[0] !== '.' && path.extname(file) === '.md')
    .map(file => {
      const md = fs.readFileSync(`src/pages/${file}`, 'utf-8');
      pages.push({
        slug: path.basename(file, '.md'),
        ...matter(md),
      });
    });

  return pages;
};

export default getPages;
