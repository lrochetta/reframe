// @ts-nocheck
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  useGetHistoryStreamSubscription,
  useGetDataframeStreamSubscription,
} from "@/generated/graphql";
import { get as _get, map as _map } from "lodash";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import Loader from "@/components/Common/Loader";

const Context = createContext({});

export const DataframeProvider = ({ children }: any) => {
  const workspace_ctx: any = useWorkspaceContext();
  const [last_selected_row_id, set_last_selected_row_id] = useState(null);
  const [selected_ids, set_selected_ids] = useState(new Set([]));
  const [prompt, set_prompt] = useState([{ text: "AAA" }]);
  const current_workspace_id = _get(
    workspace_ctx?.state,
    "data.app_state[0].meta.workspace_id"
  );

  const __dataframe = useGetDataframeStreamSubscription({
    variables: {
      workspace_id: current_workspace_id,
    },
  });

  const __history = useGetHistoryStreamSubscription({
    variables: {
      workspace_id: current_workspace_id,
    },
  });

  const current_dataframe_id = _get(
    workspace_ctx?.state,
    "data.app_state[0].meta.dataframe_id"
  );

  const current_dataframe = _get(__dataframe, "data.dataframe", []).find(
    (d) => d._id === current_dataframe_id
  );

  /*
   * Update the state with the first dataframe_id if the no dataframe_id is set
   * and the workspace has dataframes.
   */
  useEffect(() => {
    if (!__dataframe.loading && !__dataframe.error && !current_dataframe_id) {
      workspace_ctx.updateState({
        ..._get(workspace_ctx?.state, "data.app_state[0].meta", {}),
        dataframe_id: _get(__dataframe, "data.dataframe[0]._id"),
      });
    }
  }, [current_workspace_id, __dataframe.loading, __dataframe.error]);

  if (__dataframe.loading)
    return (
      <div className={"h-screen w-screen"}>
        <div className={"flex items-center justify-center h-screen"}>
          <Loader />
        </div>
      </div>
    );

  return (
    <Context.Provider
      value={{
        dataframe: __dataframe,
        current_dataframe,

        history: __history,
        selected_ids,
        set_selected_ids,
        last_selected_row_id,
        set_last_selected_row_id,
        prompt,
        set_prompt,

        loading: [__dataframe.loading],
        error: [__dataframe.error],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useDataframeContext = () => {
  const appContextData = useContext(Context);
  if (!appContextData) {
    throw new Error("useWorkspaceContext must be used within the AppProvider");
  }
  return appContextData;
};
