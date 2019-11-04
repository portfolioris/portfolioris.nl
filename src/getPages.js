import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import hljs from 'highlight.js';
// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  // renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  // pedantic: false,
  // gfm: true,
  // breaks: false,
  // sanitize: false,
  // smartLists: true,
  // smartypants: false,
  // xhtml: false
});

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
