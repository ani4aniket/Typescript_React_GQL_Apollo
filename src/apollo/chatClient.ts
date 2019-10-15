import { ApolloClient } from "apollo-client";
import { ApolloLink, concat } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import LocalStorage from "../utils/LocalStorage";

const _LocalStorage = new LocalStorage("accessToken");
let authorization = "";
_LocalStorage.loadData().then(data => {
  return (authorization = data);
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization
    }
  });

  return forward(operation);
});

const link = ApolloLink.from([
  new HttpLink({
    uri: "https://chat.airbuk.com/api/graphql",
    credentials: "same-origin"
  }),
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        // eslint-disable-next-line no-console
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) {
      // eslint-disable-next-line no-console
      console.log(`[Network error]: ${networkError}`);
    }
  })
]);

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache()
});

export default client;
