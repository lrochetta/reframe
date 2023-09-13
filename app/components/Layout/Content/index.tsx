// @ts-nocheck
import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import _ from "lodash";
import { useUser } from "@auth0/nextjs-auth0/client";
import { deleteCookie } from "cookies-next";
import RightSideBar from "./SideBar/Right";
import LeftSideBar from "./SideBar/Left";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

import AlgoliaSearch from "@/components/Search";

import { DocsProvider, useDocsContext } from "./context";

import { getMember } from "@/lib/services/notionEditService";
import { DocsPage, wikiPage } from "@/lib/constant";
import _get from "lodash/get";
import {AuthUserProvider} from "@/components/Pages/context/authUser";

const SearchPanel = ({ children }) => {
  const docs_ctx = useDocsContext();
  function handleSearchModel(status) {
    docs_ctx.setShowSearch(status);
    docs_ctx.setShowLeftMenu(false);
  }

  return (
    <div>
      {docs_ctx.showSearch && (
        <div className="search-model justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-999">
          <div className="relative w-auto my-6 model-min-width">
            <div className="search border rounded-lg shadow-lg relative flex flex-col w-full bg-white">
              <div className="flex items-start justify-end px-4 pt-3 border-b">
                <p
                  className="m-0 pb-2"
                  onClick={() => {
                    handleSearchModel(false);
                  }}
                >
                  {" "}
                  <MdClose size={30} />
                </p>
              </div>
              <div className="relative p-5 flex-auto">
                <AlgoliaSearch handleSearchModel={handleSearchModel} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PrivateLayout = ({ children, ...props }) => {
  // const [showLeftMenu, setShowLeftMenu] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);
  const docs_ctx = useDocsContext();

  deleteCookie("requestAction");
  const { user } = useUser();
  const profile = user?.profile;

  const router = useRouter();
  let { block_id } = router.query;
  if (!block_id) {
    if (router.asPath === "/docs") {
      block_id = DocsPage.block_id;
    }
    if (router.asPath === "/wiki") {
      block_id = wikiPage.block_id;
    }
  }

  function editAction() {
    if (user?.profile) {
      getMember(`/api/members/${user?.email}`).then((member) => {
        let url = "",
          body = "";
        if (member) {
          url = `${process.env.NEXT_PUBLIC_NOTION_REDIRECT_BASE_URL}/${block_id}`;
          body = "You are being redirected to Leaptable Notion WorkSpace";
        } else {
          url = `${process.env.NEXT_PUBLIC_NOTION_REDIRECT_URL}/${process.env.NEXT_PUBLIC_NOTION_REDIRECT_INVITE_TOKEN}`;
          body = "You are invited to Leaptable notion Workspace";
        }
      });
    } else {
      router.push("/api/auth/login");
    }
  }

  function refreshPage() {
    setCookie("requestAction", "refresh");
    window.location.reload();
  }

  return (
    <DocsProvider>
    <AuthUserProvider user={user} id_token={null}>
      <main className="overflow-scroll md:overflow-auto h-screen">
        <div className="relative antialiased text-gray-500 dark:text-gray-400">
          <div
            className={`${
              docs_ctx.showLeftMenu
                ? "reframe-main-container-menu-open"
                : "reframe-main-container"
            }`}
          >
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
    </AuthUserProvider>
    </DocsProvider>
  );
};

export default PrivateLayout;
