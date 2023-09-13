// @ts-nocheck
import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import axios_instance from "@/lib/services/request";
import {
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineDoubleRight,
  AiOutlineMore,
} from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi2";
import { useOnClickOutside } from "@/components/Shared/component/useOnClickOutSide";
import MainFrame from "@/components/Shared/MainFrame";
import ItemPanel from "./Overlay/Item";
import PromptPanel from "./Overlay/Prompt";
import PlatePanel from "./Overlay/Plate";
import WorkspacePopover from "@/components/interfaces/Workspace/WorkspacePopover";
import AgentPanel from "./Overlay/Agent";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import {
  get as _get,
  find as _find,
  map as _map,
  filter as _filter,
  last as _last,
  isEmpty as _isEmpty,
  truncate as _truncate,
} from "lodash";

import { gql, useMutation, useSubscription } from "@apollo/client";
import {
  FetchLatestAppStateDocument,
  InsertAppStateDocument,
} from "@/generated/graphql";

import { useNofificationContext } from "@/components/Shared/Notification";
import { uuidv7 } from "@kripod/uuidv7";
import { Dialog, Tab } from "@headlessui/react";
import { useDataframeContext } from "@/components/Pages/context/dataframe";
import { useUIContext } from "@/components/Pages/context/UIContext";
import { BsChevronRight, BsCloudDownload, BsCommand } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { RiExpandLeftFill } from "react-icons/ri";
import UploadPanel from "@/components/Common/UploadPanel";
import { HistoryTab } from "@/components/Layout/App/SideBar/Left/data";
import { VscHistory } from "react-icons/vsc";
import { FaceIcon, CubeIcon, MixIcon } from "@radix-ui/react-icons";
const AIPromptInput = (props) => {
  const { onClick, openLeftPanel } = props;

  useEffect(() => {
    const handleEsc = (event) => {
      console.log(event.metaKey, event.key, event.which);
      if (event.metaKey && event.key === "j") {
        console.log("Close");
        openLeftPanel();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className="flex flew-row h-full  items-start bg-emerald-200 border border-zinc-600 rounded-lg mr-2 dark:border-zinc-400 w-52 py-0.5 px-1"
      onClick={onClick}
    >
      <img className={clsx("h-6 w-6")} src="/term.svg" />
      <input
        className={clsx(
          "px-2 grow py-1 border-none",
          "placeholder-zinc-800 dark:placeholder-zinc-200",
          "bg-emerald-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm dark:bg-black focus:outline-none"
        )}
        onClick={onClick}
        type="search"
        autoComplete="off"
        name="search"
        placeholder="Enter AI Prompt"
      />
      <span className={"inline-flex w-8"}>
        <BsCommand className="h-4 w-4" />
        +';J
      </span>
    </div>
  );
};

export default (props) => {
  const workspace_ctx: any = useWorkspaceContext();
  const dataframe_ctx: any = useDataframeContext();
  const ui_ctx = useUIContext();
  const [, setUploadedFiles] = useState([]);
  const [data, setData] = useState<any>([]);
  const [analysisIds, setAnalysisIds] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState<any>(true);
  const [LeftPanelType, set_leftPanelType] = useState<any>(null);
  const [leftExtensionPanelType, set_leftExtensionPanelType] =
    useState<any>(null);
  const [selected_item, set_selected_item] = useState<any>(null);
  const [isConfirmModalOpen, setConfirmIsModalOpen] = useState<any>(false);
  const ref: any = useRef();
  const { user, error, isLoading } = useUser();

  const current_project_id = _get(
    workspace_ctx.state,
    "data.app_state[0].meta.project_id",
    ""
  );

  const current_dataframe_id = _get(
    workspace_ctx.state,
    "data.app_state[0].meta.dataframe_id",
    ""
  );

  const selected_dataframe = _find(
    _get(dataframe_ctx?.dataframe, "data.dataframe", []),
    {
      _id: current_dataframe_id,
    }
  );

  // # Iterated over data.schema an omit excluded_colls

  useOnClickOutside(ref, () => setIsModalOpen(false));

  const [createState, { ...create_state_gql }] = useMutation(
    InsertAppStateDocument,
    {
      errorPolicy: "all",
      refetchQueries: [
        {
          query: FetchLatestAppStateDocument,
          variables: { user_id: _get(workspace_ctx.user, "data.user[0].id") },
        }, // DocumentNode object parsed with gql
      ],
    }
  );

  // Hook to select the default dataset if not selected.
  useEffect(() => {
    if (
      current_project_id &&
      !current_dataframe_id &&
      _get(ctx, "datasets.data", []).length
    ) {
      const current_state = _get(workspace_ctx.state, "data.app_state[0].meta");
      createState({
        variables: {
          object: {
            meta: {
              ...current_state,
              dataset_id: _get(ctx, "datasets.data[0].id"),
            },
            user_id: _get(workspace_ctx.user, "data.user[0].id"),
            session_id: user.sid,
            id: uuidv7(),
          },
        },
      });
    }
  }, [current_project_id, workspace_ctx.dataframe, current_dataframe_id]);

  const cols = _map(selected_dataframe?.blueprint, (o) => o.slug);

  if (_isEmpty(cols)) {
    // return;
  }

  // Note the limit is dependent on the pricing plan.
  const limit = 2500;
  const dataframe_table_name = selected_dataframe?.table_name;

  const TABLE_DATA_SUBSCRIPTION = gql`
      subscription SUBSUBSCRIPTION__${dataframe_table_name} {
          ${dataframe_table_name}(limit: ${limit}, order_by: {_up: desc_nulls_last}) {
              ${cols}
          }
      }
  `;

  useEffect(() => {}, [selected_dataframe]);

  const dataSubscr = useSubscription(TABLE_DATA_SUBSCRIPTION);

  useEffect(() => {
    const data = _get(dataSubscr, `data.${dataframe_table_name}`);
    if (data) {
      setData([...data]);
    }
  }, [dataSubscr]);

  if (!current_dataframe_id) {
    return <div>Loading dataset</div>;
  }

  const handleItemCallback = async (item: any) => {
    set_selected_item(item);
    set_leftPanelType("ITEM");
    return;
  };

  const handlePromptCallback = async (item: any) => {
    set_leftPanelType("PROMPT");
    return;
  };

  if (
    !!_get(dataframe_ctx, "dataframe.loading") ||
    !_get(dataframe_ctx, "dataframe.data")
  ) {
    return (
      <div
        className={
          "flex flex-col justify-center content-center items-center h-screen"
        }
      >
        <h4>Loading</h4>
      </div>
    );
  }
  const class_icon = clsx("h-4 w-4", "text-gray-900", "dark:text-gray-100");

  const tab_style = clsx(
    "w-full max-w-xs",
    "items-center justify-center ",
    "text-black dark:text-white",
    "group cursor-pointer"
  );

  const handleDeleteDataframe = () => {
    const url = "/dataframe/";
    const other_dataframe = _find(
      _get(dataframe_ctx?.dataframe, "data.dataframe", []),
      (df) => df._id !== current_dataframe_id
    );
    workspace_ctx.updateState({ dataframe_id: other_dataframe._id });

    axios_instance
      .delete(url, { data: { dataframe_id: current_dataframe_id } })
      .then((res) => {
        setConfirmIsModalOpen(false);
      });
  };
  const onClick = (e) => {
    set_leftPanelType("PROMPT");
  };

  const tab_element_style = clsx(
    "flex space-x-1 py-2 px-2 justify-left items-center",
    "border-gray-200 border-b border-gray-400 dark:border-gray-800"
  );

  const onKeyDown = useCallback((e) => {
    console.log("Key down");
    if (e.key === "Enter") {
      set_leftPanelType("PROMPT");
    }
  });

  return (
    <div className={"h-[calc(100vh_-_1.5rem)] overflow-clip"}>
      {/*<div className={"h-[calc(100vh_-_6.5rem)]"}>*/}
      {/*<SplitPane split="horizontal" sizes={sizes} onChange={setSizes}>*/}
      {/*  {false && <Pane minSize={150}>*/}
      {/*    <ProjectToolBar*/}
      {/*      setBtnLoader={setBtnLoader}*/}
      {/*      runSearch={runSearch}*/}
      {/*      // runAnalyze={runAnalyze}*/}
      {/*      runQuery={runQuery}*/}
      {/*      analysisIds={analysisIds}*/}
      {/*    />*/}
      {/*  </Pane> }*/}
      {true && (
        <Tab.Group>
          <Tab.List
            className={
              "w-full relative bg-teal-200 h-10 flex bg-white dark:bg-black"
            }
          >
            <div
              className={
                "w-12 flex flex-col items-center items-center justify-center"
              }
            >
              <button
                onClick={(event) => {
                  ui_ctx.setLeftCascadeMenuOpen(!ui_ctx.leftCascadeMenuOpen);
                }}
              >
                <BsChevronRight
                  className={clsx(
                    "w-4 h-4",
                    ui_ctx.leftCascadeMenuTransform,
                    ui_ctx.leftCascadeMenuOpen ? "rotate-180 " : ""
                  )}
                />
              </button>
            </div>
            <Tab className={tab_style}>
              {({ selected }) => (
                <div
                  className={clsx(
                    selected
                      ? "border-none flex flex-row space-x-4 items-baseline bg-zinc-200 dark:bg-zinc-800"
                      : "",
                    tab_element_style
                  )}
                >
                  <span className={class_icon}>{selected_dataframe?.icon}</span>
                  &nbsp;&nbsp;
                  <span>{_truncate(selected_dataframe?.name, 18)}</span>
                  {/*<AiOutlineMore className="mr-2 h-5 w-5" aria-hidden="true" />*/}
                </div>
              )}
            </Tab>
            <div
              className="w-40 px-5 flex items-center"
              className={clsx(
                "bg-sky-100 dark:bg-sky-900  hover:bg-sky-200 dark:hover:bg-sky-800",
                "px-3 border-l border-r border-gray-400 "
              )}
            >
              <UploadPanel
                text={"Create"}
                label_class_name={clsx(
                  "py-2 px-1",

                  "text-gray-800 dark:text-gray-200 font-semibold ",
                  "font-medium text-sm text-center",
                  "w-full h-full flex items-center cursor-pointer"
                )}
              />
            </div>
            {/*<WorkspacePopover/>*/}
          </Tab.List>
          <Tab.Panels className={"w-full"}>
            <Tab.Panel className={" w-full "}>
              <div className="flex flex-row w-full py-1 h-10 bg-zinc-200 dark:bg-zinc-800 items-center">
                <div className="h-full flex-none w-24">
                  <BsCloudDownload className="w-4 h-4 mx-2" />
                </div>
                <div className="flex-1 h-full  w-64">
                  <HiOutlineTrash
                    className={"w-4 h-4 mx-2"}
                    onClick={() => {
                      setConfirmIsModalOpen(true);
                    }}
                  />
                </div>
                {!LeftPanelType && (
                  <AIPromptInput
                    onClick={onClick}
                    openLeftPanel={() => set_leftPanelType("PROMPT")}
                  />
                )}
              </div>
              <div
                className={
                  "h-[calc(100vh_-_6.5rem)] border-t bg-zinc-50 dark:bg-zinc-800 w-full flex flex-row"
                }
              >
                <div
                  className={clsx(
                    "flex-1 w-full overflow-scroll scroll-thin bg-zinc-50 dark:bg-zinc-900"
                  )}
                >
                  <MainFrame
                    data={data}
                    schema={selected_dataframe?.blueprint}
                    item_callback={handleItemCallback}
                    prompt_callback={handlePromptCallback}
                  />
                </div>
                {LeftPanelType && (
                  <div
                    className={clsx(
                      leftExtensionPanelType === null
                        ? "2xl:w-4/12 xl:w-4/12"
                        : "2xl:w-7/12 xl:w-7/12",
                      "z-10 h-fit border-l bg-transparent border-zinc-400 dark:border-zinc-300 shadow shadow-2xl flex flex-row"
                    )}
                  >
                    {leftExtensionPanelType && (
                      <div
                        className={
                          "h-fit w-2/5 bg-white dark:bg-black border-r border-slate-600"
                        }
                      >
                        <Tab.Group>
                          <div
                            className={
                              "h-10 border-b border-zinc-400 w-full flex flex-row"
                            }
                          >
                            <Tab.List
                              className={
                                "h-10 w-full flex bg-white dark:bg-black"
                              }
                            >
                              <Tab className={tab_style}>
                                {({ selected }) => (
                                  <div
                                    className={clsx(
                                      selected
                                        ? "border-none bg-zinc-200 dark:bg-zinc-800"
                                        : "",
                                      tab_element_style
                                    )}
                                  >
                                    <VscHistory className={class_icon} />
                                    <span>History</span>
                                  </div>
                                )}
                              </Tab>
                              <Tab className={tab_style}>
                                {({ selected }) => (
                                  <div
                                    className={clsx(
                                      selected
                                        ? "border-none bg-zinc-200 dark:bg-zinc-800"
                                        : "",
                                      tab_element_style
                                    )}
                                  >
                                    <VscHistory className={class_icon} />
                                    <span>Agents</span>
                                  </div>
                                )}
                              </Tab>
                            </Tab.List>
                          </div>
                          <Tab.Panels className={"h-screen"}>
                            <div
                              className={
                                "px-2 py-2 h-[calc(100vh_-_9.05rem)] overflow-scroll w-full "
                              }
                            >
                              <Tab.Panel className={"h-screen"}>
                                <HistoryTab />
                              </Tab.Panel>
                              <Tab.Panel className={"h-screen"}>
                                <AgentPanel />
                              </Tab.Panel>
                            </div>
                          </Tab.Panels>
                        </Tab.Group>
                      </div>
                    )}
                    <div
                      className={clsx(
                        leftExtensionPanelType ? "w-3/5" : "w-full",
                        "h-fit bg-white dark:bg-black"
                      )}
                    >
                      <div
                        className={
                          "h-10 border-b border-zinc-400 w-full flex flex-row items-center justify-end space-x-8"
                        }
                      >
                        <button onClick={() => set_leftPanelType("AGENTS")}>
                          <CubeIcon
                            className={clsx(
                              "h-6 w-6",
                              "text-gray-800 dark:text-gray-200"
                            )}
                          />
                        </button>
                        <button onClick={() => set_leftPanelType("AGENTS")}>
                          <MixIcon
                            className={clsx(
                              "h-6 w-6",
                              "text-gray-800 dark:text-gray-200"
                            )}
                          />
                        </button>
                        <button onClick={() => set_leftPanelType("PROMPT")}>
                          <img className={clsx("h-6 w-6")} src="/term.svg" />
                        </button>
                        <button onClick={() => set_leftPanelType(null)}>
                          <AiOutlineClose className={"w-6 h-6"} />
                        </button>
                      </div>
                      <div
                        className={
                          "px-2 py-2 h-[calc(100vh_-_9.05rem)] overflow-scroll w-full "
                        }
                      >
                        {(() => {
                          switch (LeftPanelType) {
                            // case "PROMPT":
                            //   return (
                            //     <PromptPanel
                            //       schema={selected_dataframe?.blueprint}
                            //     />
                            //   );
                            case "PROMPT":
                              return (
                                <PlatePanel
                                  schema={selected_dataframe?.blueprint}
                                />
                              );
                            case "ITEM":
                              return (
                                <ItemPanel
                                  schema={selected_dataframe?.blueprint}
                                  item={selected_item}
                                />
                              );
                            case "AGENTS":
                              return <AgentPanel />;
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      )}
      <Dialog
        as="div"
        open={isConfirmModalOpen}
        className="relative z-10"
        onClose={() => {
          setConfirmIsModalOpen(false);
        }}
      >
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-sky-50 dark:bg-sky-900 p-6 text-left align-middle shadow-xl transition-all">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            Delete Table
          </Dialog.Title>
          <div className="mt-2 py-2">
            Are you sure you want to delete this table?
            <span>{selected_dataframe?.name}</span>
          </div>

          <div className="mt-4 flex flex-row justify-center items-center space-x-3">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2"
              onClick={() => {
                setConfirmIsModalOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={handleDeleteDataframe}
            >
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>

      <div className="text-sm">
        <div className="flex justify-between border-t border-gray-200 pt-2">
          <div className="flex flex-col items-center"></div>
          {analysisIds.length > 0 && (
            <span>{`${analysisIds.length} selected`}</span>
          )}
        </div>
      </div>
      {/*</SplitPane>*/}
      {/* </div>*/}
    </div>
  );
};
