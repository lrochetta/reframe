// @ts-nocheck
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import React, { useState } from "react";
import _get from "lodash/get";
import _uniqBy from "lodash/uniqBy";
import _find from "lodash/find";
import { Popover } from "@headlessui/react";
import { useMutation } from "@apollo/client";
import {
  FetchLatestAppStateDocument,
  InsertAppStateDocument,
} from "@/generated/graphql";
import { clsx } from "clsx";
import { RadioGroup, Transition } from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  ArrowLeftCircleIcon,
  ArrowPathIcon,
  ChevronDoubleRightIcon,
  SquaresPlusIcon,
  TrashIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { uuidv7 } from "@kripod/uuidv7";
import { useUser } from "@auth0/nextjs-auth0/client";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectMenu({ projects, selected, setSelected }) {
  // console.log("ProjectMenu", projects, selected, setSelected);

  return (
    <div
      className={clsx(
        "w-full px-4 h-96 py-12 bg-white dark:bg-black overflow-scroll"
      )}
    >
      {/*<div className="mx-auto w-full h-48 max-w-md">*/}
      <RadioGroup className={""} value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-2 flex flex-col">
          {projects.map((project) => (
            <div className={"w-96"}>
              {project && (
                <Popover.Button key={project.id}>
                  <RadioGroup.Option
                    value={project}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                          : ""
                      }
                  ${
                    checked
                      ? "bg-opacity-75 text-black bg-gray-400 dark:text-white"
                      : "text-black dark:text-white bg-gray-200 dark:bg-gray-900"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${
                                  checked
                                    ? "text-white"
                                    : "text-gray-700 dark:text-gray-100"
                                }`}
                              >
                                {project.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked
                                    ? "text-sky-100"
                                    : "text-gray-600 text-gray-200"
                                }`}
                              >
                                <span>{project.slug}</span>
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked && (
                            <div className="shrink-0 text-white">
                              <CheckIcon className="h-6 w-6" />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                </Popover.Button>
              )}
            </div>
          ))}
        </div>
      </RadioGroup>
      {/*</div>*/}
    </div>
  );
}

export default (props) => {
  const ctx: any = useWorkspaceContext();
  const [isShowing, setIsShowing] = useState(true);
  const project_id_key = _get(ctx.state, "data.app_state[0].meta.project_id");
  const current_project_membership = _find(
    _get(ctx.project_memberships, "data.project_membership"),
    { project_id: project_id_key }
  );
  const projs = _get(ctx, "projects", []);
  const { user, error, isLoading } = useUser();

  // console.log(projs, "projs");

  const user_projects = _uniqBy(projs, "id");

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

  const handleCreateProjectModal = (e: any) => {
    e.preventDefault();
    props.setCreateProjectDialogIsOpen(true);
  };

  const handleLeaveProjectModal = (e: any) => {
    e.preventDefault();
    props.setLeaveProjectDialogIsOpen(true);
  };

  const current_project = _find(user_projects, { id: project_id_key });

  const buttonClsx = clsx(
    "group w-full  hover:bg-green-50 flex flex-row items-center justify-between py-4 w-full space-x-6 text-sm text-left"
  );

  const onClickProject = async (project) => {
    createState({
      variables: {
        object: {
          meta: {
            ..._get(ctx.state, "data.app_state[0].meta", {}),
            project_id: project.id,
          },
          user_id: _get(ctx.user, "data.user[0].id"),
          session_id: user.sid,
          id: uuidv7(),
        },
      },
    });
    // setIsModalOpen(false);
  };

  return (
    <div className={clsx(" text-left w-72 bg-white")}>
      <div
        className={clsx(
          " absolute w-full px-2 divide-y divide-gray-200 dark:divide-gray-700",
          "h-full flex flex-col justify-around",
          isShowing
            ? "transform translate-x-0 duration-500"
            : "transform -translate-x-72 duration-500"
        )}
      >
        <div className="h-16 py-2 px-4 w-full">
          <button
            onClick={() => setIsShowing(!isShowing)}
            className={buttonClsx}
          >
            <ArrowPathIcon className={clsx("h-5 w-5")} />

            <span className={"grow"}>Switch Project</span>
            <ChevronDoubleRightIcon
              className={clsx("h-4 w-4 invisible group-hover:visible")}
            />
          </button>
        </div>
        <div className="grow py-3 space-y-8 px-4 w-full flex flex-col">
          <Popover.Button>
            <Link
              href={`/project/${_get(
                ctx.state,
                "data.app_state[0].id",
                {}
              )}/details`}
              className={buttonClsx}
            >
              <AdjustmentsHorizontalIcon className={clsx("h-5 w-5")} />

              <span className={"grow"}>Settings & Details</span>
              <ChevronDoubleRightIcon
                className={clsx("h-4 w-4 invisible group-hover:visible")}
              />
            </Link>
          </Popover.Button>
          <Popover.Button>
            <Link
              href={`/project/${ctx?.state?.id}/team`}
              className={buttonClsx}
            >
              <UserGroupIcon className={clsx("h-5 w-5")} />

              <span className={"grow"}>Team</span>
              <ChevronDoubleRightIcon
                className={clsx("h-4 w-4 invisible group-hover:visible")}
              />
            </Link>
          </Popover.Button>
        </div>
        {/*<div className="grow flex flex-col space-y-8 justify-around  py-2 px-4 w-full flex flex-col">*/}
        {/*  <button onClick={handleCreateProjectModal} className={buttonClsx}>*/}
        {/*    <SquaresPlusIcon className={clsx("h-5 w-5")} />*/}

        {/*    <span className={"grow"}>Create</span>*/}
        {/*    <ChevronDoubleRightIcon*/}
        {/*      className={clsx("h-4 w-4 invisible group-hover:visible")}*/}
        {/*    />*/}
        {/*  </button>*/}
        {/*  <button onClick={handleLeaveProjectModal} className={buttonClsx}>*/}
        {/*    <TrashIcon className={clsx("h-4 w-4")} />*/}

        {/*    <span className={"grow"}>*/}
        {/*      {current_project_membership?.role !== "OWNER"*/}
        {/*        ? "Delete"*/}
        {/*        : "Leave"}*/}
        {/*    </span>*/}
        {/*    <ChevronDoubleRightIcon*/}
        {/*      className={clsx("h-4 w-4 invisible group-hover:visible")}*/}
        {/*    />*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>

      <div
        className={clsx(
          "absolute w-full px-2 divide-y divide-gray-200 dark:divide-gray-700",
          "h-full flex flex-col justify-around",
          !isShowing
            ? "transform translate-x-0 duration-500"
            : "transform translate-x-72 duration-500"
        )}
      >
        <div className="h-16 py-2 px-4 w-full">
          <button
            onClick={() => setIsShowing(!isShowing)}
            className={buttonClsx}
          >
            <ArrowLeftCircleIcon className={clsx("h-5 w-5")} />

            <span className={"grow"}>Back</span>
          </button>
        </div>
        {ctx.projects && (
          <ProjectMenu
            projects={user_projects}
            selected={current_project}
            setSelected={onClickProject}
          />
        )}
      </div>
    </div>
  );
};
