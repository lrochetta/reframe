// @ts-nocheck
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Common/Loader";
import ProjectMenu from "@/components/Pages/frame/ProjectMenu";
import _get from "lodash/get";
import { AiOutlineLogout } from "react-icons/ai";
import { Float } from "@headlessui-float/react";
import { GrRobot } from "react-icons/gr";
import { Popover, Tab } from "@headlessui/react";
import { Square3Stack3DIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";
import { useAuthUserContext } from "@/components/Pages/context/authUser";
import { useRouter } from "next/router";
import { useUIContext } from "@/components/Pages/context/UIContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MixIcon, TableIcon } from "@radix-ui/react-icons";

const _Tab = (props) => {
  const { children, id, ...rest } = props;
  return (
    <div className={clsx("w-24 h-24 cursor-pointer")}>
      <div
        className={clsx(
          "w-full h-full py-5 px-0.5",
          "flex flex-col items-center",
          "border-l border-gray-200",
          "bg-zinc-200 dark:bg-zinc-800"
        )}
      >
        {children}
      </div>
    </div>
  );
};

const UserMenu = ({ user }) => {
  return (
    <div className="flex justify-center items-center p-0">
      <img
        className="rounded-full h-12"
        src={user?.picture}
        alt="Picture of the author"
      />
    </div>
  );
};

const UserButton = () => {
  const { system_user }: any = useAuthUserContext();
  const current_user = _get(system_user, "data.user[0]");

  return (
    <div className="flex flex-col justify-between items-center py-2 px-1 h-full">
      {system_user.loading && <Loader />}
      {current_user && (
        <Popover>
          {({ open }) => (
            <Float
              placement="bottom-end"
              offset={15}
              shift={6}
              flip={10}
              arrow={5}
              portal
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Button className="flex justify-center px-2 py-2 items-center hover:bg-zinc-200 rounded">
                <UserMenu user={current_user} />
              </Popover.Button>

              <Popover.Panel className="shadow w-48 h-fit bg-white dark:bg-zinc-900 border border-gray-200 rounded-md shadow-lg focus:outline-none">
                <div className="flex flex-col justify-center items-center space-y-4 py-4">
                  <div className="flex justify-center items-center p-0">
                    <img
                      className="rounded-full h-12"
                      src={current_user?.picture}
                      alt="Picture of the author"
                    />
                  </div>
                  <span className="text-sm font-semibold">
                    {current_user?.name}
                  </span>
                  <p className="text-xs dark:text-gray-300">
                    {current_user?.email}
                  </p>
                </div>
                <Link
                  href={"/api/auth/logout/"}
                  className="relative py-3 w-full px-4 flex flex-row justify-between items-center space-x-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded border-t border-gray-200 dark:border-gray-700"
                >
                  <span>Logout</span>
                  <AiOutlineLogout className="w-5 h-5" />
                </Link>
              </Popover.Panel>
            </Float>
          )}
        </Popover>
      )}
    </div>
  );
};

export default (props) => {
  const router = useRouter();
  const ui_ctx = useUIContext();
  const { user, isLoading: user_loading, ...rest } = useUser();

  const class_icon = clsx("h-6 w-6", "text-gray-900", "dark:text-gray-100");

  const { state_id } = router.query;

  return (
    <div className={"flex flex-row h-full"}>
      <div
        className={
          "flex flex-col bg-white dark:bg-black border-r border-gray-400 dark:border-gray-800 z-10 w-24 flex-col justify-stretch justify-start h-[calc(100vh_-_1.5rem)]"
        }
      >
        <div {...props} id="project" disabled>
          <ProjectMenu />
        </div>
        <div {...props} id="placeholder" disabled>
          <div className={clsx("w-24 p-4")}>{/*Dummy*/}</div>
        </div>
        <Link href={`/data/frame/${state_id}`}>
          <_Tab {...props} id="data">
            <TableIcon
              className={clsx(class_icon, "text-gray-800 dark:text-gray-200")}
            />
            <span className={"text-xs py-2"}>Data</span>
          </_Tab>
        </Link>
        <Link href={`/data/agent/${state_id}`}>
          <_Tab {...props} id="agents">
            <MixIcon
              className={clsx(class_icon, "text-gray-800 dark:text-gray-200")}
            />
            <span className={"text-xs py-2"}>Agents</span>
          </_Tab>
        </Link>
        <div className={clsx("w-24 grow")}>{/*Dummy*/}</div>

        <div className={""}>
          <UserButton />
        </div>
      </div>
      <div
        className={clsx(
          "w-80 border-r border-zinc-900",
          ui_ctx.leftCascadeMenuTransform,
          ui_ctx.leftCascadeMenuOpen ? "" : "-translate-x-80"
        )}
      >
        {props.children}
      </div>
    </div>
  );
};
