// @ts-nocheck
import "./globals.css";
import { siteConfig } from "@/config/site";
import Head from "next/head";
import React from "react";
import LeftSideBar from "@/components/Layout/Content/SideBar/Left";
import RightSideBar from "@/components/Layout/Content/SideBar/Right";

export const metadata = {
  title: "Reframe",
  description: "Experimental Content Aggregation network based on Notion Pages",
};

export default async function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.image} />

        <meta name="twitter:card" content={siteConfig.image} />
        <meta property="twitter:domain" content="leaptable.us" />
        <meta property="twitter:url" content="https://leaptable.us/" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.image} />
        <link rel="icon" type="ima$ge/x-icon" href={siteConfig.favicon} />
      </Head>
      <html lang="en">
        <></>
        <main className="overflow-scroll md:overflow-auto h-screen">
          <div className="relative antialiased text-gray-500 dark:text-gray-400">
            <div>
              <div className="max-w-8xl mx-auto">
                <LeftSideBar {...props} />
                <div className="lg:pl-[20rem]">
                  <div className="flex flex-row items-stretch">
                    <div className="relative grow mx-auto max-w-3xl xl:max-w-[96rem]">
                      {children}
                    </div>
                    <div className="z-10 hidden xl:flex flex-none pl-0 w-[20rem]">
                      <RightSideBar {...props} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </main>
      </html>
    </>
  );
}
