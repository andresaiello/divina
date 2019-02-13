import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import cookieSerializer from 'cookie';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create (initialState, cookies) {
  let cookie = ''

  if (cookies && Object.keys(cookies).length) {
    Object.keys(cookies).forEach(c => {
      cookie += cookieSerializer.serialize(c, cookies[c]) + ';'
    })
  }

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    credentials: 'include',
    link: new HttpLink({
      uri: process.browser ? publicRuntimeConfig.GQL_SERVER_URL : serverRuntimeConfig.GQL_SERVER_URL,
      credentials: 'include', // Additional fetch() options like `credentials` or `headers`
      headers: {
        cookie
      },
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo (initialState, cookies) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, cookies);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
