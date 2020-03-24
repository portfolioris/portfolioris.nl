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
        modules {
__typename
          ... on ModulesRichTextBlock {
            __typename
            richText
          }
          ... on ModulesBlogOverview {
            __typename
            heading
            hideHeadingVisually
            latest
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
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({ ...pageData, blogs: result.data.allBlogs }));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found in lookup`
    }));
  }
}
