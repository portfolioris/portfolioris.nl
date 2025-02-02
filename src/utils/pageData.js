import { getBooks, getMovies } from "./getDataFromApi.js";
import fs from "fs";
// import fm from "front-matter";
// import { marked } from "marked";
// import hljs from "highlight.js/lib/core";
// import css from "highlight.js/lib/languages/css";
// import Figure from "../components/molecules/Figure.svelte";
import { error } from "@sveltejs/kit";
// import { compile } from "mdsvex";

// hljs.registerLanguage("css", css);
// const renderer = new marked.Renderer();

// renderer.paragraph = (input) => {
//   const hasImage = input.startsWith("<figure");
//   return hasImage ? input : `<p>${input}</p>`;
// };

// console.log(Figure().render());

// renderer.image = (href, title, text) => "jorp";
// Figure.render({
//   figcaption: text,
//   imgHref: href,
//   alt: title,
// }).html;

export async function pageData(uri) {
  const siteData = await import("/content/globals/site.md");
  const pagesData = import.meta.glob("/content/pages/**/*.md", { eager: true });
  const pageMd = pagesData[`/content/pages/${uri}.md`];

  if (!pageMd) {
    error(404, {
      site: siteData.metadata,
    });
  }

  const page = pageMd.metadata;

  if (page?.modules) {
    if (page.modules.some((module) => module.type === "blogOverview")) {
      const blogs = Object.entries(pagesData)
        .filter(([key]) => key.startsWith("/content/pages/blog/"))
        .map(([key, value]) => ({
          uri: key.replace("/content/pages", "").slice(0, -3),
          ...value.metadata,
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      page.blogs = blogs;
    }

    if (page.modules.some((module) => module.type === "movies")) {
      // page.movies = await getMovies();
    }

    if (page.modules.some((module) => module.type === "books")) {
      page.books = await getBooks();
    }
  }

  if (page?.template === "blog") {
    const foo = await import(`/content/pages/${uri}.md`);
    // page.content = pageMd.default().render;
    console.log("foo:", foo);
    // try {
    //   const authorData = await import(
    //     `../../content/authors/${page.author}.md`
    //   );
    //   page.authorData = authorData.metadata;
    // } catch (e) {
    //   page.authorData = null;
    // }
  }

  return {
    ...page,
    site: siteData.metadata,
  };
}

/*
export async function __pageData(uri) {
  // get site data
  const siteFile = fs.readFileSync("content/globals/site.md");
  const siteData = fm(siteFile.toString()).attributes;
  // find page
  const pagesCollection = getPages("content/pages");
  const pageData = pagesCollection.find((page) => page.uri === uri);

  if (!pageData) {
    error(404, {
      site: siteData,
    });
  }

  const segments = [];
  const pieces = uri.split("/");
  const pathData = pieces.map((segment) => {
    segments.push(segment);
    return pagesCollection.find((page) => page.uri === segments.join("/"));
  });

  if (pageData?.modules) {
    if (pageData.modules.some((module) => module.type === "blogOverview")) {
      pageData.blogs = getPages("content/pages/blog", "blog/");
    }

    if (pageData.modules.some((module) => module.type === "movies")) {
      pageData.movies = await getMovies();
    }

    if (pageData.modules.some((module) => module.type === "books")) {
      pageData.books = await getBooks();
    }
  }

  if (pageData?.template === "blog") {
    // get author info
    if (fs.existsSync(`content/authors/${pageData.author}.md`)) {
      const authorFile = fs.readFileSync(
        `content/authors/${pageData.author}.md`,
      );
      pageData.author = fm(authorFile.toString()).attributes;
    }

    // get the body of the MD file, parse it
    const pageFile = fs.readFileSync(`content/pages/${uri}.md`);
    pageData.content = fm(pageFile.toString()).body;
    // pageData.content = marked.parse(pageData.content, {});
    // pageData.content = (await compile(pageData.content)).code;
    // console.log(pageData.content);

    // pageData.content = marked(pageData.content, {
    //   renderer,
    //   highlight: (code, language) => {
    //     const validLanguage = hljs.getLanguage(language) ? language : "css";
    //     return `<div class="c-codeblock">${
    //       hljs.highlight(code, { language: validLanguage }).value
    //     }</div>`;
    //   },
    // });
  }

  return {
    ...pageData,
    site: siteData,
    path: pathData,
  };
}
*/
