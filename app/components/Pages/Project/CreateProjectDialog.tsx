// @ts-nocheck
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { RadioGroup, Transition, Popover } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Loader from "@/components/Common/Loader";
import { useForm, useFormState, Controller } from "react-hook-form";
import { uuidv7 } from "@kripod/uuidv7";
import { useRouter } from "next/router";
import {
  FetchLatestAppStateDocument,
  FetchProjectMembershipWithSampleDocument,
  InsertProjectAndProjectMembershipDocument,
} from "@/generated/graphql";
import { FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useNofificationContext } from "@/components/Shared/Notification";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import _get from "lodash/get";
import { useAuthUserContext } from "@/components/Pages/context/authUser";
import axios from "axios";

const plans = [
  {
    name: "Hobbyist (Free)",
    records: "10k Max",
    operations: "1k Max",
    users: "3 Max",
    free: true,
  },
  {
    name: "Business/Enterprise",
    records: "Unlimited",
    operations: "Unlimited",
    users: "Unlimited",
    free: false,
  },
];

const Home = (props) => {
  const [selectedProjectPlan, setSelectedProjectPlan] = useState(plans[0]);
  const [suggestedProjectSlug, setProjectSuggestedSlug] = useState();
  const [_projects, setProjects] = useState([]);
  const ctx: any = useWorkspaceContext();
  const { user }: any = useAuthUserContext();
  const notifier: any = useNofificationContext();
  const router = useRouter();
  const { user: auth0User } = useUser();
  const current_user_id = _get(user, "data.user[0]._id");

  const [addProj, { ...create_project_gql }] = useMutation(
    InsertProjectAndProjectMembershipDocument,
    {
      onCompleted: (data) => {
        // console.log("data", data);
        if (data?.insert_project_one) {
          const new_state_id = _get(data, "insert_app_state_one.id");
          // console.log("new_state_id", new_state_id, data, user);
          notifier.success({
            title: "Create Project",
            message: `Project ${data?.insert_project_one.name} created successfully`,
          });
          // router.push(`/data/frame/${new_state_id}`);
          props.closeModal();
        }
      },
      onError: (err) => {
        // console.log("err", err);
        notifier.error({
          title: "Failed to create project",
          message: `${err.message}`,
        });
      },
      refetchQueries: [
        {
          query: FetchLatestAppStateDocument,
          variables: { user_id: current_user_id },
        },
      ],
    }
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, ...restOfForm },
  } = useForm({
    defaultValues: {},
  });
  const { dirtyFields, ...restForm } = useFormState({
    control,
  });
  const onSubmit = (data) => {
    const proj_id = uuidv7();
    const current_state_meta = _get(ctx.state, "data.app_state[0].meta", {});
    const slug = dirtyFields?.project_slug
      ? data?.project_slug
      : suggestedProjectSlug;

    const variables = {
      project: {
        id: proj_id,
        name: data?.project_name,
        slug: slug,
      },
      project_membership: {
        project_id: proj_id,
        user_id: current_user_id,
        role: "OWNER",
      },
      app_state: {
        meta: { ...current_state_meta, project_id: proj_id, dataset_id: null },
        user_id: current_user_id,
        session_id: auth0User.sid,
      },
    };
    console.log(
      "current_state_meta variables",
      variables,
      user,
      current_state_meta
    );
    addProj({
      variables,
    });

    axios.post(
      "/api/onboarding",
      {
        slug: slug,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  console.log("user", user, current_user_id);

  const {
    loading: project_loading,
    error,
    data: project_data,
  } = useQuery(FetchProjectMembershipWithSampleDocument, {
    variables: { user_id: current_user_id },
  });

  if (project_loading) {
    return <Loader />;
  }

  const Input = (props) => {
    const { label, name, value, onChange } = props;
    return (
      <div className="flex flex-col py-2">
        <label className="text-xs text-zinc-800 dark:text-zinc-200 text-light">
          {label}
        </label>
        <input
          autoComplete="none"
          key="project_name"
          className="border border-gray-300 rounded-md p-2 mt-1"
          name={name}
          onChange={(e) => {
            onChange(e);
          }}
          value={value}
        />
      </div>
    );
  };

  const projects = project_data?.project_membership?.map((p: any) => p.project);

  if (!_projects) {
    setProjects(projects);
  }

  return (
    <>
      <div className="w-full">
        <form
          className="w-full bg-white px-8 pt-4 bg-gray-100 dark:bg-zinc-900"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <Controller
              control={control}
              name="project_name"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className="flex flex-col  py-2">
                  <label className="text-xs text-zinc-800 dark:text-zinc-200 text-light">
                    Project Name
                  </label>
                  <input
                    autoComplete="none"
                    key="project_name"
                    className="border border-gray-300 rounded-md p-2 mt-1"
                    name="project_name"
                    onChange={(e) => {
                      // Ensure slug is alphanumeric, lowercase, and hyphenated
                      const slug = e.target.value
                        .toLowerCase()
                        .replace(/[\W_]+/g, "-");

                      // If the user has not changed the slug, automatically set it based on project name
                      if (!dirtyFields?.project_slug) {
                        setProjectSuggestedSlug(slug);
                      }
                      onChange(e);
                    }}
                    value={value}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="project_slug"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input
                  label="Project ID"
                  key="project_slug"
                  name="project_slug"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={
                    dirtyFields?.project_slug ? value : suggestedProjectSlug
                  }
                />
              )}
            />
          </div>
          <div className="w-full px-4 pt-6">
            <div className="mx-auto w-full max-w-md">
              <RadioGroup
                value={selectedProjectPlan}
                onChange={setSelectedProjectPlan}
                defaultValue={plans[0]}
              >
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                <div className="space-y-2">
                  {plans.map((plan) => (
                    <RadioGroup.Option
                      key={plan.name}
                      value={plan}
                      className={({ active, checked }) => `${
                        active
                          ? "ui-active:bg-blue-500 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                          : ""
                      }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`}
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? "text-white" : "text-gray-900"
                                  }`}
                                >
                                  {plan.name}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className={`inline p-0 ${
                                    checked ? "text-sky-100" : "text-gray-500"
                                  }`}
                                >
                                  <p className={"p-0"}>
                                    Records: {plan.records}
                                  </p>
                                  <p className={"p-0"}>
                                    Operations: {plan.operations}
                                  </p>
                                  <p className={"p-0"}>Users: {plan.users}</p>
                                </RadioGroup.Description>
                              </div>
                              {active}
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <CheckCircleIcon className="h-6 w-6" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
          <div
            className={"pt-2 h-16 flex flex-row justify-center items-center"}
          >
            {create_project_gql.loading && <Loader />}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                props.closeModal();
              }}
            >
              Cancel
            </button>
            {selectedProjectPlan?.free ? (
              <button
                className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={!selectedProjectPlan}
              >
                Create
              </button>
            ) : (
              <a
                href="mailto:team@leaptable.us?subject=Leaptable » Enterprise Project Plan"
                className="gradient-button bg-white dark:bg-black gradient-button-variant-1 bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPaperPlane size={30} />{" "}
                <span className="mr-2 ml-2">Get In Touch</span>
              </a>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
