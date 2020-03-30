import { gql } from 'apollo-boost';
import { client } from '../apollo';

const PAGES = gql`
  query ModularPage {
    allPages: entries(section: modularPage) {
      uri
      title
      section {
        handle
      }
      __typename
      ... on ModularPage {
        __typename
        description
        modules {
          __typename
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
        }
      }
    }
    allBlogs: entries(section: [blog]) {
      ... on Blog {
        id
        title
        subheading
        uri
        postDate
      }
    }
    globals {
      settings {
        siteName
        siteLanguage
        twitterHandle
      }
    }
  }
`;

const pages = client.query({ query: PAGES });

export async function get(req, res, next) {
  let uri = '__home__'; // craft's home uri

  // if not root
  if (req.params.rest[0] !== 'undefined') {
    // create uri to match
    uri = req.params.rest.join('/');
  }

  const result = await pages;
  const pageData = result.data.allPages.find((entry) => entry.uri === uri);

  if (pageData) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({
      ...pageData,
      blogs: result.data.allBlogs,
      globals: result.data.globals,
    }));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({
      message: `Not found in lookup`,
    }));
  }
}
