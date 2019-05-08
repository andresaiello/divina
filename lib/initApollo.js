import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import cookieSerializer from 'cookie';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, cookies) {
  let cookie = '';

  if (cookies && Object.keys(cookies).length) {
    Object.keys(cookies).forEach(c => {
      cookie += `${cookieSerializer.serialize(c, cookies[c])};`;
    });
  }

  const wsLink = process.browser
    ? new WebSocketLink({
        timeout: 60000,
        uri: publicRuntimeConfig.GQL_WS_SERVER_URL,
        options: {
          reconnect: true,
        },
      })
    : null;

  const httpLink = new HttpLink({
    uri: process.browser ? publicRuntimeConfig.GQL_SERVER_URL : serverRuntimeConfig.GQL_SERVER_URL,
    credentials: 'include', // Additional fetch() options like `credentials` or `headers`
    headers: {
      cookie,
    },
  });

  const terminatingLink = process.browser
    ? split(
        ({ query }) => {
          const { kind, operation } = getMainDefinition(query);
          return kind === 'OperationDefinition' && operation === 'subscription';
        },
        wsLink,
        httpLink,
      )
    : httpLink;

  const link = ApolloLink.from([terminatingLink]);

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    credentials: 'include',
    link,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState, cookies) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) return create(initialState, cookies);

  // Reuse client on the client-side
  if (!apolloClient) apolloClient = create(initialState);

  return apolloClient;
}
