// @ts-nocheck
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MdCopyAll } from "react-icons/md";
import { Tab } from "@headlessui/react";
import _get from "lodash/get";
import { Highlight, themes } from "prism-react-renderer";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { useDataframeContext } from "@/components/Pages/context/dataframe";
import { clsx } from "clsx";
import { RadioGroup } from "@headlessui/react";
import { useMutation, useSubscription } from "@apollo/client";
import {
  FetchLatestAppStateDocument,
  InsertAppStateDocument,
} from "@/generated/graphql";
import { uuidv7 } from "@kripod/uuidv7";
import _map from "lodash/map";
import _find from "lodash/find";
import _ from "lodash";
import { VscHistory } from "react-icons/vsc";
import { FiCornerDownRight } from "react-icons/fi";
const MAX_COUNT = 5;
import UploadPanel from "@/components/Common/UploadPanel";

function DataframeMenu() {
  const [selected, setSelected] = useState(null);
  const { user, error, isLoading } = useUser();
  const ctx = useWorkspaceContext();
  const workspace_ctx: any = useWorkspaceContext();
  const dataframe_ctx: any = useDataframeContext();

  const current_workspace_id = _get(
    workspace_ctx?.state,
    "data.app_state[0].meta.workspace_id"
  );

  const current_dataframe_id = _get(
    workspace_ctx?.state,
    "data.app_state[0].meta.dataframe_id"
  );

  const dataframes = _get(dataframe_ctx?.dataframe, "data.dataframe", []);

  const [createState, { ...create_state_gql }] = useMutation(
    InsertAppStateDocument,
    {
      errorPolicy: "all",
      refetchQueries: [
        {
          query: FetchLatestAppStateDocument,
          variables: {
            user_id: _get(ctx.user, "data.user[0].id"),
            id: uuidv7(),
          },
        }, // DocumentNode object parsed with gql
      ],
    }
  );

  useEffect(() => {
    const selected_dataframe = _find(
      _get(dataframe_ctx?.dataframe, "data.dataframe", []),
      {
        _id: current_dataframe_id,
      }
    );
    setSelected(selected_dataframe);
  }, [dataframes]);

  const onSelectDataframe = (ds) => {
    //
    workspace_ctx.updateState({
      ..._get(workspace_ctx?.state, "data.app_state[0].meta", {}),
      dataframe_id: ds._id,
    });

    setSelected(ds);
  };

  return (
    <div className="w-full px-2 pt-8">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={onSelectDataframe}>
          <RadioGroup.Label className="sr-only">Dataframe</RadioGroup.Label>
          <div className="space-y-2">
            {dataframes.map((dframe) => (
              <RadioGroup.Option
                key={dframe._id}
                value={dframe}
                className={({ active, checked }) =>
                  clsx({
                    "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300":
                      active,
                    "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300":
                      checked,
                    "bg-sky-200 dark:bg-sky-700 bg-opacity-75 text-white":
                      checked,
                    "bg-white dark:bg-sky-800": !checked,
                    "relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none focus:ring-white focus:ring-opacity-60 focus:ring-offset-2 focus:ring-offset-sky-300":
                      true,
                  })
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked
                                ? "text-gray-700 dark:text-white"
                                : "text-gray-800  dark:text-gray-200"
                            }`}
                          >
                            <span>
                              {dframe.icon}&nbsp;&nbsp;
                              {_.truncate(dframe.name, { length: 32 })}
                            </span>
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked
                                ? "text-sky-900 dark:text-sky-200"
                                : "text-gray-900 dark:text-gray-400"
                            }`}
                          >
                            {_.truncate(dframe.slug, { length: 32 })}
                          </RadioGroup.Description>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function HistoryItem({ history_element }) {
  const dataframe_ctx: any = useDataframeContext();
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false);

  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (history_element.type === "PROMPT") {
    history_element.text = "";
    _map(history_element.item, (elem) => {
      _map(elem.children, (child) => {
        if (child.text || child.column) {
          history_element.text += child?.text || `@${child?.column}`;
        }
      });
    });
  }
  const { set_prompt } = dataframe_ctx;

  const creation_time = new Date(Date.parse(history_element._cr));

  return (
    <div
      key={history_element._id}
      className="flex flex-col shadow-md h-96 w-full py-3 px-2 space-y-2 rounded bg-slate-50 dark:bg-slate-900"
    >
      <span className={"bg-sky-50 dark:bg-slate-800 text-sm p-2"}>
        {history_element.text}
      </span>
      {(() => {
        if (history_element.type === "PROMPT") {
          return <div className={"text-sm"}>{history_element.query}</div>;
        }

        if (history_element.type === "SQL") {
          return (
            <Highlight
              theme={darkMode ? themes.okaidia : themes.github}
              code={query.query}
              language="sql"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  style={style}
                  className={"text-[0.7rem] z-0 overflow-x-clip"}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          );
        }

        return <span className={"text-xs"}>{query.query}</span>;
      })()}
      {}
      <div className={"flex flex-row justify-between items-center h-8"}>
        <CopyToClipboard
          text={history_element.text}
          onCopy={() => setCopiedToClipBoard(true)}
        >
          <button className={"flex flex-col"}>
            {copiedToClipBoard ? (
              <span className={"text-xs text-cyan-500"}>Copied.</span>
            ) : null}
            <MdCopyAll />
          </button>
        </CopyToClipboard>
        <button onClick={(e) => set_prompt(history_element.item)}>
          <FiCornerDownRight />
        </button>

        <span className={"text-xs"}>
          {creation_time.toLocaleString(undefined)}
        </span>
      </div>
    </div>
  );
}

export function HistoryTab(props) {
  const dataframe_ctx: any = useDataframeContext();
  const history = _get(dataframe_ctx?.history, "data.history");
  useEffect(() => {
    //
  }, []);

  return (
    <div
      className={
        "flex flex-col h-[calc(100vh_-_6.5rem)] overflow-y-scroll space-y-2 px-3 pt-5"
      }
    >
      {dataframe_ctx?.history.loading ? <div>Loading...</div> : null}
      {history.map((item) => (
        <HistoryItem key={item._id} history_element={item} />
      ))}
    </div>
  );
}

export default (props) => {
  const workspace_ctx: any = useWorkspaceContext();
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    //
    setQuery(e.target.value.toLowerCase());
  };

  const DataTab = () => {
    return (
      <div className={"h-full"}>
        <div className="flex flex-row w-full  space-x-4 h-12 px-2">
          <div className="w-20 flex items-center">
            <UploadPanel
              text={"Create"}
              label_class_name={clsx(
                "bg-lime-100 dark:bg-lime-800 hover:bg-lime-200 dark:hover:bg-lime-900",
                "text-gray-800 dark:text-gray-200 font-semibold py-2 px-1 border border-gray-400 rounded shadow",
                "font-medium rounded-md text-sm px-1 py-1.5 text-center",
                "w-full flex items-center cursor-pointer"
              )}
            />
          </div>
          <div className="flex items-center grow border-b border-zinc-600 dark:border-zinc-400">
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
              placeholder="Search Projects"
              onChange={onSearch}
            />
          </div>
        </div>
        <DataframeMenu />
      </div>
    );
  };

  const class_icon = clsx("h-4 w-4", "text-gray-900", "dark:text-gray-100");
  const tab_style = clsx(
    "w-full ",
    "items-center justify-center ",
    "text-black dark:text-white",
    "group cursor-pointer"
  );

  const tab_element_style = clsx(
    "flex space-x-1 py-2 px-2 justify-center items-center",
    "border-gray-200 border-b border-gray-400 dark:border-gray-800"
  );

  return (
    <div
      className={clsx(
        "w-full flex flex-col text-gray-900 dark:text-gray-100 p-0 h-screen"
      )}
    >
      <div className="inline-flex items-center w-full h-screen inline-block hidden sm:block flex-shrink justify-start border-b border-gray-200 dark:border-gray-700">
        <Tab.Group>
          <Tab.List className={"h-10 w-full flex bg-white dark:bg-black"}>
            <Tab className={tab_style}>
              {({ selected }) => (
                <div
                  className={clsx(
                    selected ? "border-none bg-zinc-200 dark:bg-zinc-800" : "",
                    tab_element_style
                  )}
                >
                  <VscHistory className={class_icon} />
                  <span>Dataframes</span>
                </div>
              )}
            </Tab>
            {true && (
              <Tab className={tab_style}>
                {({ selected }) => (
                  <div
                    className={clsx(
                      selected ? "border-none bg-zinc-200" : "...",
                      tab_element_style
                    )}
                  >
                    <VscHistory className={class_icon} />
                    <span>History</span>
                  </div>
                )}
              </Tab>
            )}
            {false && (
              <Tab className={tab_style}>
                {({ selected }) => (
                  <div
                    className={clsx(
                      selected ? "border-none bg-zinc-200" : "...",
                      tab_element_style
                    )}
                  >
                    <VscHistory className={class_icon} />
                    <span>Facets</span>
                  </div>
                )}
              </Tab>
            )}
          </Tab.List>
          <Tab.Panels className={"h-screen"}>
            <Tab.Panel className={"h-screen"}>
              <DataTab />
            </Tab.Panel>
            <Tab.Panel>
              <HistoryTab />
            </Tab.Panel>
            <Tab.Panel>Facets</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
