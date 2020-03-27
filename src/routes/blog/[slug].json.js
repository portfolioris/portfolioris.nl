import { gql } from 'apollo-boost';
import { client } from '../../apollo';

const BLOG = gql`
  query BlogPost($uri: String!) {
    entry(uri: $uri) {
      id
      title
      ... on Blog {
        title
        subheading
        richText
        description
        mainImage {
          filename
          title
          folder {
            path
          }
        }
        author {
          twitterHandle
          firstName
          lastName
        }
        postDate
        dateUpdated
        uri
        section {
          name
          handle
        }
      }
    }
    globals {
      settings {
        siteName
        twitterHandle
        domain
      }
    }
  }
`;

export async function get(req, res, next) {
  const blog = client.query({ query: BLOG, variables: { uri: `blog/${req.params.slug}` } });
  const result = await blog;

  if (result.data.entry) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({ ...result.data }));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Blog not found`
    }));
  }
}
