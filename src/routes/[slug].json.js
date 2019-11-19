// import getPages from '../getPages';

import { gql } from 'apollo-boost';
import { client } from '../apollo';

const PAGES = gql`
  {
    entries {
      uri
      title
      section {
        handle
      }
    }
  }
`;

export async function get(req, res) {
  const result = await client.query({ query: PAGES });
  const entries = result.data.entries;
  const { slug } = req.params;
  let page = null;

  const uri = slug.replace(',', '/'); // decode path

  if (slug === '[slug]') {
    page = entries.find(p => p.uri === '__home__');
  } else {
    page = entries.find(p => p.uri === uri);
  }

  if (page) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(page));
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Not found'}));
  }
}
