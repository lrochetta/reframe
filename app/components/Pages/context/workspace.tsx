// @ts-nocheck
import React, { createContext, useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  InsertAppStateDocument,
  useGetWorkspaceMembershipStreamSubscription,
  useGetLatestAppStateStreamSubscription,
  useGetWorkspaceMembersStreamSubscription,
} from "@/generated/graphql";
import { useRouter } from "next/router";
import { get as _get, map as _map } from "lodash";
import { uuidv7 } from "@kripod/uuidv7";
import Loader from "@/components/Common/Loader";

const AppContext = createContext({});

export const AppProvider = ({ children, user }: any) => {
  const router = useRouter();
  const { state_id } = router.query;

  /*
   * Fetch the LATEST state for this user's session.
   */
  const __state = useGetLatestAppStateStreamSubscription({
    variables: {
      user_id: user?._id,
      session_id: user?.sid,
    },
  });

  const [createState, createStateResults] = useMutation(
    InsertAppStateDocument,
    { errorPolicy: "all" }
  );

  const __workspace_membership = useGetWorkspaceMembershipStreamSubscription({
    variables: {
      user_id: user?._id,
    },
  });

  // console.log("workspace_membership", __workspace_membership);

  const workspaces = _map(
    _get(__workspace_membership, "data.workspace_membership", []),
    (w) => w.workspace
  );

  const latest_state_id = _get(__state, "data.app_state[0]._id");

  /*
   * If the user has no workspaces, redirect them to the onboarding page.
   */
  useEffect(() => {
    if (
      !__workspace_membership.loading &&
      !__workspace_membership.error &&
      workspaces.length === 0
    ) {
      router.replace("/onboarding/");
    }
  }, [workspaces, __workspace_membership]);

  /*
   * If the user has no state, create a new one with the first workspace selected.
   * Additionally, check for bad app state where the user has a state, but it's not
   * in the list of workspaces they belong to. This can happen if the user started
   * to create a new workspace, but never finished.
   */
  useEffect(() => {
    const default_workspace = _get(
      __workspace_membership,
      "data.workspace_membership[0].workspace"
    );

    const workspace_id = _get(__state, "data.app_state[0].meta.workspace_id");

    // Check if the workspace is contained among the user's workspaces
    const workspace_exists = workspaces.find((w) => w._id === workspace_id);

    if (
      !__state.loading &&
      !(latest_state_id && workspace_exists) &&
      default_workspace
    ) {
      const new_state = {
        meta: {
          workspace_id: default_workspace._id,
        },
        user_id: user?._id,
        session_id: user?.sid,
        _id: uuidv7(),
      };
      createState({
        variables: {
          object: new_state,
        },
      });
    }
  }, [__state, __workspace_membership]);

  /*
   * If the user has a state, but it's not the latest, redirect them to the latest.
   */
  if (latest_state_id && latest_state_id !== state_id) {
    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          state_id: latest_state_id,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  let current_workspace_id = _get(
    __state,
    "data.app_state[0].meta.workspace_id"
  );

  const current_workspace = workspaces.find(
    (w) => w._id === current_workspace_id
  );

  current_workspace_id = workspaces.find((w) => w._id === current_workspace_id);

  const __workspace_member_list = useGetWorkspaceMembersStreamSubscription({
    variables: {
      workspace_id: current_workspace_id,
    },
  });

  const updateState = (new_meta) => {
    const curr_state = _get(__state, "data.app_state[0]");
    const new_state = {
      user_id: user?._id,
      session_id: user?.sid,
      meta: { ...curr_state.meta, ...new_meta },
      _id: uuidv7(),
    };
    createState({
      variables: {
        object: new_state,
      },
    });
  };

  const existing_ctx =
    {} || JSON.parse(localStorage.getItem("workspace")) || {};

  const ctx_value = {
    ...existing_ctx,
    ...{
      state: __state,
      workspace: workspaces,
      current_workspace: current_workspace,
      workspace_membership: __workspace_membership,
      workspace_member_list: __workspace_member_list,
      createState,
      updateState,
      dataframe: {},

      loading: [
        __state.loading,
        __workspace_membership.loading,
        __workspace_member_list.loading,
      ],
      error: [
        __state.error,
        __workspace_membership.error,
        __workspace_member_list.error,
      ],
    },
  };

  // Save to local storage
  useEffect(() => {
    if (ctx_value.loading.some((l) => l)) return;
    if (ctx_value.error.some((e) => e)) return;
    localStorage.setItem("workspace", JSON.stringify(ctx_value));
  }, [ctx_value]);

  if (ctx_value.loading.some((l) => l)) {
    return (
      <div className={"h-screen w-screen"}>
        <div className={"flex items-center justify-center h-screen"}>
          <Loader />
        </div>
      </div>
    );
  }

  if (workspaces.length === 0) {
    console.log(__workspace_membership);
    // router.push("/onboarding/");
  }

  return (
    <AppContext.Provider value={ctx_value}>{children}</AppContext.Provider>
  );
};

export const useWorkspaceContext = () => {
  const appContextData = useContext(AppContext);
  if (!appContextData) {
    throw new Error("useWorkspaceContext must be used within the AppProvider");
  }
  return appContextData;
};
