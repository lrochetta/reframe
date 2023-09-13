// @ts-nocheck
import React from "react";
import Page from "@/components/Pages/Project/Team";
import Layout from "@/components/Layout/App";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const IndexPage = (props) => {
  return (
    <Layout sideNavOpen={true}>
      <Page {...props} />
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired({
  // @ts-ignore
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

export default IndexPage;
