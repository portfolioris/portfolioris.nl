import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

const getPages = () => {
  const pages = new Map();

  fs
    .readdirSync('src/pages')
    .filter(file => file[0] !== '.' && path.extname(file) === '.md')
    .map(file => {
      const md = fs.readFileSync(`src/pages/${file}`, 'utf-8');
      const pageData = matter(md);
      pageData.parsedContent = marked(pageData.content);
      pageData.slug = path.basename(file, '.md') === 'home' ? '/' : path.basename(file, '.md');
      pages.set(pageData.slug, pageData);
    });

  return pages;
};

export default getPages;
