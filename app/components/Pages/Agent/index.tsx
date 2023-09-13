// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { AiOutlineSearch } from "react-icons/ai";
import {
  get as _get,
  find as _find,
  map as _map,
  filter as _filter,
  last as _last,
  isEmpty as _isEmpty,
  truncate as _truncate,
} from "lodash";
import { clsx } from "clsx";

const newNodeTypes = [
  {
    id: "2",
    name: "OpenAI",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/icons8-chatgpt.svg",
    description:
      "OpenAI is an artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc. The company, considered a competitor to DeepMind, conducts research in the field of artificial intelligence with the stated aim to promote and develop friendly AI in such a way as to benefit humanity as a whole.",
    tags: ["LLM", "GPT", "GPT-3", "GPT-4", "OpenAI"],
    activation_command: "GPT",
  },
  {
    id: "2",
    name: "Anthropic",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/anthropic-claude.webp",
    description:
      "OpenAI is an artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc. The company, considered a competitor to DeepMind, conducts research in the field of artificial intelligence with the stated aim to promote and develop friendly AI in such a way as to benefit humanity as a whole.",
    tags: ["LLM", "GPT", "GPT-3", "GPT-4", "OpenAI"],
    activation_command: "Claude",
  },
  {
    id: "2",
    name: "Co:here",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/cohere.png",
    description:
      "OpenAI is an artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc. The company, considered a competitor to DeepMind, conducts research in the field of artificial intelligence with the stated aim to promote and develop friendly AI in such a way as to benefit humanity as a whole.",
    tags: ["LLM", "GPT", "GPT-3", "GPT-4", "OpenAI"],
    activation_command: "Cohere",
  },
  {
    id: "4",
    name: "Google Search",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/google-search.png",
    description:
      "Google Cloud Storage is a RESTful online file storage web service for storing and accessing data on Google Cloud Platform infrastructure. The service combines the performance and scalability of Google's cloud with advanced security and sharing capabilities. It is an Infrastructure as a Service, comparable to Amazon S3 online storage service.",
    activation_command: "Google Search",
  },
  {
    id: "3",
    name: "Bing Search",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/bing-search.webp",
    description:
      "Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its global e-commerce network.",
    tags: ["Search", "Bing", "Microsoft"],
    activation_command: "Bing Search",
  },
  {
    id: "1",
    name: "Hubspot",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/hubspot.png",
    description:
      "Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
    tags: ["CRM", "Hubspot", "Sales", "Marketing", "Customer Service"],
    activation_command: "Hubspot",
  },
  {
    id: "8",
    name: "Salesforce",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/salesforce.png",
    description:
      "Apollo is a contact management platform that helps you find the right decision makers in companies you want to sell to.",
    activation_command: "Apollo",
  },
  {
    id: "5",
    name: "Shopify",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/icons8-shopify.svg",
    description:
      "Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario. It is also the name of its proprietary e-commerce platform for online stores and retail point-of-sale systems.",
    activation_command: "Shopify",
  },
  {
    id: "6",
    name: "Browser",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/chrome.png",
    description:
      "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
    activation_command: "Browse",
  },
  {
    id: "7",
    name: "Google Sheets",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/icons8-google-sheets.svg",
    description:
      "Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite offered by Google. The service also includes Google Docs, Google Slides, Google Drawings, Google Forms, Google Sites, and Google Keep. Google Sheets is available as a web application, mobile app for Android, iOS, Windows, BlackBerry, and as a desktop application on Google's ChromeOS.",
    activation_command: "Google Sheets",
  },
  {
    id: "8",
    name: "Apollo.io",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/apollo-io-logo.png",
    description:
      "Apollo is a contact management platform that helps you find the right decision makers in companies you want to sell to.",
    tags: [],
    activation_command: "Apollo",
  },
  {
    id: "8",
    name: "LinkedIn",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/linkedin.webp",
    description:
      "Apollo is a contact management platform that helps you find the right decision makers in companies you want to sell to.",
    activation_command: "LinkedIn",
  },
];

export const SideBar = (props) => {
  return <div>Sidebar</div>;
};

export default (props) => {
  const ctx: any = useWorkspaceContext();
  const current_flow_id = _get(ctx?.state, "data.app_state[0].meta.flow_id");
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    // console.log(e.target.value);
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

      <div
        className={
          "mt-16 grid grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 ultra-wide:grid-cols-6 gap-3 p-2"
        }
      >
        {_map(flt_agent_list, (nodeType, key) => {
          return (
            <div>
              <div className="group max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <div className="h-full flex flex-row items-center">
                    <img
                      className="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-32 md:rounded-none md:rounded-l-lg"
                      src={nodeType.icon}
                      alt=""
                    />
                  </div>

                  <div>
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {nodeType.name}
                      </h5>
                    </a>
                  </div>
                </div>

                <p className="h-40 mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {_truncate(nodeType.description, { length: 200 })}
                </p>
                {nodeType?.activation_command && (
                  <div className={"flex flex-row items-center space-x-2"}>
                    <h2>Command: </h2>
                    <div
                      data-te-chip-init
                      data-te-ripple-init
                      className="[word-wrap: break-word] max-w-fit my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-sm border border-[#3b71ca] bg-[#eceff1] bg-[transparent] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:border-[#3b71ca] hover:!shadow-none dark:text-neutral-200"
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
