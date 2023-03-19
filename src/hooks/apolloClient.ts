import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



import { tokenDef } from '@/config';


const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:6010/graphql',
  // credentials: "include",
  // credentials: "same-origin",
});

const authLink = setContext((_, { headers }: any) => {
  const token = localStorage.getItem('token') || tokenDef;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;