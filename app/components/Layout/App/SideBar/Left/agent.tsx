// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Dialog } from "@headlessui/react";
import { get as _get } from "lodash";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { clsx } from "clsx";
import { useMutation } from "@apollo/client";
import {
  FetchLatestAppStateDocument,
  InsertAppStateDocument,
} from "@/generated/graphql";
import { uuidv7 } from "@kripod/uuidv7";
import { AiOutlinePlus } from "react-icons/ai";

function FlowApp({ flow }) {
  const ctx = useWorkspaceContext();
  const { user, isLoading: user_loading, ...rest } = useUser();

  function switchToFlow(flowId) {
    createState({
      variables: {
        object: {
          meta: {
            ..._get(ctx.state, "data.app_state[0].meta", {}),
            flow_id: flowId,
          },
          user_id: _get(ctx.user, "data.user[0].id"),
          session_id: user.sid,
          id: uuidv7(),
        },
      },
    });

    // console.log("switchToFlow", flowId);
  }

  const [createState, { ...create_state_gql }] = useMutation(
    InsertAppStateDocument,
    {
      errorPolicy: "all",
      refetchQueries: [
        {
          query: FetchLatestAppStateDocument,
          variables: { user_id: _get(ctx.user, "data.user[0].id") },
        }, // DocumentNode object parsed with gql
      ],
    }
  );

  return (
    <div
      key={flow.id}
      className="flex flex-col h-36 w-full py-3 px-2 space-y-2 rounded bg-white dark:bg-black"
      onClick={(e) => switchToFlow(flow.id)}
    >
      <span className={"font-semibold text-sm"}>{flow.name}</span>
      <span className={"font-semibold text-sm"}>{flow.id}</span>
      <span className={"font-semibold text-sm"}>{flow.visibility}</span>
      <span className={"font-semibold text-sm"}>{flow.created_at}</span>
    </div>
  );
}

export default (props) => {
  const [isModalOpen, setIsModalOpen] = useState<any>(false);

  useEffect(() => {
    // console.log("HistoryTab", props);
  }, []);

  const datactx: any = useWorkspaceContext();
  const flows = _get(datactx, "flows", []);

  return (
    <div
      className={
        "flex flex-col h-[calc(100vh_-_6.5rem)] overflow-y-scroll space-y-2 px-3 pt-5"
      }
    >
      <Dialog
        open={isModalOpen}
        className={
          "absolute dark:bg-sky-900 h-screen inset-y-0 right-0 w-full h-full max-w-3xl transform overflow-hidden rounded bg-white -dark:bg-black p-1 text-left align-middle shadow-xl transition-all"
        }
        onClose={() => setIsModalOpen(false)}
      >
        <Dialog.Panel className={"bg-zinc-50 overflow-y-scroll   m-3"}>
          <span className={"p-8"}>
            Creating new agents is only available in the enterprise plan. Please
            contact us at <a href="mailto:sup@leaptable.us">sup@leaptable.us</a>
          </span>
          <p>
            Alternatively, you can create your own hosted agents using our open
            source{" "}
            <a target={"_blank"} href="https://github.com/peterwnjenga/aigent">
              Reframe
            </a>
          </p>
          <iframe
            src="http://100.101.28.98:8080/"
            className={"w-full h-screen"}
          />
        </Dialog.Panel>
      </Dialog>
      {flows.loading ? <div>Loading...</div> : null}
      <div className="flex flex-row w-full  space-x-4 h-12 px-2">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={clsx(
            "w-20 flex items-center bg-sky-200 dark:bg-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900",
            "text-gray-800 dark:text-gray-200 font-semibold py-2 px-1 border border-gray-400 rounded shadow",
            "font-medium rounded-md text-sm px-1 py-1.5 text-center",
            "w-full flex items-center cursor-pointer"
          )}
        >
          <AiOutlinePlus className="h-4 w-4 text-zinc-800 dark:text-zinc-200" />
          <span className={"ml-2"}>New</span>
        </button>
      </div>
      {/*<div className="flex pr-4">*/}
      {/*  <input*/}
      {/*    checked={false}*/}
      {/*    type="checkbox"*/}
      {/*    name="docs"*/}
      {/*    className="w-5 h-5 rounded"*/}
      {/*    onChange={handleFacetChange}*/}
      {/*  />*/}
      {/*  <label className="doc-type-container text-gray-900 px-2">Docs</label>*/}
      {/*</div>*/}
      {_.get(flows, "data.flow", []).map((flow) => (
        <FlowApp key={flow.id} flow={flow} />
      ))}
    </div>
  );
};
