// @ts-nocheck
"use client";

import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPlateUI } from "@/plate/create-plate-ui";
import { editableProps } from "@/plate/demo/editableProps";
import { isEnabled } from "@/plate/demo/is-enabled";
import { alignPlugin } from "@/plate/demo/plugins/alignPlugin";
import { autoformatIndentLists } from "@/plate/demo/plugins/autoformatIndentLists";
import { autoformatLists } from "@/plate/demo/plugins/autoformatLists";
import { autoformatRules } from "@/plate/demo/plugins/autoformatRules";
import { captionPlugin } from "@/plate/demo/plugins/captionPlugin";
import { emojiPlugin } from "@/plate/demo/plugins/emojiPlugin";
import { exitBreakPlugin } from "@/plate/demo/plugins/exitBreakPlugin";
import { forcedLayoutPlugin } from "@/plate/demo/plugins/forcedLayoutPlugin";
import { indentPlugin } from "@/plate/demo/plugins/indentPlugin";
import { lineHeightPlugin } from "@/plate/demo/plugins/lineHeightPlugin";
import { linkPlugin } from "@/plate/demo/plugins/linkPlugin";
import { resetBlockTypePlugin } from "@/plate/demo/plugins/resetBlockTypePlugin";
import { selectOnBackspacePlugin } from "@/plate/demo/plugins/selectOnBackspacePlugin";
import { softBreakPlugin } from "@/plate/demo/plugins/softBreakPlugin";
import { tabbablePlugin } from "@/plate/demo/plugins/tabbablePlugin";
import { trailingBlockPlugin } from "@/plate/demo/plugins/trailingBlockPlugin";
import { AGENTS } from "@/plate/demo/values/mentionables";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import {
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
} from "@udecode/plate-basic-marks";
import * as Tooltip from "@radix-ui/react-tooltip";
import { createBlockquotePlugin } from "@udecode/plate-block-quote";
import {
  createExitBreakPlugin,
  createSingleLinePlugin,
  createSoftBreakPlugin,
} from "@udecode/plate-break";
import { createCaptionPlugin } from "@udecode/plate-caption";
import { createCodeBlockPlugin } from "@udecode/plate-code-block";
import { createComboboxPlugin } from "@udecode/plate-combobox";
import { createCommentsPlugin } from "@udecode/plate-comments";
import {
  createPlateEditor,
  Plate,
  PlatePluginComponent,
  PlateProvider,
  usePlateActions,
  usePlateEditorRef,
  usePlateSelectors,
  usePlateEditorState,
} from "@udecode/plate-common";
// import { createDndPlugin } from '@udecode/plate-dnd';
import { createEmojiPlugin } from "@udecode/plate-emoji";
import { createExcalidrawPlugin } from "@udecode/plate-excalidraw";
import {
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
} from "@udecode/plate-font";
import { createHeadingPlugin } from "@udecode/plate-heading";
import { createHighlightPlugin } from "@udecode/plate-highlight";
import { createHorizontalRulePlugin } from "@udecode/plate-horizontal-rule";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createIndentListPlugin } from "@udecode/plate-indent-list";
import { createJuicePlugin } from "@udecode/plate-juice";
import { createKbdPlugin } from "@udecode/plate-kbd";
import { createLineHeightPlugin } from "@udecode/plate-line-height";
import { createLinkPlugin } from "@udecode/plate-link";
import { createListPlugin, createTodoListPlugin } from "@udecode/plate-list";
import {
  createImagePlugin,
  createMediaEmbedPlugin,
} from "@udecode/plate-media";
// import { createMentionPlugin } from "@udecode/plate-mention";
import { createMentionPlugin } from "@/lib/mention/createMentionPlugin";

import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createNormalizeTypesPlugin } from "@udecode/plate-normalizers";
import { createParagraphPlugin } from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createSelectOnBackspacePlugin } from "@udecode/plate-select";
import { createBlockSelectionPlugin } from "@udecode/plate-selection";
import { createDeserializeDocxPlugin } from "@udecode/plate-serializer-docx";
import { createDeserializeMdPlugin } from "@udecode/plate-serializer-md";
import { createTabbablePlugin } from "@udecode/plate-tabbable";
import { createTablePlugin } from "@udecode/plate-table";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";

import { createMyPlugins, MyValue } from "@/types/plate-types";
import { ValueId } from "@/config/setting-values";
import clsx from "clsx";
import { settingsStore } from "@/components/context/settings-store";
import { CommentsPopover } from "@/components/plate-ui/comments-popover";
import { CursorOverlay } from "@/components/plate-ui/cursor-overlay";
import { MentionCombobox } from "@/components/plate-ui/mention-combobox";

import { createPluginFactory } from "@udecode/plate-common";
import axios_instance from "@/lib/services/request";
import { useDataframeContext } from "@/components/Pages/context/dataframe";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { useAuthUserContext } from "@/components/Pages/context/authUser";
import { useNofificationContext } from "@/components/Shared/Notification";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { filter as _filter, map as _map } from "lodash";
import slugify from "slugify";
import { MixIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
const KEY_AMAZING = "amazing";

const create_at_mentionPlugin = createPluginFactory({
  ...createMentionPlugin({
    enabled: true,
    options: {
      triggerPreviousCharPattern: /^$|^[\s"']$/,
      trigger: "/",
    },
  }),
  // key: "at_mention"
});

// const create_slash_mentionPlugin = createPluginFactory({
//     ...createMentionPlugin({
//         enabled: true,
//         options: {
//             triggerPreviousCharPattern: /^$|^[\s"']$/,
//             trigger: ['@', '/']
//         },
//     }),
//     key: "slash_mention"
// });

const CustomEffect = () => {
  const editor = usePlateEditorRef();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("The editor is ", editor);
    }, 1000);

    return () => clearInterval(interval);
  }, [editor]);

  return <div>Custom Effect</div>;
};

// const createAmazingPlugin = createPluginFactory({
//   key: "mention_detector",
//   then: (editor) => {
//     console.log("mention_detector", editor);
//     console.log(editor.nodes());
//     console.log(editor.value);
//     return {
//       deserializeHtml: {
//         // Do something with editor
//       },
//     };
//   },
//   handlers: {
//     onKeyDown: (editor) => (event) => {
//       // Do something with editor
//     },
//     onChange: (editor) => (value) => {
//       console.log(value);
//     },
//   },
// });

export const usePlaygroundPlugins = ({
  id,
  components = createPlateUI(),
}: {
  id?: ValueId;
  components?: Record<string, PlatePluginComponent>;
} = {}) => {
  const enabled = settingsStore.use.checkedPlugins();

  const autoformatOptions = {
    rules: [...autoformatRules],
    enableUndoOnDelete: true,
  };

  if (id === "indentlist") {
    autoformatOptions.rules.push(...autoformatIndentLists);
  } else if (id === "list") {
    autoformatOptions.rules.push(...autoformatLists);
  } else if (!!enabled.listStyleType) {
    autoformatOptions.rules.push(...autoformatIndentLists);
  } else if (!!enabled.list) {
    autoformatOptions.rules.push(...autoformatLists);
  }

  return useMemo(
    () =>
      createMyPlugins(
        [
          create_at_mentionPlugin(),
          // create_slash_mentionPlugin(),
          // createAmazingPlugin(),

          // Nodes
          // createParagraphPlugin({ enabled: !!enabled.p }),
          // createHeadingPlugin({ enabled: !!enabled.heading }),
          // createBlockquotePlugin({ enabled: !!enabled.blockquote }),
          // createCodeBlockPlugin({ enabled: !!enabled.code_block }),
          // createHorizontalRulePlugin({ enabled: !!enabled.hr }),
          // createLinkPlugin({ ...linkPlugin, enabled: !!enabled.a }),
          // createListPlugin({
          //   enabled: id === "list" || !!enabled.list,
          // }),
          // createImagePlugin({ enabled: !!enabled.img }),
          // createMediaEmbedPlugin({ enabled: !!enabled.media_embed }),
          // createCaptionPlugin({ ...captionPlugin, enabled: !!enabled.caption }),

          // {
          //   ...createMentionPlugin({
          //     enabled: !!enabled.mention,
          //     options: {
          //       triggerPreviousCharPattern: /^$|^[\s"']$/,
          //       trigger: "@",
          //         id: "at_mention",
          //     },
          //   }),
          //   key: "at_mention",
          //   id: "at_mention",
          // },
          //   {
          //       ...createMentionPlugin({
          //           enabled: !!enabled.mention,
          //           options: {
          //               triggerPreviousCharPattern: /^$|^[\s"']$/,
          //               trigger: "/",
          //               id: "slash_mention",
          //           },
          //       }),
          //       key: "slash_mention",
          //       id: "slash_mention",
          //   },
          // createTablePlugin({ enabled: !!enabled.table }),
          // createTodoListPlugin({ enabled: !!enabled.action_item }),
          //
          // // Marks
          // createBoldPlugin({ enabled: !!enabled.bold }),
          // createItalicPlugin({ enabled: !!enabled.italic }),
          // createUnderlinePlugin({ enabled: !!enabled.underline }),
          // createStrikethroughPlugin({ enabled: !!enabled.strikethrough }),
          // createCodePlugin({ enabled: !!enabled.code }),
          // createSubscriptPlugin({ enabled: !!enabled.subscript }),
          // createSuperscriptPlugin({ enabled: !!enabled.superscript }),
          // createFontColorPlugin({ enabled: !!enabled.color }),
          // createFontBackgroundColorPlugin({
          //   enabled: !!enabled.backgroundColor,
          // }),
          // createFontSizePlugin({ enabled: !!enabled.fontSize }),
          // createHighlightPlugin({ enabled: !!enabled.highlight }),
          // createKbdPlugin({ enabled: !!enabled.kbd }),
          //
          // // Block Style
          // createAlignPlugin({ ...alignPlugin, enabled: !!enabled.align }),
          // createIndentPlugin({ ...indentPlugin, enabled: !!enabled.indent }),
          // createIndentListPlugin({
          //   enabled: id === "indentlist" || !!enabled.listStyleType,
          // }),
          // createLineHeightPlugin({
          //   ...lineHeightPlugin,
          //   enabled: !!enabled.lineHeight,
          // }),
          //
          // // Functionality
          // createAutoformatPlugin({
          //   enabled: !!enabled.autoformat,
          //   options: autoformatOptions,
          // }),
          // createBlockSelectionPlugin({
          //   options: {
          //     sizes: {
          //       top: 0,
          //       bottom: 0,
          //     },
          //   },
          //   enabled: id === "blockselection" || !!enabled.blockSelection,
          // }),
          createComboboxPlugin({ enabled: !!enabled.combobox }),
          // // createDndPlugin({
          // //     options: { enableScroller: true },
          // //     enabled: !!enabled.dnd,
          // // }),
          // createEmojiPlugin({ ...emojiPlugin, enabled: !!enabled.emoji }),
          // createExitBreakPlugin({
          //   ...exitBreakPlugin,
          //   enabled: !!enabled.exitBreak,
          // }),
          // createNodeIdPlugin({ enabled: !!enabled.nodeId }),
          // createNormalizeTypesPlugin({
          //   ...forcedLayoutPlugin,
          //   enabled: !!enabled.normalizeTypes,
          // }),
          // createResetNodePlugin({
          //   ...resetBlockTypePlugin,
          //   enabled: !!enabled.resetNode,
          // }),
          // createSelectOnBackspacePlugin({
          //   ...selectOnBackspacePlugin,
          //   enabled: !!enabled.selectOnBackspace,
          // }),
          // createSingleLinePlugin({
          //   enabled: id === "singleline" || !!enabled.singleLine,
          // }),
          // createSoftBreakPlugin({
          //   ...softBreakPlugin,
          //   enabled: !!enabled.softBreak,
          // }),
          // createTabbablePlugin({
          //   ...tabbablePlugin,
          //   enabled: !!enabled.tabbable,
          // }),
          // createTrailingBlockPlugin({
          //   ...trailingBlockPlugin,
          //   enabled: id !== "singleline" && !!enabled.trailingBlock,
          // }),
          //
          // // Collaboration
          // createCommentsPlugin({ enabled: !!enabled.comment }),
          //
          // // Deserialization
          // createDeserializeDocxPlugin({ enabled: !!enabled.deserializeDocx }),
          // createDeserializeMdPlugin({ enabled: !!enabled.deserializeMd }),
          // createJuicePlugin({ enabled: !!enabled.juice }),
        ],
        {
          components,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [enabled]
  );
};

export interface ResetPluginsEffectProps {
  initialValue: any;
  plugins: any;
}

export function ResetPluginsEffect({
  initialValue,
  plugins,
}: ResetPluginsEffectProps) {
  const editor = usePlateSelectors().editor();
  const setEditor = usePlateActions().editor();
  const setValue = usePlateActions().value();

  useEffect(() => {
    const newEditor = createPlateEditor({ id: editor.id, plugins });
    newEditor.children = initialValue ?? editor.children;
    setValue(initialValue);
    setEditor(newEditor);
  }, [plugins, setEditor, editor.id, editor.children, initialValue, setValue]);

  return null;
}

const RowSelector = (props) => {
  const { selectedLim, setSelectedLim } = props;
  const dataframe_ctx: any = useDataframeContext();

  const button_group =
    "grow px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600";
  const button_selected =
    "bg-gray-200 dark:bg-gray-500 scale-110 z-0 text-blue-600 shadow-inner";
  return (
    <div
      className={"flex flex-row w-full justify-start items-center space-x-2 "}
    >
      <span className={"w-20"}>Rows</span>
      <div
        className={
          "flex flex-row flex-wrap w-full justify-start items-center space-x-2 py-2"
        }
      >
        <div
          className="inline-flex rounded-md shadow-sm py-2 w-full"
          role="group"
        >
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
        <div
          className="inline-flex rounded-md shadow-sm py-2 w-full"
          role="group"
        >
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
  );
};

const OutputColCombobox = (props) => {
  const { selectedOutCol, setSelectedOutCol, schema } = props;
  const [query, setQuery] = useState("");

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

  useEffect(() => {
    //
    setSelectedOutCol(outputColumnNameList[0]);
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

  return (
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
  );
};

export function PlaygroundDemo({ schema }: { id?: ValueId }) {
  const containerRef = useRef(null);
  const dataframe_ctx: any = useDataframeContext();
  const workspace_ctx: any = useWorkspaceContext();
  const { user_id } = useAuthUserContext();
  const notifier: any = useNofificationContext();
  const [selectedLim, setSelectedLim] = useState(10);
  const [selectedOutCol, setSelectedOutCol] = useState({});
  //
  const editor = usePlateEditorState();
  // const [editor, setEditor] = useState<PlateEditor | null>(null);

  console.debug("schema", schema);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(editor);
    console.log(editor.children);

    const url = "/prompt/run/";

    const prompt = editor.children;

    const post_data = {
      prompt: prompt,
      workspace_id: workspace_ctx.current_workspace?._id,
      dataframe_id: dataframe_ctx.current_dataframe?._id,
      initiator_id: user_id,
      prompt_version: "v1.0",
      limit: selectedLim,
      output_column_name: selectedOutCol.name,
      output_column_slug: selectedOutCol.slug,
      id_list: Array.from(dataframe_ctx.selected_ids),
    };

    console.log(post_data);

    return axios_instance
      .post(url, post_data)
      .then((res) => {
        //
      })
      .catch((err) => {
        notifier.error({
          title: "Invalid Prompt",
          message: `Your access code. ${err}`,
        });
      });
  };

  // useEffect(() => {
  //   console.log(JSON.stringify(editor.value));
  //   editor.reset();
  // }, []);

  const column_names = _filter(schema, (s) => !s.system).map((col) => ({
    key: col._id,
    column_id: col._id,
    text: col.slug,
    trigger: "@",
  }));
  console.debug("column_names", column_names);

  const _agents = AGENTS.map((agent) => ({
    ...agent,
    text: agent.activation_command,
    key: agent.activation_command,
    trigger: "/",
  }));

  const placeholder = `
Type / to see available commands.

Type @ to see available columns.

Enter prompt to AI Language Model
    `;

  console.log(_agents);
  console.log(column_names);

  return (
    <Tooltip.Provider>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleFormSubmit}
      >
        <div className="w-full bg-zinc-50 dark:bg-zinc-900 rounded">
          <Plate
            editableProps={{
              ...editableProps,
              placeholder,
              className: clsx(
                editableProps.className,
                "px-8 outline-none",
                "h-48 min-h-[520px] w-[900px] pt-4",
                "pb-8 pt-2"
              ),
            }}
          >
            <MentionCombobox
              trigger="/"
              id={"slash_mention"}
              // pluginKey={"slash_mention"}
              items={_agents}
            />

            <MentionCombobox
              trigger="@"
              id={"at_mention"}
              // pluginKey={"at_mention"}
              items={column_names}
            />
          </Plate>
        </div>

        <div className={"flex flex-col w-full"}>
          <RowSelector
            selectedLim={selectedLim}
            setSelectedLim={setSelectedLim}
          />
          <OutputColCombobox
            selectedOutCol={selectedOutCol}
            setSelectedOutCol={setSelectedOutCol}
            schema={schema}
          />
          <div className="flex flex-row justify-end items-center w-full ">
            <button
              type="submit"
              className="w-12 px-4 my-4 py-2 mb-4 text-white shadow ring-1 rounded"
            >
              <PaperPlaneIcon
                className={clsx("h-6 w-6", "text-gray-800 dark:text-gray-200")}
              />
            </button>
          </div>
        </div>
      </form>
    </Tooltip.Provider>
  );
}

export default function EditorPanel({ id, schema }: { id?: ValueId }) {
  const dataframe_ctx: any = useDataframeContext();

  const initialValue = [
    {
      text: "",
    },
  ];

  console.debug("initialValue", initialValue, dataframe_ctx.prompt);

  const plugins = usePlaygroundPlugins({
    id,
    components: createPlateUI(
      {},
      {
        placeholder: isEnabled("placeholder", id),
      }
    ),
  });

  return (
    <PlateProvider<MyValue> plugins={plugins} normalizeInitialValue>
      {/*<ResetPluginsEffect initialValue={dataframe_ctx?.prompt} plugins={plugins} />*/}
      <PlaygroundDemo id={"mention"} schema={schema} />
    </PlateProvider>
  );

  return (
    <PlateProvider<MyValue>
      initialValue={dataframe_ctx?.prompt}
      plugins={plugins}
      normalizeInitialValue
    >
      {/*<ResetPluginsEffect initialValue={dataframe_ctx?.prompt} plugins={plugins} />*/}
      <PlaygroundDemo id={"mention"} schema={schema} />
    </PlateProvider>
  );
}
