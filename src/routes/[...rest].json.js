import fetch from 'node-fetch';
/*
import { gql } from 'apollo-boost';
import { client } from '../apollo';
import { getBooks, getMovies } from './getDataFromApi';

const PAGES = gql`
  query ModularPage {
    allPages: entries(section: modularPage) {
      uri
      title
      level
      ancestors {
        title
        level
        uri
      }
      __typename
      ... on ModularPage {
        __typename
        description
        modules {
          __typename
          typename: __typename
          ... on ModulesRichTextBlock {
            __typename
            richText
            collapseTop
            collapseBottom
          }
          ... on ModulesBlogOverview {
            __typename
            heading
            hideHeadingVisually
            latest
            viewAllBlogs {
              entry {
                uri
              }
              customText
            }
          }
          ... on ModulesMovies {
            __typename
            richText
          }
          ... on ModulesBooks {
            __typename
            richText
          }
        }
      }
    }
    globals {
      settings {
        siteName
        siteLanguage
        twitterHandle
        domain
      }
    }
  }
`;

const BLOGS = gql`
  {
    allBlogs: entries(section: [blog]) {
      ... on Blog {
        id
        title
        subheading
        uri
        postDate
      }
    }
  }
`;

const pagesQuery = client.query({ query: PAGES });
const blogsQuery = client.query({ query: BLOGS });
*/
export async function get(req, res) {
  let uri = req.params.rest.join('/');
  if (uri === 'home') {
    uri = '';
  }

  const siteQuery = await fetch(`${process.env.GRAV_API_URL}?data=site`);
  const siteData = await siteQuery.json();

  if (!siteData.pages[`/${uri}`]) {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({
      message: 'Not found in lookup',
    }));
    return;
  }

  const pageQuery = await fetch(`${process.env.GRAV_API_URL}${uri}`);
  const pageData = await pageQuery.json();
  // const pageData = result.data.allPages.find((entry) => entry.uri === uri);

  if (pageData) {
    /* if (pageData.modules.some((module) => module.typename === 'ModulesBlogOverview')) {
      const blogs = await blogsQuery;
      pageData.blogs = blogs.data.allBlogs;
    }

    if (pageData.modules.some((module) => module.typename === 'ModulesMovies')) {
      pageData.movies = await getMovies();
    }

    if (pageData.modules.some((module) => module.typename === 'ModulesBooks')) {
      pageData.books = await getBooks();
    } */

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({
      ...pageData,
      site: siteData,
    }));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({
      message: 'Not found in lookup',
    }));
  }
}
