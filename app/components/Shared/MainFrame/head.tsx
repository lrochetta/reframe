// @ts-nocheck
import React, { useCallback } from "react";
import {
  get as _get,
  find as _find,
  map as _map,
  debounce as _debounce,
} from "lodash";
import { Menu } from "@headlessui/react";
import { flexRender } from "@tanstack/react-table";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";
import { clsx } from "clsx";
import { useUpdateBlueprintMutation } from "@/generated/graphql";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { useDataframeContext } from "@/components/Pages/context/dataframe";
import axios_instance from "@/lib/services/request";
interface ItableProps {
  data: any[];
  schema: any[];
  table: any;
  callback: any;
}

export default (props: ItableProps) => {
  const workspace_ctx: any = useWorkspaceContext();
  const dataframe_ctx: any = useDataframeContext();
  const { schema, data, callback, onSelect } = props;
  const current_dataframe_id = _get(
    workspace_ctx.state,
    "data.app_state[0].meta.dataframe_id",
    "-"
  );
  const _updateDataframeBlueprintMutation = (_col) => {
    console.log("Calling mutation", _col, schema, props?._id, props);
    updateBlueprintMutation({
      variables: {
        _id: _col?._id,
        width: _col?.width,
      },
    });
  };

  const fn = useCallback(
    _debounce(_updateDataframeBlueprintMutation, 5000, {
      leading: false,
      trailing: true,
    }),
    [schema]
  );

  const onSelectAll = (e: any) => {
    const new_set = new Set([]);
    if (e.target.checked) {
      _map(data, (row) => {
        new_set.add(row._id);
      });
    }
    dataframe_ctx.set_selected_ids(new_set);
  };

  const [updateBlueprintMutation, updateBlueprintMutationResult] =
    useUpdateBlueprintMutation();

  const ResizeHandle = ({ header }) => {
    // Get the column from the schema
    const _col = _.find(schema, { _id: header?.column.id });
    // Update the column width if it has changed and the last update was more than 5 seconds ago.
    if (_col.width !== header?.column.getSize()) {
      _col.width = header?.column.getSize();
      console.log("Updating column width", props._up, _col.width);
      fn(_col);
    }

    return (
      <div
        {...{
          onMouseDown: header.getResizeHandler(),
          onTouchStart: header.getResizeHandler(),
          className: clsx(
            header?.column.getIsResizing() ? "bg-green-200" : "",
            "w-1.5 h-full bg-fuchsia cursor-col-resize absolute -right-1 top-0 hover:bg-cyan-200"
          ),
        }}
      ></div>
    );
  };

  const deleteColumn = (e, slug: any) => {
    e.preventDefault();
    axios_instance
      .delete("/dataframe/column/", {
        data: { dataframe_id: current_dataframe_id, slug },
      })
      .then((res) => {
        console.log("Deleted column");
      });
  };

  return (
    <tr
      scope="col"
      key={props.headerGroup.id}
      className="h-10 text-sm sticky top-0 z-20 bg-slate-300"
    >
      <th
        className={
          "h-10 w-16 z-10 bg-slate-300 dark:bg-slate-700 sticky left-0  border border-slate-500"
        }
      >
        <div className={"sticky left-0 flex flex-row px-3 space-x-2"}>
          <input
            type="checkbox"
            className="text-gray-800 text-sm"
            onChange={onSelectAll}
          />
          <div className={"w-5 h-5"} />
        </div>
      </th>

      {props.headerGroup.headers.map((header) => (
        <th
          className={clsx(
            "h-10 relative border border-slate-500",
            _find(schema, { slug: header.id })?.sticky_left
              ? "sticky left-16 bg-slate-300 dark:bg-slate-700 z-20"
              : ""
          )}
          key={header.id}
          scope="col"
          colSpan={header.isPlaceholder ? undefined : header.colSpan}
          style={{
            width: header.getSize(),
          }}
        >
          {header.isPlaceholder ? null : (
            <div
              className={
                "h-full w-full flex flex-row bg-slate-300 dark:bg-slate-700"
              }
            >
              <Menu>
                <Menu.Button
                  className={"h-full w-full text-teal-900 dark:text-teal-50"}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Menu.Button>
                <Menu.Items className="absolute left-5 top-10 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={(e) => deleteColumn(e, header.id)}
                        className={clsx(
                          active ? "bg-violet-500 text-white" : "text-gray-900",
                          "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                        )}
                      >
                        <HiOutlineTrash
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          )}
          <ResizeHandle header={header}></ResizeHandle>
        </th>
      ))}
      <th
        className={
          "w-48 border sticky top-0  border-slate-500 border-r-0 bg-slate-300 dark:bg-slate-700"
        }
      >
        <div className="flex flex-row" onClick={() => callback()}>
          <span className="flex flex-row justify-between">New Prompt</span>
          <MdOutlineKeyboardDoubleArrowRight
            className={"text-fuchsia-500 animate-pulse ml-2"}
            size={25}
          />
        </div>
      </th>
    </tr>
  );
};
