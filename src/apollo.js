import { ApolloClient, HttpLink, InMemoryCache, IntrospectionFragmentMatcher
} from 'apollo-boost';
import fetch from 'node-fetch';
import introspectionQueryResultData from '../graphql.schema';

const link = new HttpLink({
  uri: `${process.env.CRAFT_API_URL}`,
  headers: {
    'Content-type': 'application/json',
    'Authorization': process.env.CRAFT_API_TOKEN,
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
