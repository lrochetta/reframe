// @ts-nocheck
import { ApolloClient, ApolloLink,  HttpLink, split, from } from "@apollo/client";
import { InMemoryCache, NormalizedCacheObject } from "@apollo/client/cache";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import fetch from "isomorphic-unfetch";
import ws from "isomorphic-ws";
import React from "react";
import { SubscriptionClient } from "subscriptions-transport-ws";

const getAuthHeaders = (token: string, link_type: string) => {
    let headers = {};
    if (token) {
        console.log(`Creating Apollo ${link_type} Link with "Authorization Bearer". Token found.`)
        headers['Authorization'] = `Bearer ${token}`
    } else if (process.env.HASURA_ADMIN_SECRET) {
        console.log(`Creating Apollo ${link_type} Link with "x-hasura-admin-secret (HASURA_ADMIN_SECRET)"`)
        headers['x-hasura-admin-secret'] = process.env.HASURA_ADMIN_SECRET
    } else {
        console.log(`Empty Authorization header for Apollo ${link_type} Link`)
    }
    return headers;
}

const createHttpLink = (token: string) => {
  const getHttpUri = () => {
    if (process.env.NODE_ENV === "production") {
      return process.env.NEXT_PUBLIC_API_URL;
    }

    return process.browser
      ? process.env.NEXT_PUBLIC_CSR_API_URL
      : process.env.NEXT_PUBLIC_SSR_API_URL;
  };

  let headers = getAuthHeaders(token, 'HTTP');

  const httpLink = new HttpLink({
    uri: getHttpUri(),
    credentials: "include",
    headers,
    fetch,
  });
  return httpLink;
};

const createWSLink = (token: string) => {
    let headers = getAuthHeaders(token, 'WS');

  return new WebSocketLink(
    new SubscriptionClient(
      process.env.NEXT_PUBLIC_WS_URL,
      {
        lazy: true,
        reconnect: true,
        connectionParams: async () => {
          return {
            headers,
          };
        },
      },
      ws
    )
  );
};

let apolloClient: ApolloClient<NormalizedCacheObject>;
let apolloToken: string;

const roundTripLink = new ApolloLink((operation, forward) => {
    // Called before operation is sent to server
    operation.setContext({ start: new Date() });

    return forward(operation);
});

const createNewLinkChain = (token: string) => {
    console.log("Creating new Apollo Link")
    const ssrMode = typeof window === "undefined";
    const link = !ssrMode
        ? split(
            ({ query, ...rest }) => {
                const definition = getMainDefinition(query);
                return (
                    definition.kind === "OperationDefinition" &&
                    definition.operation === "subscription"
                );
            },
            createWSLink(token),
            createHttpLink(token)
        )
        : createHttpLink(token);

    const linkChain = from([
        roundTripLink,
        link
    ]);

    return linkChain;
}

export const createApolloClient = (token: string) => {
    console.log("Creating new apollo link")
    const ssrMode = typeof window === "undefined";
  const linkChain = createNewLinkChain(token)

  return new ApolloClient({ ssrMode, link : linkChain, cache: new InMemoryCache() });
};

export const initializeApollo = (initialState = {}, token: string) => {
    let _apolloClient = null;

    /*
    * If no existing client or the token changed  - due to login or logout for instance - recreate the apollo client.
     */
    if (apolloToken !== token || !apolloClient) {
        /*
        * If we have an existing apollo client. Don't re-initialize it. Simply create a new link chain with the correct
        * authorization headers.
         */
        if (apolloClient) {
            const linkChain = createNewLinkChain(token)
            apolloClient.setLink(linkChain)
            _apolloClient = apolloClient; // Reuse cached.
        } else {
            _apolloClient = createApolloClient(token);
        }

        apolloToken = token
    } else {
        _apolloClient = apolloClient; // Reuse cached.
    }

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === "undefined") {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};