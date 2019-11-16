import fs from 'fs';
import path from 'path';
import matter from 'front-matter';
import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
});

const getPages = (markdownFilesPath) => {
  const pages = new Map();

  fs
    .readdirSync(markdownFilesPath)
    .filter(file => file[0] !== '.' && path.extname(file) === '.md')
    .map(file => {
      const md = fs.readFileSync(`${markdownFilesPath}/${file}`, 'utf-8');
      const pageData = matter(md);
      pageData.parsedContent = marked(pageData.body);
      pageData.slug = path.basename(file, '.md') === 'home' ? '/' : path.basename(file, '.md');
      pages.set(pageData.slug, pageData);
    });

  return pages;
};

export default getPages;
