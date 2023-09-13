// @ts-nocheck
import type { CodegenConfig } from '@graphql-codegen/cli';

const schema_path = process.env.NEXT_PUBLIC_API_URL;

// @ts-ignore
const config: CodegenConfig = {
  overwrite: true,
  "schema": [
    {
      [`${schema_path}`]: {
        "headers": {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET
        }
      }
    }
  ],
  documents: "./lib/graphql/**/*.graphql",
  generates: {
    "./generated/graphql.tsx": {
      "plugins": [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      "config": {
        "preResolveTypes": true,
        "skipTypename": false,
        "withHooks": true,
        "withHOC": false,
        "withComponent": false,
        "enumsAsTypes": true,
        "constEnums": true,
        "reactApolloVersion": 3
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
