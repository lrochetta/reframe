// @ts-nocheck
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useVirtual } from "react-virtual";
import {
  createColumnHelper,
  getCoreRowModel,
  ColumnResizeMode,
  useReactTable,
} from "@tanstack/react-table";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { useDataframeContext } from "@/components/Pages/context/dataframe";
import Row from "@/components/Shared/MainFrame/row";
import Head from "@/components/Shared/MainFrame/head";
interface ItableProps {
  data: any[];
  schema: any[];
  callback: any;
  onSelect: any;
}

export default (props: ItableProps) => {
  const workspace_ctx: any = useWorkspaceContext();
  const dataframe_ctx: any = useDataframeContext();
  const { item_callback, prompt_callback } = props;
  // const { data } = props;
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [_data, set_data] = useState([...props.data] || []);
  const [shift_key_pressed, set_shift_key_pressed] = useState(false);
  const current_dataframe_id = _.get(
    workspace_ctx.state,
    "data.app_state[0].meta.dataframe_id",
    "-"
  );
  const selected_dataframe = _.find(
    _.get(dataframe_ctx?.dataframe, "data.dataframe", []),
    {
      _id: current_dataframe_id,
    }
  );

  useEffect(() => {
    set_data(props.data);
  }, [props.data]);

  const schema = selected_dataframe?.blueprint;

  const columnHelper = createColumnHelper<any>();

  const filtered_columns = _.filter(schema, (c) => !c["system"] && c["shown"]);

  const columns = _.map(filtered_columns, (c, i) => {
    return columnHelper.accessor((row) => row[c["slug"]], {
      id: c["_id"],
      header: () => (
        <span className={"text-teal-900 dark:text-teal-50 w-full h-full"}>
          {c["display_name"]}
        </span>
      ),
      blueprint: c,
      size: c["width"],
    });
  });

  const index_col: string = "_id";
  const [columnResizeMode, setColumnResizeMode] =
    React.useState<ColumnResizeMode>("onChange");

  const table = useReactTable({
    data: _data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(), // getPaginationRowModel: getPaginationRowModel(),
    enableMultiRowSelection: true,
    getRowId: (originalRow, index, parent) => {
      return originalRow[index_col];
    },
  });

  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 2500,
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  useEffect(() => {
    //  Set the table sizing based on the schema
    const columnSizing = {};

    _.map(schema, (s) => {
      // console.log(s.name, s.width)
      columnSizing[s.slug] = s.width;
    });

    table.setColumnSizing(columnSizing);
  }, []);

  const checkKeyDown = (e) => {
    if (e.key === "Shift") {
      set_shift_key_pressed(true);
    }
  };

  const checkKeyUp = (e) => {
    if (e.key === "Shift") {
      set_shift_key_pressed(false);
    }
  };

  return (
    <div onKeyDown={(e) => checkKeyDown(e)} onKeyUp={(e) => checkKeyUp(e)}>
      <table
        className={
          "bg-white dark:bg-black px-2 h-[calc(100vh_-_3.7rem)] w-fit border-collapse table-fixed"
        }
      >
        <thead
          className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400`}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <Head
              key={headerGroup.id}
              table={table}
              headerGroup={headerGroup}
              callback={prompt_callback}
              schema={schema}
              _id={headerGroup.id}
            />
          ))}
        </thead>
        {
          <tbody>
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index] as Row<Person>;
              return (
                <Row
                  shift_key_pressed={shift_key_pressed}
                  key={row.id}
                  row={row}
                  data={_data}
                  callback={item_callback}
                  schema={schema}
                />
              );
            })}
          </tbody>
        }
      </table>
    </div>
  );
};
