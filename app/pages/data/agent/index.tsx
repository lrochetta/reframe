// @ts-nocheck
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Page from "@/components/Pages/frame";
import AppLayout from "@/components/Layout/App";
import { initializeApollo } from "@/lib/apolloClient";
import { FetchDatasetDocument } from "@/generated/graphql";

const IndexPage = (props) => {
  /*
   * Render the home page layout. The appDataContext will redirect to the
   * correct state page.
   * */
  return (
    <AppLayout {...props}>
      <Page {...props} />
    </AppLayout>
  );
};

export async function getServerSideProps(ctx) {
    return { props: {} };
    const apolloClient = initializeApollo({}, null);

    const { data } = await apolloClient
      .query({
        query: FetchDatasetDocument,
        variables: {
          username: ctx.query?.page_id,
        },
      })
      .then((data) => data)
      .catch((err) => {
        console.error("err", err);
        return null;
      });

    return {
      props: { data },
    };
  }

export default IndexPage;
