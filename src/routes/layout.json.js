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
  globals {
    settings {
      siteName
      siteLanguage
      twitterHandle
    }
  }
}`;

const pages = client.query({ query: MAIN_NAV });

export async function get(req, res, next) {
  const result = await pages;

  if (result) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(result.data));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found nav`
    }));
  }
}
