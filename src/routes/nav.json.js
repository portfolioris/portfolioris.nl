import fetch from 'node-fetch';
/*
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
*/
export async function get(req, res) {
  const navQuery = await fetch(`${process.env.GRAV_API_URL}?data=site`);
  const navData = await navQuery.json();
  // const result = await pages;

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(navData.theme.menu));
}
