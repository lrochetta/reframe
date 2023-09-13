// @ts-nocheck
import React from "react";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";
import { Popover } from "@headlessui/react";
import { useOnClickOutside } from "@/components/Shared/component/useOnClickOutSide";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import _get from "lodash/get";
import _find from "lodash/find";
import _truncate from "lodash/truncate";

// import CreateProjectDialog from "@/components/Pages/Project/CreateProjectDialog";
import LeaveProjectDialog from "@/components/Pages/Project/LeaveProjectDialog";
import Dialog from "@/components/Common/Dialog";
import ProjectPanelBody from "@/components/Pages/frame/ProjectPanelBody";

export default (props) => {
  const panel_width = 72;
  const panel_height = 96;
  const ctx: any = useWorkspaceContext();
  const [createProjectDialogIsOpen, setCreateProjectDialogIsOpen] =
    useState(false);
  const [leaveProjectDialogIsOpen, setLeaveProjectDialogIsOpen] =
    useState(false);

  const [isModalOpen, setIsModalOpen] = useState<any>(false);

  const onCloseCreateProjectDialog = () => {
    setCreateProjectDialogIsOpen(false);
  };

  const showLeaveProjectDialog = async (project) => {
    const project_memberships = _get(
      ctx.project_memberships,
      "data.project_membership"
    );
    // console.log("?? project", project, project_memberships);
  };

  const CurrentProject = ({ open }) => {
    const workspace_id_key = _get(
      ctx.state,
      "data.app_state[0].meta.workspace_id"
    );
    const curr_workspace = _find(ctx.workspace, { _id: workspace_id_key });

    const workspace_name = _get(curr_workspace, "name", "");
    return (
      <div
        className={clsx({
          "w-24": true,
          "flex flex-col items-center justify-between space-y-1": true,
          " ": true,
          "py-4 px-1 max-w-sm w-full": true,
        })}
      >
        <Avatar
          name={_get(curr_workspace, "name", "")}
          size="50"
          unstyled={true}
          className={clsx(
            "flex space-x-1 bg-teal-400 col-span-5 h-14 w-14 ring-0 rounded-lg items-center justify-center text-2xl",
            curr_workspace ? "animate-none" : "animate-pulse"
          )}
        />
        <div className={"w-full px-0 flex flex-col items-center"}>
          <span className={"text-xs text-center font-semibold w-full"}>
            {_truncate(workspace_name, { length: 15 })}
          </span>
        </div>

        {/*<div className="grow space-y-6 py-1">*/}
        {/*  <div className="space-y-2">*/}
        {/*    <div*/}
        {/*      className={clsx(*/}
        {/*        "h-5 rounded w-full",*/}
        {/*        curr_workspace ? "" : "bg-slate-200 animate-pulse"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      <span className={"font-bold"}>*/}
        {/*        {_truncate(project_name, { length: 12 })}*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*      className={clsx(*/}
        {/*        "text-xs h-4 rounded w-full",*/}
        {/*        curr_workspace ? "" : "bg-slate-200 animate-pulse"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {_truncate(project_slug, { length: 16 })}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={clsx("h-fit bg-green")}>*/}
        {/*  <ChevronDownIcon*/}
        {/*    className={clsx("w-5 h-5", open ? "rotate-180 transform" : "")}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    );
  };

  const ref: any = useRef();

  useOnClickOutside(ref, () => setIsModalOpen(false));

  useEffect(() => {
    if (_get(ctx.state, "meta.project_id")) {
      console.log("?? ctx.state", ctx.state);
    }
  }, [_get(ctx.state, "meta.project_id")]);

  return (
    <div className={"border-blue-300 w-24 h-24"}>
      <CurrentProject open={open} />
      {/*<Popover className="">*/}
      {/*  {({ open, close }) => (*/}
      {/*    <>*/}
      {/*      <Popover.Button>*/}
      {/*        <CurrentProject open={open} />*/}
      {/*      </Popover.Button>*/}

      {/*      <Popover.Panel*/}
      {/*        className={clsx(*/}
      {/*          "absolute z-20 rounded-b-xl bg-white dark:bg-zinc-900 shadow-2xl mt-1 overflow-x-hidden",*/}
      {/*          `w-${panel_width}`,*/}
      {/*          `h-${panel_height}`*/}
      {/*        )}*/}
      {/*      >*/}
      {/*        <ProjectPanelBody*/}
      {/*          setCreateProjectDialogIsOpen={setCreateProjectDialogIsOpen}*/}
      {/*          setLeaveProjectDialogIsOpen={setLeaveProjectDialogIsOpen}*/}
      {/*          panel_width={panel_width}*/}
      {/*          panel_height={panel_height}*/}
      {/*        />*/}
      {/*      </Popover.Panel>*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</Popover>*/}
      {(() => {
        if (createProjectDialogIsOpen) {
          return (
            <Dialog
              className={"bg-zinc-50 dark:bg-zinc-900"}
              isOpen={true}
              closeModal={onCloseCreateProjectDialog}
              title={"Create Project 🪄"}
            >
              <CreateProjectDialog closeModal={onCloseCreateProjectDialog} />
            </Dialog>
          );
        }

        if (leaveProjectDialogIsOpen) {
          return (
            <Dialog
              className={"bg-zinc-50 dark:bg-zinc-900"}
              isOpen={true}
              closeModal={onCloseCreateProjectDialog}
              title={"Create Project 🪄"}
            >
              <LeaveProjectDialog closeModal={onCloseCreateProjectDialog} />
            </Dialog>
          );
        }
      })()}
    </div>
  );
};
