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

export async function get(req, res) {
  let uri = '__home__'; // craft's home uri

  // if not root
  if (req.params.rest[0] !== 'undefined') {
    // create uri to match
    uri = req.params.rest.join('/');
  }

  const result = await pagesQuery;
  const pageData = result.data.allPages.find((entry) => entry.uri === uri);

  if (pageData) {
    if (pageData.modules.some((module) => module.typename === 'ModulesBlogOverview')) {
      const blogs = await blogsQuery;
      pageData.blogs = blogs.data.allBlogs;
    }

    if (pageData.modules.some((module) => module.typename === 'ModulesMovies')) {
      pageData.movies = await getMovies();
    }

    if (pageData.modules.some((module) => module.typename === 'ModulesBooks')) {
      pageData.books = await getBooks();
    }

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({
      ...pageData,
      globals: result.data.globals,
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
