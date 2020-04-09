import { gql } from 'apollo-boost';
import { client } from '../apollo';

const MAIN_NAV = gql`{
  navItems: entries(section: mainNavigation) {
    ... on MainNavigation {
      title
      menuItem {
        uri
      }
    }
  }
}`;

const pages = client.query({ query: MAIN_NAV });

export async function get(req, res) {
  const result = await pages;

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(result.data));
}
