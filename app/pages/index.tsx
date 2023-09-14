// @ts-nocheck
import Landing from "@/components/Landing";
import PublicLayout from "@/components/Layout/Public";
import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import Loader from "@/components/Common/Loader";

const IndexPage = (props) => {
  const isCSR = typeof window !== "undefined";
  if (isCSR) {
    const { user, isLoading: user_loading, ...rest } = useUser();
    const router = useRouter();
    if (user) {
      if (user_loading) {
        return <Loader />;
      }
    }
    router.push("/data/frame/-");
  }

  return (
    <PublicLayout>
      <Landing {...props} block_id />
    </PublicLayout>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx.req, ctx.res);

  if (!session) {
    return {
      props: { posts, use_cases },
    };
  }

  ctx.res.writeHead(302, { Location: "/data/frame/latest" });
  ctx.res.end();

  return {
    props: { id_token: session?.idToken, posts },
  };
}

IndexPage.layout = "Public";

export default IndexPage;
