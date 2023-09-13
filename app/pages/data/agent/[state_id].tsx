// @ts-nocheck
import React, { useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import SidePanel from "@/components/Pages/Agent/SidePanel";
import Page from "@/components/Pages/Agent";
import AppLayout from "@/components/Layout/App";
import { initializeApollo } from "@/lib/apolloClient";
import { FetchDatasetDocument } from "@/generated/graphql";

const IndexPage = (props) => {
  return (
    <AppLayout SidePanel={SidePanel} {...props}>
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
  },

export default IndexPage;
