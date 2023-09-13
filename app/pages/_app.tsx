// @ts-nocheck
import jwt from "jsonwebtoken";
import "../styles/App.scss";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
import GlobalProvider from "@/lib/context/global";
import * as ga from "@/lib/googleAnalytics";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { initializeApollo } from "@/lib/apolloClient";
import { NotificationProvider } from "@/components/Shared/Notification";
import { AnimatePresence } from "framer-motion";
import axios_instance from "@/lib/services/request";
import "setimmediate";
import { Inter, Irish_Grover } from "next/font/google";

import localFont from "next/font/local";
import { cacheConfig, siteConfig } from "@/config/site";
import { AxiosProvider } from "@/components/Pages/context/axios";

// Font files can be colocated inside of `pages`
const barb = localFont({
  src: "../public/fonts/BarbaraBT-Regular.woff2",
  variable: "--font-barb",
});

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MainApp({ Component, pageProps, props, id_token, redirect, ...rest }) {
  const router = useRouter();
  console.log(props?.id_token)
  const apolloClient = initializeApollo({}, props?.id_token);
  console.log(apolloClient.link?.options)

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (pageProps?.user && redirect) {
      router.push(redirect?.destination);
    }
  }, []);

  /*
   * Healthcheck for the API. Cloudrun will put containers to sleep if there are no requests for 15 minutes. This enables
   * the container to wake up before the first request is made by auth0 and other services.
   */
  useEffect(() => {
    const start = Date.now();
    axios_instance
      .get("/system/health/")
      .then((res) => {
        const stop = Date.now();
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <GlobalProvider>
        <UserProvider>
          <ApolloProvider client={apolloClient}>
            <AxiosProvider token={props?.id_token}>
              <ThemeProvider defaultTheme="system">
                <NotificationProvider>
                  <Head>
                    <title>{siteConfig.title}</title>
                    <meta name="description" content={siteConfig.description} />
                    <meta
                      name="viewport"
                      content="initial-scale=1.0, width=device-width"
                    />
                    <meta property="og:url" content={siteConfig.url} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={siteConfig.title} />
                    <meta
                      property="og:description"
                      content={siteConfig.description}
                    />
                    <meta property="og:image" content={siteConfig.image} />

                    <meta name="twitter:card" content={siteConfig.image} />
                    <meta property="twitter:domain" content="leaptable.us" />
                    <meta
                      property="twitter:url"
                      content="https://leaptable.us/"
                    />
                    <meta name="twitter:title" content={siteConfig.title} />
                    <meta
                      name="twitter:description"
                      content={siteConfig.description}
                    />
                    <meta name="twitter:image" content={siteConfig.image} />
                    <link
                      rel="icon"
                      type="ima$ge/x-icon"
                      href={siteConfig.favicon}
                    />
                  </Head>
                  <AnimatePresence mode="wait" initial={false}>
                    <Component
                      className={`${inter.variable} ${barb.variable}`}
                      {...pageProps}
                      {...props}
                      id_token={id_token}
                    />
                  </AnimatePresence>
                </NotificationProvider>
              </ThemeProvider>
            </AxiosProvider>
          </ApolloProvider>
        </UserProvider>
      </GlobalProvider>
    </>
  );
}

MainApp.getInitialProps = async ({ ctx }) => {
  // This value is considered fresh for ten seconds (s-maxage=10).
  // If a request is repeated within the next 10 seconds, the previously
  // cached value will still be fresh. If the request is repeated before 30 days,
  // the cached value will be stale but still render (stale-while-revalidate=30 days).
  //
  // In the background, a revalidation request will be made to populate the cache
  // with a fresh value. If you refresh the page, you will see the new value.
  if (ctx.res) {
    ctx.res.setHeader(
        "Cache-Control",
        `public, s-maxage=${cacheConfig.maxage}, stale-while-revalidate=${cacheConfig.state_while_reval}`
    );
  }

  let session;
  try {
    session = await getSession(ctx.req, ctx.res);
    console.log(`Session for user ${session?.idToken ? session?.user.email : 'ANON'}.`);
  } catch (err) {
    console.error(err);
    return {};
  }

  const cert =
    "-----BEGIN CERTIFICATE-----\nMIIC/zCCAeegAwIBAgIJCf2ya3Gc/0sxMA0GCSqGSIb3DQEBCwUAMB0xGzAZBgNV\nBAMTEm5uZXh0LnVzLmF1dGgwLmNvbTAeFw0yMjA4MTUwMjIwMjRaFw0zNjA0MjMw\nMjIwMjRaMB0xGzAZBgNVBAMTEm5uZXh0LnVzLmF1dGgwLmNvbTCCASIwDQYJKoZI\nhvcNAQEBBQADggEPADCCAQoCggEBAO7hsn3ugXFOwTIRArCP/j3X564EDjfSOqKk\nZj6wvaICDeZPVupbh4ih18mIWHogso8cl20fNsraDOaiiP/GaAItUVB6A9SJTqWF\nOwXlKvo/xqt4yqgkj6BoOGp/0IDCf1ksrO52e1S4Hy1ZU/HMc8YNUfFekxN4rzJD\nlu5TH/lNiN2Te9ESzRjTzDjKp+zZX5+wLvZWPEz09fs8L8RP/D2SS23uMAO/rGdN\n9Xc1CJKnVv0Io7TisZQl24HWEUmfZidk3Nhw9VKZC+v7cWdM0e2TE597W99DmBmw\nfcRco8fTYt7BMzxO7o4IJ7PQO+jEGDuvd231aD8qJ3AQXwxW46MCAwEAAaNCMEAw\nDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU7ve8HKPzramYKWs3EvUyKF0/y44w\nDgYDVR0PAQH/BAQDAgKEMA0GCSqGSIb3DQEBCwUAA4IBAQAB2Mi04MlENj2OI+nW\nBYHPLiwRDKHfxrNu69raejmaMA/B1nEeAZI2XWqElvRahFXKOvzapP5acvmFYusI\nOvqwRpu6iwKGvlgEvbIgPSEmbu+Sy/bCv4B/8w+IN8wmk/53J9w1M8Y1zoc+E3XS\n7x/drrRHVPc+NCq4P+tAeucC2uAtqVducRa7/uEi1gvQyn3Hur/8/0RF+ZIrPB3w\nsfDpv4PHg7uoye92OP8BSMmOPssf8k+WkcrVkzLEq1f9dOIaAfbBk8NMu5LqSlAC\nC84hbPKIikAG64ypRTN2fw3IrXVDpF8FcKJcGxx19TwjLOjm7dJLg4444SJTv/Fb\nvLCk\n-----END CERTIFICATE-----";

  try {
    if (session?.idToken) {
      jwt.verify(session?.idToken, cert, { algorithms: ["RS256"] });
    }

    return {
      props: {
        id_token: session?.idToken,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/logout",
      },
    };
  }
};

export default MainApp;
