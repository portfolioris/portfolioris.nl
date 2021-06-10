import fs from 'fs';
import fm from 'front-matter';
import marked from 'marked';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import { getBooks, getMovies, getPages } from './$getDataFromApi';
import Figure from '../components/molecules/Figure.svelte';

hljs.registerLanguage('css', css);
const renderer = new marked.Renderer();

renderer.paragraph = (input) => {
  const hasImage = input.startsWith('<figure>');
  return hasImage ? input : `<p>${input}</p>`;
};

renderer.image = (href, title, text) => (
  Figure.render({
    figcaption: text,
    imgHref: href,
    alt: title,
  }).html);

export async function get(req) {
  const uri = req.params.rest.replace('|', '/');
  const pagesCollection = getPages('content/pages');
  const pageData = pagesCollection.find((page) => page.uri === uri);

  if (!pageData) {
    return {
      body: {
        error: '404',
      },
    };
  }

  const segments = [];
  const pieces = uri.split('/');

  const pathData = pieces.map((segment) => {
    segments.push(segment);
    return pagesCollection.find((page) => page.uri === segments.join('/'));
  });

  const siteFile = fs.readFileSync('content/globals/site.md');
  const siteData = fm(siteFile.toString()).attributes;

  if (pageData.modules) {
    if (pageData.modules.some((module) => module.type === 'blogOverview')) {
      pageData.blogs = getPages('content/pages/blog', 'blog/');
    }

    if (pageData.modules.some((module) => module.type === 'movies')) {
      pageData.movies = await getMovies();
    }

    if (pageData.modules.some((module) => module.type === 'books')) {
      pageData.books = await getBooks();
    }
  }

  if (pageData.template === 'blog') {
    // get author info
    if (fs.existsSync(`content/authors/${pageData.author}.md`)) {
      const authorFile = fs.readFileSync(`content/authors/${pageData.author}.md`);
      pageData.author = fm(authorFile.toString()).attributes;
    }

    // get the body of the MD file, parse it
    const pageFile = fs.readFileSync(`content/pages/${uri}.md`);
    pageData.content = fm(pageFile.toString()).body;

    pageData.content = marked(
      pageData.content,
      {
        renderer,
        highlight: (code, language) => {
          const validLanguage = hljs.getLanguage(language) ? language : 'css';
          return `<div class="c-codeblock">${hljs.highlight(code, { language: validLanguage }).value}</div>`;
        },
      },
    );
  }

  return {
    body: {
      ...pageData,
      site: siteData,
      path: pathData,
    },
  };
}
