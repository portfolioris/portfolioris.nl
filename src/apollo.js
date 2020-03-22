import { ApolloClient, HttpLink, InMemoryCache, IntrospectionFragmentMatcher
} from 'apollo-boost';
import fetch from 'node-fetch';
import introspectionQueryResultData from '../graphql.schema';

const link = new HttpLink({
  uri: `${process.env.CRAFT_API_URL}`,
  // uri: `https://portfolioris-craft-heroku.herokuapp.com/api`,
  headers: {
    'Content-type': 'application/json',
    'Authorization': process.env.CRAFT_API_TOKEN,
    // 'Authorization': 'Bearer UNasU4p_lmS-tXy2uWX74UYyO8oFnxW1w156BU8cUsE4gt6bqEOqGjY2YGpMPq2X',
  },
  fetch,
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({
  fragmentMatcher
});

const client = new ApolloClient({
  cache,
  link
});

export { client };
