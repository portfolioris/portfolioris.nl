// import getPages from '../getPages';

import { gql } from 'apollo-boost';
import { client } from '../apollo';
import replace from 'rollup-plugin-replace';

const PAGES = gql`
  {
    entries {
      uri
      slug
      title
      section {
        handle
      }
#      ... on ModularPage {
#        modules {
#          __typename
#          ... on ModulesRichTextBlock {
#            richText
#          }
#        }
#      }
    }
  }
`;

export async function get(req, res) {
  const result = await client.query({ query: PAGES });
  const entries = result.data.entries;
  const { slug } = req.params;
  let page = null;

  const uri = slug.replace(',', '/');

  if (slug === '[slug]') {
    page = entries.find(p => p.uri === '__home__');
  } else {
    page = entries.find(p => p.uri === uri);
  }

  console.log(page);

  if (page) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(page));
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Not found'}));
  }
}
