// import glob from 'glob';
import fs from "fs";
// import fm from "front-matter";
import path from "path";
import xml2js from "xml2js";
import { parse } from "node-html-parser";
/*

export const getPages = (directory, uriPrefix = "") => {
  const pages = [];

  // const files = import.meta.glob.sync("**!/!*.md", {
  //   cwd: directory,
  // });
  const files = import.meta.glob("/content/pages/!**!/!*.md");
  console.log(files);

  files.forEach((file) => {
    const fileData = fs.readFileSync(`${directory}/${file}`);
    const page = fm(fileData.toString()).attributes;
    page.uri = `${uriPrefix}${
      path.dirname(file) === "." ? "" : `${path.dirname(file)}/`
    }${path.basename(file, ".md")}`;
    pages.push(page);
  });

  // sort by date, descending
  pages.sort((a, b) => b.date.getTime() - a.date.getTime());

  return pages;
};
*/

export async function getMovies() {
  const response = await fetch(import.meta.env.VITE_IMDB_URL);
  const result = await response.text();
  const html = parse(result);
  const $items = html.querySelectorAll("#ratings-container .lister-item");
  return [...$items].map(($item) => {
    return {
      title: $item.querySelector(".lister-item-header a").innerText,
      year: $item.querySelector(".lister-item-year").innerText,
      href: $item.querySelector(".lister-item-header a").getAttribute("href"),
      watchDate: $item
        .querySelectorAll(".text-muted")[2]
        .innerText.substring(8),
      rating: $item.querySelectorAll(".ipl-rating-star__rating")[1].innerText,
    };
  });
}

export async function getBooks() {
  let xml;

  try {
    const response = await fetch(import.meta.env.VITE_GOODREADS_URL);
    xml = await response.text();
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(xml);
    return result.GoodreadsResponse.reviews.review;
  } catch (e) {
    //
  }
}
