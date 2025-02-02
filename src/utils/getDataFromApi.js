// import { glob } from "glob";
// import fs from "fs";
// import fm from "front-matter";
// import path from "path";
import xml2js from "xml2js";
import { parse } from "node-html-parser";

/*
export const getPages = (directory, uriPrefix = "") => {
  const files = import.meta.glob(`${directory}/!**!/!*.md`);

  console.log(files);

  return [];

  // const pages = files

  const files = glob.sync("**!/!*.md", {
    cwd: directory,
  });

  const pages = files.map((file) => {
    const fileData = fs.readFileSync(`${directory}/${file}`);
    const page = fm(fileData.toString()).attributes;
    page.uri = `${uriPrefix}${
      path.dirname(file) === "." ? "" : `${path.dirname(file)}/`
    }${path.basename(file, ".md")}`;
    // pages.push(page);
    return page;
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
  // const $items = html.querySelectorAll("#ratings-container .lister-item");
  const $items = html.querySelectorAll(".ipc-metadata-list-summary-item");
  return [...$items].map(($item) => {
    console.log($item.querySelector(".dli-user-list-item-date-added"));
    return {
      title: $item.querySelector(".ipc-title__text").innerText,
      year: $item.querySelectorAll(".dli-title-metadata-item")[0].innerText,
      href: $item.querySelector(".ipc-title-link-wrapper").getAttribute("href"),
      // watchDate: $item
      //   .querySelector(".dli-user-list-item-date-added")
      //   .innerText.substring(8),
      rating: $item.querySelector(".ipc-rating-star--rating").innerText,
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
