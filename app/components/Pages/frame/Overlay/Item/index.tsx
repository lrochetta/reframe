// @ts-nocheck
import React, { useState, Fragment, useEffect } from "react";
import {
  get as _get,
  find as _find,
  map as _map,
  uniqBy as _uniqBy,
} from "lodash";
import dynamic from "next/dynamic";
import { SiCodereview } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import {
  AdjustmentsHorizontalIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/20/solid";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { clsx } from "clsx";

function ProjectMenu({ projects, selected, setVisible }) {
  console.log("ProjectMenu", projects, selected, setVisible);
  const buttonClsx = clsx(
    "group w-full  hover:bg-green-50 items-center justify-between overflow-clip py-4 w-2/5 space-x-6 text-sm text-left"
  );

  return (
    <div
      className={clsx(
        "w-full px-4 h-96 py-12 bg-orange-100 dark:bg-black overflow-scroll"
      )}
    >
      <button onClick={() => setVisible(true)} className={buttonClsx}>
        <ArrowLeftCircleIcon className={clsx("h-5 w-5")} />

        <span className={"grow"}>Back</span>
      </button>
      <div>Cell Logs Go Here</div>
    </div>
  );
}

export default (props) => {
  const { item, schema } = props;

  const workspace_ctx: any = useWorkspaceContext();
  const [isShowing, setIsShowing] = useState(true);
  const [initial, setInitial] = useState(0);
  const project_id_key = _get(
    workspace_ctx.state,
    "data.app_state[0].meta.project_id"
  );
  const current_project_membership = _find(
    _get(workspace_ctx.project_memberships, "data.project_membership"),
    { project_id: project_id_key }
  );
  const projs = _get(workspace_ctx, "projects", []);

  console.log(projs, "projs");

  const user_projects = _uniqBy(projs, "id");

  const [isVisible, setVisible] = useState(true);

  const current_project = _find(user_projects, { id: project_id_key });

  const buttonClsx = clsx(
    "group w-full  hover:bg-green-50 items-center justify-between overflow-clip py-4 w-2/5 space-x-6 text-sm text-left"
  );

  const onClickProject = async (project) => {
    console.log("?? project", project);
  };

  useEffect(() => {
    setInitial(600);
  }, []);

  return (
    <div className={"h-fit relative overflow-x-clip p-2 w-full"}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="w-full"
            initial={{ x: -initial, opacity: 1 }}
            animate={{ x: 0 }}
            exit={{ x: -initial, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.7,
              x: { duration: 0.7 },
            }}
          >
            <div className={"h-fit text-sm flex flex-col"}>
              {_map(props.schema, (_schema, idx) => (
                <div className="flex flex-row justify-between space-x-2 py-2">
                  <div
                    className={
                      "w-28 hover:bg-fuchsia-100 flex-none overflow-hidden whitespace-nowrap overflow-ellipsis"
                    }
                  >
                    <span>{_schema?.slug}</span>
                  </div>
                  <div className={"grow  overflow-hidden hover:bg-fuchsia-100"}>
                    {typeof item[_schema?.slug] === "object" ? (
                      <DynamicReactJson
                        src={item[_schema?.slug]}
                        theme={"summerfruit:inverted"}
                        displayDataTypes={false}
                        displayObjectSize={false}
                        enableClipboard={false}
                        name={null}
                        style={{ fontSize: "0.75rem" }}
                      />
                    ) : (
                      <div>
                        {" "}
                        {item[_schema?.slug] || (
                          <span className={"text-slate-300"}>None</span>
                        )}
                      </div>
                    )}
                  </div>
                  <div
                    className={"w-8 relative flex-none hover:bg-fuchsia-100"}
                  >
                    {_schema?.ai_gen && (
                      <button
                        onClick={() => setVisible(false)}
                        className={clsx(
                          "hover:text-emerald-800 m-auto w-full h-full  absolute top-0 right-0"
                        )}
                      >
                        <SiCodereview className={clsx("h-4 w-4")} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            className="w-full absolute top-0 right-2"
            initial={{ x: initial, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: initial, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.7,
              x: { duration: 0.7 },
            }}
          >
            <ProjectMenu
              projects={user_projects}
              selected={current_project}
              setVisible={setVisible}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
