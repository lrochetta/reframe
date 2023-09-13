// @ts-nocheck
import React, { useState, useEffect, Fragment } from "react";
import { flexRender } from "@tanstack/react-table";
import { BiExpandAlt } from "react-icons/bi";
import dynamic from "next/dynamic";
import { clsx } from "clsx";
import { useDataframeContext } from "@/components/Pages/context/dataframe";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });
import _ from "lodash";

const Cell = (props: any) => {
  const { cell_value } = props;
  return (
    <div>
      {cell_value?.status === "ERROR" && (
        <div className={"bg-red-200 dark:bg-red-900"}>{cell_value.error}</div>
      )}
      {cell_value?.status === "SUCCESS" && (
        <div className={"bg-emerald-50 dark:bg-emerald-900"}>
          {cell_value.result}
        </div>
      )}
    </div>
  );
};

interface ItableProps {
  data: any[];
  schema: any[];
  callback: any;
}

export default (props: ItableProps) => {
  const dataframe_ctx: any = useDataframeContext();
  const { callback, shift_key_pressed, data } = props;
  const [row, set_row] = useState(props.row);
  const [row_is_selected, set_row_is_selected] = useState(
    dataframe_ctx.selected_ids.has(row["id"])
  );

  const onSelectRow = (checked: boolean, _row: any) => {
    const _id = row["id"];
    const new_selectected_set = new Set(dataframe_ctx.selected_ids);
    console.log(
      "onSelectRow",
      checked,
      _row,
      _id,
      dataframe_ctx.selected_ids,
      shift_key_pressed
    );

    /*
     * If shift key is pressed, select all rows between the last selected row
     * and the current row.
     */
    if (shift_key_pressed) {
      let block_index = [];
      /*
       * Find the index of the last selected row and the current row.
       */
      _.map(data, (r, idx) => {
        const at_marker = _.includes(
          [dataframe_ctx.last_selected_row_id, _row._id],
          r._id
        );
        if (at_marker) {
          block_index.push(idx);
        }
      });

      /*
       * Select all rows in the highlighted range by slicing the data array.
       */
      const selected_slice = data.slice(block_index[0], block_index[1] + 1);

      console.log("block_index", block_index, selected_slice);
      _.map(selected_slice, (r) => {
        /*
         * The shift select action is a toggle, so if the row is already selected,
         * deselect all rows in the range and vice versa.
         */
        if (checked) {
          new_selectected_set.add(r._id);
        } else {
          new_selectected_set.delete(r._id);
        }
      });
    }

    new_selectected_set.delete(_id);
    if (checked) {
      new_selectected_set.add(_id);
    }
    dataframe_ctx.set_last_selected_row_id(_id);
    set_row_is_selected(checked);
    dataframe_ctx.set_selected_ids(new_selectected_set);
  };

  useEffect(() => {
    set_row(props.row);
  }, [props.row]);

  useEffect(() => {
    set_row_is_selected(dataframe_ctx.selected_ids.has(row["id"]));
  }, [dataframe_ctx.selected_ids]);

  const is_csr = typeof window !== "undefined";

  return (
    <tr
      key={row.id}
      className={clsx(
        "z-20 bg-white dark:bg-black",
        row_is_selected ? "bg-gray-200 dark:bg-zinc-900" : ""
      )}
    >
      <td
        key={"checkbox"}
        className={clsx(
          "text-center sticky left-0 w-16 h-full group cursor-pointer border-r border-gray-200 dark:border-gray-800",
          row_is_selected
            ? "bg-gray-200 dark:bg-zinc-900"
            : " bg-white dark:bg-black"
        )}
      >
        <div className={"flex flex-row px-3 space-x-2"}>
          <input
            type="checkbox"
            checked={row_is_selected}
            className="text-gray-800 text-sm"
            onChange={(e) => onSelectRow(e.target.checked, row.original)}
          />
          <BiExpandAlt
            className={"hidden group-hover:block text-gray-600 text-sm w-5 h-5"}
            onClick={() => callback(row.original)}
          />
        </div>
      </td>

      {row.getVisibleCells().map((cell) => {
        const bp = _.find(props.schema, { _id: cell?.column?.id });
        // console.log(props.schema, cell, bp, cell.getContext())
        return (
          <td
            style={{
              width: cell.column.getSize(),
            }}
            className={clsx(
              "font-normal leading-normal text-sm border border-slate-600",
              bp?.sticky_left
                ? "sticky left-16 z-10 bg-white dark:bg-black"
                : "",
              bp.wrap
                ? ""
                : "overflow-hidden whitespace-nowrap overflow-ellipsis"
            )}
            key={`${cell.id}-${row.id}`}
          >
            <div className={"group"}>
              {(() => {
                const cell_value = cell.getValue();
                // console.log(bp?.display_format)
                if (bp?.display_format === "json") {
                  return (
                    <div className={"px-3 py-1"}>
                      <DynamicReactJson
                        src={cell.value}
                        theme={is_csr ? "summerfruit" : "summerfruit:inverted"}
                        displayDataTypes={false}
                        displayObjectSize={false}
                        enableClipboard={false}
                        name={null}
                        style={{ fontSize: "0.75rem" }}
                      />
                    </div>
                  );
                } else if (bp?.display_format === "url") {
                  return (
                    <div>
                      <a
                        className={
                          "font-medium text-blue-600 dark:text-blue-200 hover:underline"
                        }
                        href={cell_value}
                        target={"_blank"}
                      >
                        {/*                  <Tooltip*/}
                        {/*                    label={*/}
                        {/*                      <span className="flex items-center bg-slate-700 text-white text-sm font-medium py-1 px-2 rounded-sm shadow-md">*/}
                        {/*  <iframe src={cell_value} title="W3Schools Free Online Web Tutorials"></iframe>*/}

                        {/*</span>*/}
                        {/*                    }*/}
                        {/*                  >*/}
                        {/*                    <span>{cell_value}</span>*/}
                        {/*                  </Tooltip>*/}
                        <span>{cell_value}</span>
                      </a>
                    </div>
                  );
                }
                if (bp.ai_gen) {
                  return (
                    <div>
                      {cell_value && !_.isEmpty(cell_value) && (
                        <Cell cell_value={cell_value} />
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div className={"px-3 py-1"}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  );
                }
              })()}
            </div>
          </td>
        );
      })}
      <td className={"w-48 border border-slate-600"}></td>
    </tr>
  );
};
