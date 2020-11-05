import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = (authToken: string = '') => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:5000/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
