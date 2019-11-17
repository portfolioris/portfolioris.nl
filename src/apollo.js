import { ApolloClient, HttpLink, InMemoryCache
} from 'apollo-boost';
import fetch from 'node-fetch';

const link = new HttpLink({
  uri: `${process.env.CRAFT_API_URL}`,
  headers: {
    'Content-type': 'application/json',
    'Authorization': process.env.CRAFT_API_TOKEN,
  },
  fetch,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link
});

export { client };
