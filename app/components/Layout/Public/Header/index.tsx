// @ts-nocheck
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { LogoLarge } from "@/components/Common/Logo";
import { Dialog, Popover, Menu, Transition } from "@headlessui/react";
import _get from "lodash/get";

import {
  ArrowPathIcon,
  ChartPieIcon,
  ArrowRightCircleIcon,
  ArrowLeftOnRectangleIcon,
  Bars4Icon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { VideoIcon } from "@radix-ui/react-icons";
import OmniLink from "@/components/Shared/omnilink";
import request from "@/lib/services/request";
import { siteConfig } from "@/config/site";
import { pagesConfig } from "@/config/docs";

const menuItems = [
  {
    name: "Github",
    href: "https://github.com/peterwnjenga/reframe",
    icon: () => (
      <img
        src={"/icon/icons8-github.svg"}
        alt="Wiki"
        className="h-6 md:h-6 w-12"
      ></img>
    ),
    external: true,
  },
  {
    name: "Docs",
    href: "/docs",
    icon: () => (
      <img
        src={"/icon/icons8-document.svg"}
        alt="Wiki"
        className="h-6 md:h-6 w-12"
      ></img>
    ),
    external: false,
  },
  {
    name: "Wiki",
    href: "/wiki",
    icon: () => (
      <img
        src={"/icon/icons8-wiki.svg"}
        alt="Wiki"
        className="h-6 md:h-6 w-12"
      ></img>
    ),
  },
];

const callsToAction = [
  { name: "Watch demo", href: "https://youtu.be/M860LUfwiQc", icon: VideoIcon },
  {
    name: "Contact sales",
    href: "mailto:sales@leaptable.us?subject=Hello from Landing Page",
    icon: PhoneIcon,
  },
];

const PublicHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const { user, isLoading: user_loading, ...rest } = useUser();
  const { user, isLoading: user_loading, ...rest } = {};

  function triggerContentRefetch(e) {
    e.preventDefault();
    request.get(`/wiki/menu`);
  }

  function closeModal() {
    setIsDialogOpen(false);
  }

  const is_csr = typeof window !== "undefined";
  let login_url = "/api/auth/login";

  if (is_csr) {
    const origin = window.location.origin;
    // All non-local environments should use the login endpoint at the leaptable.us
    if (!origin.includes("://localhost:")) {
      login_url = "https://leaptable.us/api/auth/login";
    }
  }

  return (
    <header className="backdrop-blur-sm h-20 dark:text-white py-2 z-20 flex flex-row justify-center items-center md:space-x-32 fixed top-0 bg-transparent w-full">
      <div className="h-8 md:h-12 w-24 mx-4">
        <span className="sr-only">{siteConfig.company_name}</span>
        <LogoLarge href={"/"} className="h-8 md:h-12" />
      </div>
      <nav className="hidden md:block">
        <Popover.Group className="hidden md:block md:flex lg:flex lg:flex-1 grow lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900  dark:text-gray-300">
              Product
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400  dark:text-gray-300"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded bg-white dark:bg-gray-800  dark:text-gray-300 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {pagesConfig?.use_cases.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded p-4 text-sm leading-6 hover:bg-gray-50 hover:dark:bg-gray-700"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900 dark:text-gray-300 hover:text-indigo-400"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600  dark:text-gray-300 hover:text-indigo-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-zinc-900">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 hover:dark:bg-gray-600"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {menuItems.map((item) => (
            <OmniLink
              key={item.name}
              {...item}
              className="flex items-top text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
            >
              <item.icon
                className="h-6 w-6 mx-2 text-gray-600 dark:text-gray-100 group-hover:text-indigo-600"
                aria-hidden="true"
              />
              {item.name}
            </OmniLink>
          ))}
        </Popover.Group>
      </nav>
      <div className="">
        <div className="">
          <div className="fixed top-8 right-3 flex">
            <button
              onClick={() => {
                setIsDialogOpen(!isDialogOpen);
              }}
              className="md:hidden items-center flex flex-row"
              data-headlessui-state=""
            >
              <Bars4Icon
                className="h-5 w-5 flex-none text-gray-400  dark:text-gray-300"
                aria-hidden="true"
              />
              <ChevronDownIcon
                className="hover:animate-bounce  h-5 w-5 flex-none text-gray-400  dark:text-gray-300"
                aria-hidden="true"
              />
            </button>
          </div>
          {!user && !user_loading && (
            <div className="hidden md:block lg:visible flex justify-end">
              <Link
                href={login_url}
                className=" flex shadow-lg hover:shadow-xl rounded  hover:shadow-xl flex-row  max-w-md p-2 md:p-3 bg-opacity-10"
                rel="noopener noreferrer"
              >
                <span className="mr-2 ml-2">Sign in</span>
                <ArrowRightCircleIcon className={"h-8 w-8"} />{" "}
              </Link>
            </div>
          )}

          {user && !user_loading && (
            <div className="fixed top-16 w-56 text-right">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Options
                    <ChevronDownIcon
                      className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {_get(user, "system_user.app_metadata.content_admin") && (
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={triggerContentRefetch}
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              <ArrowPathIcon
                                className="mr-2 h-5 w-5 text-violet-400"
                                aria-hidden="true"
                              />
                              Refetch (Shallow)
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={triggerContentRefetch}
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              <ArrowPathIcon
                                className="mr-2 h-5 w-5 text-violet-400"
                                aria-hidden="true"
                              />
                              Refetch (Deep)
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    )}
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/api/auth/logout"
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <ArrowLeftOnRectangleIcon
                              className="mr-2 h-5 w-5 text-violet-400"
                              aria-hidden="true"
                            />
                            Logout
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )}
        </div>
      </div>
      <Transition appear show={isDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full max-w-md transform overflow-hidden rounded bg-white dark:bg-black p-6 text-left align-middle shadow-xl transition-all">
                  <div className="my-8">
                    {menuItems.map((item) => (
                      <OmniLink
                        key={item.name}
                        {...item}
                        className="flex items-top text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
                      >
                        <item.icon
                          className="h-6 w-6 mx-2 text-gray-600 dark:text-gray-200 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                        {item.name}
                      </OmniLink>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-row justify-center items-center space-x-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <Link
                      href="/api/auth/login"
                      className="gradient-button flex hover:shadow-xl flex-row  max-w-md p-2 md:p-4 mr-5 bg-white dark:bg-black"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2 ml-2">Log in</span>
                      <ArrowRightCircleIcon className={"h-8 w-8"} />{" "}
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default PublicHeader;
