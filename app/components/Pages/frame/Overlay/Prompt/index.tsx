// @ts-nocheck
import React, {
  useMemo,
  useCallback,
  useRef,
  useEffect,
  useState,
  Fragment,
} from "react";
import { Editor, Transforms, Range, createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import {
  Slate,
  Editable,
  ReactEditor,
  withReact,
  useSelected,
  useFocused,
  useSlate,
} from "slate-react";
import { clsx } from "clsx";
import slugify from "slugify";
import { get as _get, map as _map, filter as _filter } from "lodash";
import { Portal } from "./components";
import { MentionElement } from "./custom-types";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { useAuthUserContext } from "@/components/Pages/context/authUser";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useDataframeContext } from "@/components/Pages/context/dataframe";
import axios_instance from "@/lib/services/request";

const Mention = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  const style: React.CSSProperties = {
    padding: "3px 3px 2px",
    margin: "0 1px",
    verticalAlign: "baseline",
    display: "inline-block",
    borderRadius: "4px",
    backgroundColor: "#eee",
    fontSize: "0.9em",
    boxShadow: selected && focused ? "0 0 0 2px #B4D5FF" : "none",
  };
  // See if our empty text child has any styling marks applied and apply those
  if (element.children[0].bold) {
    style.fontWeight = "bold bg-sky-50 dark:bg-sky-800";
  }
  if (element.children[0].italic) {
    style.fontStyle = "italic bg-sky-50 dark:bg-sky-800";
  }
  return (
    <span
      {...attributes}
      contentEditable={false}
      data-cy={`mention-${element.column.replace(" ", "_")}`}
      className={clsx(
        "bg-sky-50 dark:bg-gray-900 p-1 m-1 rounded",
        selected && focused && "bg-sky-100 dark:bg-gray-00"
      )}
    >
      @{element.column}
      {children}
    </span>
  );
};

const Slash = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  const style: React.CSSProperties = {
    padding: "3px 3px 2px",
    margin: "0 1px",
    verticalAlign: "baseline",
    display: "inline-block",
    borderRadius: "4px",
    backgroundColor: "#eee",
    fontSize: "0.9em",
    boxShadow: selected && focused ? "0 0 0 2px #B4D5FF" : "none",
  };
  // See if our empty text child has any styling marks applied and apply those
  if (element.children[0].bold) {
    style.fontWeight = "bold bg-sky-50 dark:bg-sky-800";
  }
  if (element.children[0].italic) {
    style.fontStyle = "italic bg-sky-50 dark:bg-sky-800";
  }
  return (
    <span
      {...attributes}
      contentEditable={false}
      data-cy={`mention-${element.column.replace(" ", "_")}`}
      className={clsx(
        "bg-sky-50 dark:bg-gray-900 p-1 m-1 rounded",
        selected && focused && "bg-sky-100 dark:bg-gray-00"
      )}
    >
      /{element.column}
      {children}
    </span>
  );
};

const Element = (props): JSX.Element => {
  const editor = useSlate();
  const selection = editor.selection;
  let isSelectionCollapsed = true;
  if (selection !== null)
    isSelectionCollapsed = Range.isCollapsed(editor.selection);

  const { attributes, children, element } = props;
  const selected = useSelected();
  const isEmpty =
    children.props &&
    children.props.node &&
    children.props.node.children &&
    children.props.node.children[0].text === "" &&
    children.props.node.children.length === 1;

  return (
    <p
      {...props}
      className={
        selected && isEmpty && isSelectionCollapsed
          ? "selected-empty-element"
          : "selected-empty-element"
      }
    >
      {(() => {
        switch (element.type) {
          case "mention":
            return <Mention {...props} />;
          case "slash":
            return <Slash {...props} />;
          default:
            return (
              <p {...attributes}>
                <br />
                {children}
              </p>
            );
        }
      })()}
    </p>
  );
};

const newNodeTypes = [
  {
    id: "6",
    name: "Browser",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/chrome.png",
    activation_command: "browse",
  },
  {
    id: "4",
    name: "Google Search",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/google-search.png",
    activation_command: "google_search",
  },
  {
    id: "3",
    name: "Bing Search",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/bing-search.webp",
    tags: ["Search", "Bing", "Microsoft"],
    activation_command: "bing_search",
  },
  {
    id: "1",
    name: "Hubspot",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/hubspot.png",
    tags: ["CRM", "Hubspot", "Sales", "Marketing", "Customer Service"],
    activation_command: "hubspot",
  },
  {
    id: "8",
    name: "Salesforce",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/salesforce.png",
    activation_command: "salesforce",
  },
  {
    id: "8",
    name: "Apollo.io",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/apollo-io-logo.png",
    tags: [],
    activation_command: "apollo",
  },
  {
    id: "8",
    name: "LinkedIn",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/linkedin.webp",
    activation_command: "linkedin",
  },
];

export default (props) => {
  const { user_id } = useAuthUserContext();
  const workspace_ctx: any = useWorkspaceContext();
  const dataframe_ctx: any = useDataframeContext();
  const ref = useRef<HTMLDivElement | null>();
  const [target, setTarget] = useState<Range | undefined>();
  const [slash_target, set_slash_Target] = useState<Range | undefined>();
  const [index, setIndex] = useState(0);
  const [selectedLim, setSelectedLim] = useState(10);
  const [selectedOutCol, setSelectedOutCol] = useState({});
  const [search_mention, setSearch_mention] = useState();
  const [search_slash, setSearch_slash] = useState();
  const [query, setQuery] = useState("");
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withMentions(withReact(withHistory(createEditor()))),
    []
  );

  const [value, setValue] = useState<Node[]>([
    {
      children: [
        {
          text: "Create a newline to see placeholder",
          marks: [],
        },
      ],
    },
  ]);

  const current_workspace_id = _get(
    workspace_ctx?.state,
    "data.app_state[0].meta.workspace_id"
  );

  const current_dataframe_id = _get(
    workspace_ctx.state,
    "data.app_state[0].meta.dataframe_id",
    ""
  );

  const outputColumnNameList = [
    {
      id: `ai_column_${props.schema.length}`,
      name: `ai_column_${props.schema.length}`,
      slug: `ai_column_${props.schema.length}`,
      new: true,
    },
    ..._map(_filter(props.schema, "ai_gen"), (sc, idx) => ({
      id: sc.slug,
      name: sc.display_name,
      slug: sc.slug,
      new: false,
    })),
  ];

  // useEffect(() => {
  //   const editorEl = document.querySelector<HTMLDivElement>(
  //       '[data-slate-editor="true"]',
  //   );
  //   editorEl.style.minHeight = `300px`;
  // }, []);

  useEffect(() => {
    //
    setSelectedOutCol(outputColumnNameList[0]);
  }, []);

  useEffect(() => {
    if (dataframe_ctx.prompt.length > 0) {
      try {
        Transforms.delete(editor, {
          at: {
            anchor: Editor.start(editor, []),
            focus: Editor.end(editor, []),
          },
          distance: 1,
          unit: "line",
        });
      } catch (e) {
        console.log(e);
      }

      Transforms.removeNodes(editor, { mode: "highest", hanging: true });
      Transforms.insertNodes(editor, dataframe_ctx.prompt);
      Transforms.move(editor);
    }
  }, [dataframe_ctx.prompt]);

  const setOutputColName = (name) => {
    setSelectedOutCol(name);
    setQuery(name);
  };

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

  const filtered_output_columns =
    query === ""
      ? outputColumnNameList
      : outputColumnNameList.filter((column) => {
          return column.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  if (query && filtered_output_columns.length === 0) {
    filtered_output_columns.splice(0, 0, {
      id: "query",
      name: query,
      slug: slugify(query),
      new: true,
    });
  }

  const COLUMNS = props.schema.map((s) => s.slug);

  const mention_chars = COLUMNS.filter(
    (c) =>
      search_mention && c.toLowerCase().startsWith(search_mention.toLowerCase())
  );

  const slash_chars = _.filter(newNodeTypes, (agent) => {
    if (!search_slash) {
      return false;
    }
    return agent.activation_command
      .toLowerCase()
      .startsWith(search_slash.toLowerCase());
  });

  // const slash_chars = newNodeTypes.filter((c) =>
  //     search_slash && c.activation_command.toLowerCase().startsWith(search_slash.toLowerCase())
  // );
  console.log(
    `search_slash>|${search_slash}|`,
    slash_chars,
    newNodeTypes,
    slash_target
  );

  const onKeyDown = useCallback(
    (event) => {
      if (target && mention_chars.length > 0) {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            const prevIndex = index >= mention_chars.length - 1 ? 0 : index + 1;
            setIndex(prevIndex);
            return;
          case "ArrowUp":
            event.preventDefault();
            const nextIndex = index <= 0 ? mention_chars.length - 1 : index - 1;
            setIndex(nextIndex);
            return;
          case "Tab":
          case "Enter":
            event.preventDefault();
            Transforms.select(editor, target);
            insertMention(editor, mention_chars[index]);
            setTarget(null);
            return;
          case "Escape":
            event.preventDefault();
            setTarget(null);
            return;
        }
      }

      if (slash_target && slash_chars.length > 0) {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            const prevIndex = index >= slash_chars.length - 1 ? 0 : index + 1;
            setIndex(prevIndex);
            return;
          case "ArrowUp":
            event.preventDefault();
            const nextIndex = index <= 0 ? slash_chars.length - 1 : index - 1;
            setIndex(nextIndex);
            return;
          case "Tab":
          case "Enter":
            event.preventDefault();
            Transforms.select(editor, slash_target);
            insertSlash(editor, slash_chars[index].activation_command);
            set_slash_Target(null);
            null;
            return;
          case "Escape":
            event.preventDefault();
            set_slash_Target(null);
            return;
        }
      }
    },
    [mention_chars, slash_chars, editor, index, target]
  );

  const onChangeValue = (value: any) => {
    // Must always update the value to allow normal use of editor such as cursor movement and typing
    setValue(value);

    const { selection, ...rest } = editor;
    console.log(
      "🛟",
      value,
      selection,
      selection && Range.isCollapsed(selection),
      rest
    );

    if (selection) {
      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { voids: true });
      console.log("-->", start, wordBefore);

      if (!wordBefore) {
        setTarget(null);
        return;
      }

      const before = Editor.before(editor, wordBefore) || start;

      console.log("before", before);

      const beforeRange = Editor.range(editor, before, start);
      const beforeText =
        beforeRange && Editor.string(editor, beforeRange).trim();

      console.log(wordBefore, start, before, beforeRange, beforeText);
      const beforeMatch_at = beforeText && beforeText.match(/^@(\w*)$/);
      const beforeMatch_slash = beforeText && beforeText.match(/^\/(\w*)$/);

      // const beforeMatch_at = beforeText && beforeText.match(/^@/);
      // const beforeMatch_slash = beforeText && beforeText.match(/^\//);

      console.log(beforeMatch_at, beforeMatch_slash);

      const after = Editor.after(editor, start);
      const afterRange = Editor.range(editor, start, after);
      const afterText = Editor.string(editor, afterRange);
      const afterMatch_at = afterText.match(/^(\s|$)/);
      const afterMatch_slash = afterText.match(/^(\s|$)/);

      // console.log("🧼", afterMatch_at, beforeRange);

      if (beforeMatch_at && afterMatch_at) {
        setTarget(beforeRange);
        console.log("🦙 ->> ", beforeMatch_at[0], beforeMatch_at[1]);
        setSearch_mention(beforeMatch_at[1].trim());
        setSearch_slash(null);
        setIndex(0);
        return;
      }

      if (beforeMatch_slash && afterMatch_slash) {
        set_slash_Target(beforeRange);
        console.log("🦙 ->> ", beforeMatch_slash[0], beforeMatch_slash[1]);
        setSearch_slash(beforeMatch_slash[1].trim());
        setSearch_mention(null);
        setIndex(0);
        return;
      }
    }
    setTarget(null);
  };

  useEffect(() => {
    //
    if (target && mention_chars.length > 0 && editor.children.length > 0) {
      const el = ref.current;
      if (el) {
        const domRange = ReactEditor.toDOMRange(editor, target);
        const rect = domRange.getBoundingClientRect();
        el.style.top = `${rect.top + window.pageYOffset + 48}px`;
        el.style.left = `${rect.left + window.pageXOffset}px`;
      } else {
        console.error("el is null");
      }
    }

    if (slash_target && slash_chars.length > 0 && editor.children.length > 0) {
      const el = ref.current;
      //
      const domRange = ReactEditor.toDOMRange(editor, slash_target);
      const rect = domRange.getBoundingClientRect();
      if (el) {
        el.style.top = `${rect.top + window.pageYOffset + 48}px`;
        el.style.left = `${rect.left + window.pageXOffset}px`;
      } else {
        console.error("el is null");
      }
    }
  }, [
    mention_chars.length,
    slash_chars.length,
    editor,
    index,
    search_mention,
    search_slash,
    target,
    slash_target,
  ]);

  const onSubmitColumnPrompt = async (event: any) => {
    event.preventDefault();

    console.log(selectedLim);

    const url = "/dataframe/prompt/";

    const prompt = editor.children;

    const post_data = {
      prompt: prompt,
      workspace_id: current_workspace_id,
      dataframe_id: current_dataframe_id,
      initiator_id: user_id,
      limit: selectedLim,
      output_column_name: selectedOutCol.name,
      output_column_slug: selectedOutCol.slug,
      id_list: Array.from(dataframe_ctx.selected_ids),
    };

    return axios_instance.post(url, post_data).then((res) => {
      //
    });
  };

  const button_group =
    "px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600";
  const button_selected =
    "bg-gray-200 dark:bg-gray-500 scale-110 z-0 text-blue-600 shadow-inner";

  return (
    <form onSubmit={onSubmitColumnPrompt}>
      <div className={"py-2  mb-6 bg-sky-50 dark:bg-sky-900 rounded-md p-2"}>
        <h1 className={"text-2xl font-semibold"}>💡</h1>
        <p>
          Enter your prompt below. Be sure to mention a{" "}
          <span className={"font-semibold bg-sky-100 dark:bg-sky-800"}>
            @column
          </span>
          &nbsp; to run your data agent on.
        </p>
        <br />
        <p>
          You can think of{" "}
          <span className={"underline bg-sky-100 dark:bg-sky-800"}>agents</span>{" "}
          as intelligent{" "}
          <span className={"font-semibold bg-sky-100 dark:bg-sky-800 "}>
            micro-apps
          </span>{" "}
          that perform tasks for you such as:
        </p>
        <ul className={"list-disc list-inside"}>
          <li>Visit a webpage and extract a table of data.</li>
          <li>Clean a column of data.</li>
          <li>Search Google/Bing.</li>
          <li>Summarize data from multiple columns</li>
        </ul>
      </div>
      <label htmlFor="chat" className="sr-only">
        Your prompt for the column
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <Slate
          editor={editor}
          value={value}
          initialValue={dataframe_ctx.prompt || initialValue}
          onChange={onChangeValue}
        >
          <Editable
            style={{ minHeight: "300px" }}
            className={"w-full bg-white dark:bg-black py-4 px-3"}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={onKeyDown}
            placeholder=""
            renderPlaceholder={({ children, attributes }) => (
              <div {...attributes}>
                <p>{children}</p>
                <p>Enter a prompt. Be sure to mention a @column.</p>
              </div>
            )}
          />
          {target && mention_chars && (
            <Portal>
              <div
                className={
                  "bg-white dark:bg-black p-2 z-10 absolute border-2 shadow-md"
                }
                ref={ref}
                style={{
                  top: "-9999px",
                  left: "-9999px",
                }}
                data-cy="mentions-portal"
              >
                {mention_chars.map((char, i) => (
                  <div
                    key={char}
                    onClick={() => {
                      Transforms.select(editor, target);
                      insertMention(editor, char);
                      setTarget(null);
                    }}
                    style={{
                      padding: "1px 3px",
                      borderRadius: "3px",
                      background: i === index ? "#B4D5FF" : "transparent",
                    }}
                  >
                    {char}
                  </div>
                ))}
              </div>
            </Portal>
          )}
          {slash_target && slash_chars && (
            <Portal>
              <div
                className={
                  "bg-white dark:bg-black p-2 z-10 absolute border-2 shadow-md"
                }
                ref={ref}
                style={{
                  top: "-9999px",
                  left: "-9999px",
                }}
                data-cy="mentions-portal"
              >
                {slash_chars.map((agent, i) => (
                  <div
                    key={agent.id}
                    onClick={() => {
                      Transforms.select(editor, slash_target);
                      insertMention(editor, char);
                      setTarget(null);
                    }}
                    style={{
                      padding: "1px 3px",
                      borderRadius: "3px",
                      background: i === index ? "#B4D5FF" : "transparent",
                    }}
                    className={
                      "flex flex-row justify-start items-center space-x-2"
                    }
                  >
                    <img src={agent.icon} className={"w-6 h-6"} />
                    <div className={"flex flex-col"}>
                      <span>{agent.name}</span>
                      <span>{agent.activation_command}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Portal>
          )}
        </Slate>
      </div>
      <div className={"py-8 flex flex-col justify-start space-y-4"}>
        <div className={"flex flex-row justify-start items-center space-x-2"}>
          <span className={"w-32"}>Output column</span>
          <div className="w-54 z-10">
            <Combobox value={selectedOutCol} onChange={setSelectedOutCol}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white dark:bg-slate-900 dark:text-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full dark:bg-slate-900 dark:text-white border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(column) => column.name}
                    onChange={(event) => {
                      setOutputColName(event.target.value);
                    }}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filtered_output_columns.length > 0 && (
                      <div className="relative mt-1">
                        {filtered_output_columns.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white  dark:text-white dark:bg-sky-800"
                                  : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active
                                        ? "text-white dark:text-black"
                                        : "text-teal-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                      </div>
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>
        <div className={"flex flex-row justify-start items-center space-x-2 "}>
          <span className={"w-32"}>Rows</span>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={clsx(
                button_group,
                "border rounded-l-lg",
                selectedLim === 10 && button_selected
              )}
              onClick={(e) => setSelectedLim(10)}
            >
              10
            </button>
            <button
              type="button"
              className={clsx(
                button_group,
                "border-t border-b",
                selectedLim === 25 && button_selected
              )}
              onClick={(e) => setSelectedLim(25)}
            >
              25
            </button>
            <button
              type="button"
              className={clsx(
                button_group,
                "border-t border-b",
                selectedLim === 100 && button_selected
              )}
              onClick={(e) => setSelectedLim(100)}
            >
              100
            </button>
            <button
              type="button"
              className={clsx(
                button_group,
                "border  rounded-r-md",
                selectedLim === 250 && button_selected
              )}
              onClick={(e) => setSelectedLim(250)}
            >
              250
            </button>
          </div>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={clsx(
                button_group,
                "border  rounded-l-lg",
                selectedLim === "all" && button_selected
              )}
              onClick={(e) => setSelectedLim("all")}
            >
              All
            </button>
            <button
              type="button"
              className={clsx(
                button_group,
                "border  rounded-r-md",
                selectedLim === "selected" && button_selected
              )}
              onClick={(e) => setSelectedLim("selected")}
            >
              Selected {dataframe_ctx.selected_rows?.size}
            </button>
          </div>
        </div>
      </div>
      <div className={"py-8 flex flex-row justify-end items-end space-x-4"}>
        <div className={"w-16"}>
          <button
            type="submit"
            disabled={editor.children.length === 0}
            className={clsx(
              "text-white bg-sky-50 shadow hover:bg-sky-100 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm disabled:bg-green-50",
              "px-1 py-2.5 text-center  w-full flex flex-row justify-center"
            )}
          >
            <img className={clsx("h-10 w-10")} src="/term-2.svg" />
          </button>
        </div>
      </div>
    </form>
  );
};

const withMentions = (editor) => {
  const { isInline, isVoid, markableVoid } = editor;

  editor.isInline = (element) => {
    return element.type === "mention" ? true : isInline(element);
  };

  editor.isVoid = (element) => {
    return element.type === "mention" ? true : isVoid(element);
  };

  editor.markableVoid = (element) => {
    return element.type === "mention" || markableVoid(element);
  };

  return editor;
};

const insertMention = (editor, column) => {
  const mention: MentionElement = {
    type: "mention",
    column,
    children: [{ text: "", bold: true }],
  };
  Transforms.insertNodes(editor, mention);
  Transforms.move(editor);
};

const insertSlash = (editor, column) => {
  const mention: MentionElement = {
    type: "slash",
    column,
    children: [{ text: "", bold: true }],
  };
  Transforms.insertNodes(editor, mention);
  Transforms.move(editor);
};

// Borrow Leaf renderer from the Rich Text example.
// In a real project you would get this via `withRichText(editor)` or similar.
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [
      { text: "Enter your prompt here. Be sure to mention a " },
      {
        type: "mention",
        column: "Column Name",
        children: [{ text: "", bold: true }],
      },
      { text: " to run your data agent on." },
    ],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];
