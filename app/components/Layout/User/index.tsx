// @ts-nocheck
import React from "react";
import { AuthUserProvider } from "@/components/Pages/context/authUser";
import { clsx } from "clsx";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { siteConfig } from "@/config/site";

export default ({ children, sideNavOpen, ...props }) => {
  const { user, isLoading: user_loading, ...rest } = useUser();

  const Footer = () => {
    return (
      <footer
        className={clsx(
          "flex items-center justify-center items-end",
          "bg-white dark:bg-zinc-900",
          "h-6 w-full z-10",
          "border-t border-1 border-gray-900 dark:border-gray-700"
        )}
      >
        <p className="text-gray-500 dark:text-gray-400 text-xs">
          &copy;{siteConfig.company_name} 2023 &middot; All rights reserved.
        </p>
        <Link
          href={"/wiki"}
          className="text-gray-500 dark:text-gray-400 text-xs"
        >
          Wiki
        </Link>
      </footer>
    );
  };

  return (
    <AuthUserProvider {...props}>
      <div
        className={clsx(
          "min-h-screen flex flex-col",
          "bg-white dark:bg-black",
          "justify-between overflow-y-clip overscroll-none fixed top-0 w-full"
        )}
      >
        {/*<div className={"h-[calc(100vh_-_6.5rem)]  w-full flex flex-row"}>*/}
        <div className={"h-[calc(100vh_-_1.5rem)]  w-full flex flex-row"}>
          <div className={" w-full absolute top-0 overflow-y-scroll"}>
            {children}
          </div>
        </div>
        {/*</div>*/}
        <Footer />
      </div>
    </AuthUserProvider>
  );
};
