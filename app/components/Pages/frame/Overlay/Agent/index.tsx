// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { AiOutlineSearch } from "react-icons/ai";
import { clsx } from "clsx";

const newNodeTypes = [
  {
    id: "6",
    name: "Browser",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/chrome.png",
    activation_command: "/browse",
  },
  {
    id: "4",
    name: "Google Search",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/google-search.png",
    activation_command: "/google_search",
  },
  {
    id: "3",
    name: "Bing Search",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/bing-search.webp",
    tags: ["Search", "Bing", "Microsoft"],
    activation_command: "/bing_search",
  },
  {
    id: "1",
    name: "Hubspot",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/hubspot.png",
    tags: ["CRM", "Hubspot", "Sales", "Marketing", "Customer Service"],
    activation_command: "/hubspot",
  },
  {
    id: "8",
    name: "Salesforce",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/salesforce.png",
    activation_command: "/salesforce",
  },
  {
    id: "8",
    name: "Apollo.io",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/apollo-io-logo.png",
    tags: [],
    activation_command: "/apollo",
  },
  {
    id: "8",
    name: "LinkedIn",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/linkedin.webp",
    activation_command: "/linkedin",
  },
];

export default (props) => {
  const ctx: any = useWorkspaceContext();
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const flt_agent_list =
    query === ""
      ? newNodeTypes
      : newNodeTypes.filter((agent) => {
          // console.log("agent", agent);
          return `${agent.name} ${agent.description}`
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  return (
    <div>
      <div className="w-80 flex items-center grow border-b border-zinc-600 dark:border-zinc-400">
        <AiOutlineSearch className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
        <input
          className={clsx(
            "pl-2 w-full border-none",
            "placeholder-zinc-800 dark:placeholder-zinc-200",
            "bg-zinc-300 text-zinc-900 dark:text-zinc-100 dark:bg-black focus:outline-none"
          )}
          type="search"
          name="search"
          value={query}
          placeholder="Search Agents"
          onChange={onSearch}
        />
      </div>

      <div className={"flex flex-col space-y-4 mt-8"}>
        {_.map(flt_agent_list, (nodeType, key) => {
          return (
            <div>
              <div className="group max-w-sm  p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <div className="h-full flex flex-row items-center justify-start space-x-8">
                    <img
                      className="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-8 md:rounded-none md:rounded-lg"
                      src={nodeType.icon}
                      alt=""
                    />
                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                      {nodeType.name}
                    </h5>
                  </div>
                </div>
                {nodeType?.activation_command && (
                  <div className={"flex flex-row items-center space-x-2"}>
                    <div
                      className="[word-wrap: break-word] text-fuchsia-600 my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-sm "
                      data-te-ripple-color="dark"
                    >
                      {nodeType?.activation_command}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
