// @ts-nocheck
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import { TypeAnimation } from "react-type-animation";
import { useAuthUserContext } from "@/components/Pages/context/authUser";
const validator = require("email-validator");
import slugify from "slugify";
import { useRouter } from "next/router";
import { map as _map, range as _range } from "lodash";
import { useForm, Controller, useFormState } from "react-hook-form";
import _get from "lodash/get";
import { clsx } from "clsx";
import {
  useInsertInviteListMutation,
  useInsertWorkspaceOneMutation,
  useInsertWorkspaceMembershipOneMutation,
  useUpdateUserPrefNameMutation,
} from "@/generated/graphql";
import axios_instance from "@/lib/services/request";
import { produce } from "immer";
import { Tab } from "@headlessui/react";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { useNofificationContext } from "@/components/Shared/Notification";
import { PersonIcon } from "@radix-ui/react-icons";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const FORM_STATE = {
  selectedIndex: null,
  steps: {
    user: {
      valid: false,
      dirty: false,
      value: "",
      loading: false,
      completed: false,
    },
    company_name: {
      valid: false,
      dirty: false,
      value: "",
      loading: false,
      completed: false,
    },
    workspace_slug: {
      valid: false,
      dirty: false,
      value: "",
      id: "",
      loading: false,
      completed: false,
    },
    team_emails: {
      valid: false,
      dirty: false,
      loading: false,
      completed: false,
      values: [
        {
          valid: false,
          dirty: false,
          value: "",
          loading: false,
        },
        {
          valid: false,
          dirty: false,
          value: "",
          loading: false,
        },
        {
          valid: false,
          dirty: false,
          value: "",
          loading: false,
        },
      ],
    },
  },
};

const FORM_STEPS = [
  {
    label: `user`,
  },
  {
    label: `company_name`,
  },
  {
    label: `workspace_slug`,
  },
  {
    label: `team_emails`,
  },
];

const FormStateContext = createContext({
  form: FORM_STATE,
  setForm: (
    form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE)
  ) => {},
});

function DetailsForm(
  props: React.PropsWithChildren<{
    onNext: () => void;
  }>
) {
  const { form, setForm } = useContext(FormStateContext);

  const { system_user, user_id } = useAuthUserContext();
  const current_user = _get(system_user, "data.user[0]");

  const [show_form, set_show_form] = useState(false);
  const [updateUserPrefNameMutation, updateUserPrefNameMutationResult] =
    useUpdateUserPrefNameMutation();

  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      name:
        current_user?.preferred_name ||
        _.get(form, "steps.user.value.name", ""),
    },
  });

  const { isDirty } = useFormState({
    control,
  });

  const { ref: nameRef, ...nameControl } = register("name", { required: true });

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.user.dirty = isDirty;
      })
    );
  }, [isDirty, setForm]);

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.user.value = current_user?.preferred_name;
      })
    );
  }, [current_user]);

  const submitForm = (value) => {
    setForm(
      produce((formState) => {
        formState.steps.user = {
          value,
          valid: true,
          dirty: false,
          loading: true,
        };
      })
    );

    updateUserPrefNameMutation({
      variables: {
        _id: user_id,
        preferred_name: value["name"],
      },
    }).then((res) => {
      setForm(
        produce((formState) => {
          formState.steps.user = {
            value,
            valid: true,
            dirty: false,
            loading: false,
          };
        })
      );
    });

    props.onNext();
  };

  const onErrors = (errors) => console.log(errors);
  console.log(current_user, system_user, user_id);
  return (
    <div className="flex flex-wrap -mx-3 text-left h-96">
      <div className="w-10/12 max-w-full px-3 mx-auto flex-0">
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            display: "block",
          }}
          sequence={[
            "What's your name?",
            750,
            () => {
              set_show_form(true);
            },
          ]}
          speed={85}
          wrapper="h1"
          cursor={false}
          repeat={0}
        />
        {show_form && (
          <form
            onSubmit={handleSubmit(submitForm, onErrors)}
            className={"mt-10"}
          >
            <div className={"flex flex-col space-y-4"}>
              <Controller
                name="name"
                control={control}
                render={({
                  field: { onChange, onBlur, value, name, ref, ...field },
                }) => (
                  <Input
                    register={register}
                    label="Full Name"
                    key={name}
                    required={true}
                    placeholder="Michael Scott"
                    name={name}
                    autoFocus={true}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    validate={(value) => {
                      return true;
                      if (!value) {
                        return "This field is required";
                      }
                    }}
                  />
                )}
                rules={{
                  max: {
                    value: 10,
                    message: "Maximum number of full is 10",
                  },
                }}
              />
              <div className={"flex flex-row justify-end space-x-4"}>
                <button type={"submit"} className={"bg-teal-200 p-2 rounded"}>
                  Next
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function WorkspaceForm(
  props: React.PropsWithChildren<{
    onNext: () => void;
  }>
) {
  const { form, setForm } = useContext(FormStateContext);

  const { system_user } = useAuthUserContext();
  const current_user = _get(system_user, "data.user[0]");

  const [show_form, set_show_form] = useState(false);
  const [insertWorkspaceOneMutation, insertWorkspaceOneMutationResult] =
    useInsertWorkspaceOneMutation();
  const [
    insertWorkspaceMembershipOneMutation,
    insertWorkspaceMembershipOneMutationResult,
  ] = useInsertWorkspaceMembershipOneMutation();

  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      name: form.steps.company_name.value,
    },
  });

  const { isDirty } = useFormState({
    control,
  });

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.company_name.dirty = isDirty;
      })
    );
  }, [isDirty, setForm]);

  const submitForm = async (value) => {
    setForm(
      produce((formState) => {
        formState.steps.company_name = {
          value: value.name,
          loading: false,
          valid: true,
          dirty: false,
        };
      })
    );

    props.onNext();
  };

  const onErrors = (errors) => console.log(errors);

  return (
    <div className="flex flex-wrap -mx-3 text-left h-96">
      <div className="w-10/12 max-w-full px-3 mx-auto flex-0">
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            display: "block",
          }}
          sequence={[
            `Hi ${
              current_user?.preferred_name
                ? current_user?.preferred_name.split(" ")[0]
                : "there"
            }, where do you work?`,
            () => {
              set_show_form(true);
            },
          ]}
          speed={95}
          wrapper="h1"
          cursor={false}
          repeat={0}
        />
        {show_form && (
          <form
            onSubmit={handleSubmit(submitForm, onErrors)}
            className={"mt-10"}
          >
            <div className={"flex flex-col space-y-4"}>
              <Controller
                name="name"
                control={control}
                render={({
                  field: { onChange, onBlur, value, name, ref, ...field },
                }) => (
                  <Input
                    register={register}
                    label="Company Name"
                    key={name}
                    required={true}
                    placeholder="Dunder Mifflin Paper Company"
                    name={name}
                    autoFocus={true}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    validate={(value) => {
                      //
                      return true;
                      if (!value) {
                        return "This field is required";
                      }
                    }}
                  />
                )}
                rules={{
                  max: {
                    value: 10,
                    message: "Maximum number of full is 10",
                  },
                }}
              />
              <div className={"flex flex-row justify-end space-x-4"}>
                <button type={"submit"} className={"bg-teal-200 p-2 rounded"}>
                  Next
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function WorkspaceSlugForm(
  props: React.PropsWithChildren<{
    onNext: () => void;
  }>
) {
  const { form, setForm } = useContext(FormStateContext);
  const notifier: any = useNofificationContext();

  const { system_user } = useAuthUserContext();
  const current_user = _get(system_user, "data.user[0]");

  const [show_form, set_show_form] = useState(false);
  const [insertWorkspaceOneMutation, insertWorkspaceOneMutationResult] =
    useInsertWorkspaceOneMutation();
  const [
    insertWorkspaceMembershipOneMutation,
    insertWorkspaceMembershipOneMutationResult,
  ] = useInsertWorkspaceMembershipOneMutation();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      slug:
        form.steps.workspace_slug.value ||
        slugify(form.steps.company_name.value, {
          replacement: "_",
          lower: true,
        }),
    },
    resolver: async (data) => {
      try {
        const {
          data: { slug },
        } = await axios_instance.get("/workspace/suggest-unique-slug/", {
          params: { name: data["slug"] },
        });

        setForm(
          produce((form) => {
            form.steps.workspace_slug.value = slug;
          })
        );
        return {
          values: {
            ...data,
          },
          errors: {},
        };
      } catch (e) {
        return {
          values: {},
          errors: {
            name: {
              message: "This name is already taken",
            },
          },
        };
      }
    },
  });

  const { isDirty } = useFormState({
    control,
  });

  useEffect(() => {
    const get_slug = async () => {
      const { data } = await axios_instance.get(
        "/workspace/suggest-unique-slug/",
        { params: { name: form.steps.company_name.value } }
      );

      setForm(
        produce((form) => {
          form.steps.workspace_slug.value = data.slug;
        })
      );
      setValue("slug", data.slug);
    };
    get_slug();
  }, []);

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.workspace_slug.dirty = isDirty;
      })
    );
  }, [isDirty, setForm]);

  const submitForm = async (value) => {
    axios_instance
      .post("/workspace/", {
        name: form.steps.company_name.value,
        slug: value["slug"],
      })
      .then(function (response) {
        const { workspace } = response.data;
        setForm(
          produce((formState) => {
            formState.steps.workspace_slug = {
              ...formState.steps.workspace_slug,
              id: workspace.id_,
              loading: false,
              valid: true,
              dirty: false,
            };
          })
        );
        notifier.success({
          title: `Success creating workspace`,
          message: `Created workspace ${workspace.name} successfully.`,
        });
        props.onNext();
      })
      .catch(function (error) {
        notifier.error({
          title: `Error Creating Workspace`,
          message: `${error}`,
        });
      });
  };

  const onErrors = (errors) => console.error(errors);
  const company_name = form.steps.company_name.value;

  return (
    <div className="flex flex-wrap -mx-3 text-left h-96">
      <div className="w-10/12 max-w-full px-3 mx-auto flex-0">
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            display: "block",
          }}
          sequence={[
            `Let's create a workspace for ${company_name}'s data. Is the suggested workspace ID OK?`,
            () => {
              set_show_form(true);
            },
          ]}
          speed={95}
          wrapper="h1"
          cursor={false}
          repeat={0}
        />
        {show_form && (
          <form
            onSubmit={handleSubmit(submitForm, onErrors)}
            className={"mt-10"}
          >
            <div className={"flex flex-col space-y-4"}>
              <Controller
                name="slug"
                control={control}
                render={({
                  field: { onChange, onBlur, value, name, ref, ...field },
                }) => (
                  <Input
                    register={register}
                    label="Workspace"
                    key={name}
                    required={true}
                    placeholder="dunder-mifflin"
                    name={name}
                    autoFocus={true}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    rules={{
                      required: "First name is required",
                      maxLength: {
                        value: 250,
                        message: "First name must be less than 250",
                      },
                    }}
                  />
                )}
                rules={{
                  max: {
                    value: 10,
                    message: "Maximum number of full is 10",
                  },
                }}
              />
              {errors && errors?.name && <p>{errors.name.message}</p>}
              <div className={"flex flex-row justify-end space-x-4"}>
                <button type={"submit"} className={"bg-teal-200 p-2 rounded"}>
                  Next
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function TeamForm(
  props: React.PropsWithChildren<{
    onNext: () => void;
  }>
) {
  const { form, setForm } = useContext(FormStateContext);
  const workspace_ctx: any = useWorkspaceContext();

  const { system_user } = useAuthUserContext();
  const current_user = _get(system_user, "data.user[0]");

  const [show_form, set_show_form] = useState(false);
  const [insertWorkspaceOneMutation, insertWorkspaceOneMutationResult] =
    useInsertWorkspaceOneMutation();
  const [
    insertWorkspaceMembershipOneMutation,
    insertWorkspaceMembershipOneMutationResult,
  ] = useInsertWorkspaceMembershipOneMutation();

  const { register, handleSubmit, control, errors } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      email_0: "",
      email_1: "",
      email_2: "",
    },
  });

  const router = useRouter();

  const { isDirty } = useFormState({
    control,
  });
  const [insertInviteListMutation, insertInviteListMutationResult] =
    useInsertInviteListMutation();

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.team_emails.values[0].dirty = isDirty;
      })
    );
  }, [isDirty, setForm]);

  const submitForm = async (value) => {
    const invites = _map(value, (email, k) => {
      return {
        workspace_id: form.steps.workspace_slug.id,
        inviter: current_user?._id,
        email: email,
      };
    });

    insertInviteListMutation({ variables: { objects: invites } });

    router.push("/data/frame/-");
  };

  const skipUserInvite = () => {
    router.push("/data/frame/-");
  };

  const onErrors = (errors) => console.log(errors);

  return (
    <div className="flex flex-wrap -mx-3 text-left h-96">
      <div className="w-10/12 max-w-full px-3 mx-auto flex-0">
        <div>
          <div className="flex flex-wrap mt-4 -mx-3">
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",

                display: "block",
              }}
              sequence={[
                `Who else do you work with?\n Invite 3 members to unlock $50 in Execution Credits.`,
                () => {
                  set_show_form(true);
                },
                3000,
                () => {
                  //
                },
              ]}
              speed={95}
              wrapper="h1"
              cursor={false}
              repeat={0}
            />
          </div>
        </div>
        {show_form && (
          <form onSubmit={handleSubmit(submitForm, onErrors)}>
            <div className={"flex flex-col space-y-3"}>
              {_map(_range(3), (i) => (
                <Controller
                  key={`email_${i}`}
                  name={`email_${i}`}
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ref, name, ...field },
                  }) => (
                    <Input
                      autoFocus={i === 0}
                      type="email"
                      required={false}
                      register={register}
                      label={`Email ${i + 1}`}
                      key={name}
                      name={name}
                      onChange={(e) => {
                        onChange(e);
                        return true;
                      }}
                      validate={(v) => {
                        if (offerSkipEmail) return true;
                        return validator.validate(v);
                      }}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                  rules={{
                    max: {
                      value: 10,
                      message: "Maximum number of servings is 10",
                    },
                  }}
                />
              ))}
              <div className={"flex flex-row justify-end space-x-4"}>
                <button type={"submit"} className={"bg-teal-200 p-2 rounded"}>
                  Next
                </button>
                <button onClick={skipUserInvite}>skip</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const UserPanel = () => {
  const { system_user } = useAuthUserContext();
  const { form, setForm } = useContext(FormStateContext);
  const current_user = _get(system_user, "data.user[0]");
  const display_full_name = _get(current_user, "preferred_name");
  const company_name = form.steps.company_name.value;

  return (
    <div
      className={
        "relative h-full  flex flex-row items-center p-4 border-r border-gray-500 shadow dark:bg-gray-800 dark:border-gray-700"
      }
    >
      <div className="-mt-8 bg-fuchsia-50/80 h-96 w-full border border-gray-500 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg mt-16"
          src={current_user?.picture}
          alt={display_full_name}
        />
        {form.steps.user.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {display_full_name ? (
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {display_full_name}
              </h5>
            ) : (
              "---"
            )}
          </div>
        )}
        {form.steps.company_name.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {company_name ? (
              <h6 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {company_name}
              </h6>
            ) : (
              "---"
            )}
          </div>
        )}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {current_user?.email}
        </span>
      </div>
      <div className={"absolute bottom-10 left-4"}>
        <Link
          href="/api/auth/logout"
          className={`bg-violet-500 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          <ArrowLeftOnRectangleIcon
            className="mr-2 h-5 w-5 text-violet-400"
            aria-hidden="true"
          />
          Logout
        </Link>
      </div>
    </div>
  );
};

const IntroPanel = () => {
  const [show_intro, setShowIntro] = useState(false);
  const [show_prompt, setShowPrompt] = useState(false);
  const { form, setForm } = useContext(FormStateContext);

  const setSelectedIndex = useCallback(
    (index: number) => {
      setForm(
        produce((form) => {
          form.selectedIndex = index;
        })
      );
    },
    [setForm]
  );

  return (
    <div className={"h-36"}>
      <div className={"text-2xl"}>
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            height: "45px",
            display: "block",
          }}
          sequence={[
            `Welcome to Reframe`,
            500,
            () => {
              setShowIntro(true);
            },
          ]} // Waits 1s)]}
          speed={85}
          wrapper="h1"
          cursor={false}
          repeat={0}
        />
      </div>
      {show_intro && (
        <div className={"text-md"}>
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "45px",
              display: "block",
            }}
            sequence={[
              `Leaptable is the most efficient way to operate on your spread-sheet like data.`,
              600,
              () => {
                setShowPrompt(true);
              },
            ]} // Waits 1s)]}
            speed={85}
            wrapper="h2"
            cursor={false}
            repeat={0}
          />
        </div>
      )}

      {show_prompt && (
        <div className={"text-md"}>
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "45px",
              display: "block",
            }}
            sequence={[
              `Let's begin by getting to know you.`,
              600,
              () => {
                setSelectedIndex(form.selectedIndex || 0);
              },
            ]} // Waits 1s)]}
            speed={85}
            wrapper="h2"
            cursor={false}
            repeat={0}
          />
        </div>
      )}
    </div>
  );
};

const CreateTaskMultiStepForm = () => {
  const { form, setForm } = useContext(FormStateContext);

  const next = useCallback(() => {
    setForm(
      produce((form) => {
        form.selectedIndex += 1;
      })
    );
  }, [setForm]);

  const prev = useCallback(() => {
    setForm(
      produce((form) => {
        form.selectedIndex -= 1;
      })
    );
  }, [setForm]);

  const setSelectedIndex = useCallback(
    (index: number) => {
      setForm(
        produce((form) => {
          form.selectedIndex = index;
        })
      );
    },
    [setForm]
  );

  const selectedIndex = form.selectedIndex;

  return (
    <div
      className={
        "flex flex-row h-screen bg-white dark:bg-black overflow-y-clip"
      }
    >
      <div className="w-3/12">
        <UserPanel />
      </div>
      <div className={"w-9/12 h-screen "}>
        <div className="w-full max-w-full px-24 text-left h-full flex flex-row items-center">
          <div className={"-mt-52 w-full space-y-8"}>
            <IntroPanel />
            <div className={"w-full -mt-12 h-96"}>
              {selectedIndex !== null && (
                <div className={"rounded-2xl bg-teal-50 w-full h-full"}>
                  <Tab.Group selectedIndex={selectedIndex} vertical>
                    <div className={"flex flex-row w-full"}>
                      <Tab.List
                        className={
                          "flex w-28 flex-col space-x-1 space-y-4 rounded-xl bg-teal-300 p-1 mb-6"
                        }
                      >
                        {FORM_STEPS.map((step, index) => {
                          const canSelectStep = Object.values(form.steps)
                            .slice(0, index)
                            .every((step) => step.valid && !step.dirty);

                          return (
                            <div
                              key={index}
                              className={"flex flex-col items-center space-y-2"}
                            >
                              {index > 0 && (
                                <div
                                  className={clsx(
                                    "w-1 h-5 bg-teal-200",
                                    canSelectStep
                                      ? "bg-slate-900"
                                      : " bg-teal-200"
                                  )}
                                ></div>
                              )}
                              <Tab
                                disabled={!canSelectStep}
                                key={index}
                                className={({ selected }) =>
                                  clsx(
                                    "w-fit rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                    selected
                                      ? "bg-teal-200 shadow scale-110"
                                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                  )
                                }
                                onClick={() => setSelectedIndex(index)}
                              >
                                <div
                                  className={
                                    "flex flex-col items-center w-12 p-1 rounded"
                                  }
                                >
                                  {(() => {
                                    switch (step.label) {
                                      case "user":
                                        return (
                                          <FaUserAstronaut
                                            className={clsx(
                                              "h-8 w-8",
                                              canSelectStep
                                                ? "text-slate-800"
                                                : "text-slate-400"
                                            )}
                                          >
                                            {step.label}
                                          </FaUserAstronaut>
                                        );
                                      case "company_name":
                                        return (
                                          <GoOrganization
                                            className={clsx(
                                              "h-8 w-8",
                                              canSelectStep
                                                ? "text-slate-800"
                                                : "text-slate-400"
                                            )}
                                          >
                                            {step.label}
                                          </GoOrganization>
                                        );
                                      case "workspace_slug":
                                        return (
                                          <AiOutlineAppstore
                                            className={clsx(
                                              "h-8 w-8",
                                              canSelectStep
                                                ? "text-slate-800"
                                                : "text-slate-400"
                                            )}
                                          >
                                            {step.label}
                                          </AiOutlineAppstore>
                                        );
                                      case "team_emails":
                                        return (
                                          <PersonIcon
                                            className={clsx(
                                              "h-8 w-8",
                                              canSelectStep
                                                ? "text-slate-800"
                                                : "text-slate-400"
                                            )}
                                          >
                                            {step.label}
                                          </PersonIcon>
                                        );
                                    }
                                  })()}
                                </div>
                              </Tab>
                            </div>
                          );
                        })}
                      </Tab.List>

                      <Tab.Panels className={"w-full"}>
                        <Tab.Panel>
                          <div className={"flex w-full flex-col space-y-6"}>
                            <DetailsForm onNext={next} />
                          </div>
                        </Tab.Panel>

                        <Tab.Panel>
                          <div className={"flex w-full flex-col space-y-6"}>
                            <WorkspaceForm onNext={next} />
                          </div>
                        </Tab.Panel>
                        <Tab.Panel>
                          <div className={"flex w-full flex-col space-y-6"}>
                            <WorkspaceSlugForm onNext={next} />
                          </div>
                        </Tab.Panel>

                        <Tab.Panel>
                          <div className={"flex w-full flex-col space-y-6"}>
                            <TeamForm onNext={next} />
                          </div>
                        </Tab.Panel>
                      </Tab.Panels>
                    </div>
                  </Tab.Group>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    placeholder,
    autoFocus,
    type,
    register,
    validate,
    required,
  } = props;
  return (
    <div className="flex flex-col py-2">
      <label className="text-xs text-zinc-800 dark:text-zinc-200 text-light">
        {label}
      </label>
      <input
        {...register(name, {
          required: required,
          min: 0,
          max: 25,
        })}
        placeholder={placeholder}
        autoComplete="none"
        key={name}
        type={type}
        autoFocus={autoFocus}
        className="border border-gray-300 rounded-md p-2 mt-1"
        name={name}
        onChange={(e) => {
          onChange(e);
          // e.preventDefault();
        }}
        value={value}
      />
    </div>
  );
};

function CreateTaskMultiStepFormContainer() {
  const [form, setForm] = useState(FORM_STATE);

  return (
    <FormStateContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      <CreateTaskMultiStepForm />
    </FormStateContext.Provider>
  );
}

export default CreateTaskMultiStepFormContainer;
