// @ts-nocheck
import React, { useState, useRef } from "react";
import { useOnClickOutside } from "@/components/Shared/component/useOnClickOutSide";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import _ from "lodash";
import Table from "@/components/Pages/frame/Table";
import { Mixpanel } from "@/lib/mixpanel";
import Head from "next/head";
import { clsx } from "clsx";
import { useDataframeContext } from "@/components/Pages/context/dataframe";
import { useNofificationContext } from "@/components/Shared/Notification";
import { useAuthUserContext } from "@/components/Pages/context/authUser";
import UploadPanel from "@/components/Common/UploadPanel";
import { siteConfig } from "@/config/site";

const MAX_COUNT = 5;

const Index = (props) => {
  const { auth0_user }: any = useAuthUserContext();
  const workspace_ctx: any = useWorkspaceContext();
  const dataframe_ctx: any = useDataframeContext();
  const ctx: any = useWorkspaceContext();
  const [isModalOpen, setIsModalOpen] = useState<any>(false);

  const notifier: any = useNofificationContext();

  const current_workspace_id = _.get(
    workspace_ctx?.state,
    "data.app_state[0].meta.workspace_id"
  );

  const ref: any = useRef();

  useOnClickOutside(ref, () => setIsModalOpen(false));
  const current_project = _.find(workspace_ctx?.workspace, {
    _id: current_workspace_id,
  });

  if (dataframe_ctx.dataframe.loading) {
    return (
      <div className="flex flex-col justify-center items-center h-96 space-y-4">
        <p>Loading...</p>
      </div>
    );
  }

  const ingestion_sources = [
    {
      name: "File Upload",
      logo: "https://reframe-static.s3.us-east-2.amazonaws.com/media/img/logo/icons8-import-file.svg",
      tags: ["file", "upload"],
      description:
        "Upload your data from your local machine. Excel, CSV and TSV files are supported.",
    },
    {
      name: "Dropbox",
      logo: "https://reframe-static.s3.us-east-2.amazonaws.com/media/img/logo/icons8-dropbox.svg",
      tags: ["Object Storage", "Google"],
      description:
        "Import CSVs, Excel and TSV files from your Dropbox account.",
    },
    {
      name: "Google Drive",
      logo: "https://reframe-static.s3.us-east-2.amazonaws.com/media/img/logo/icons8-google-drive.svg",
      tags: ["Object Storage", "Google"],
      description:
        "Connect your Google Drive account and import CSVs, Excel and TSV files.",
    },
  ];

  const current_dataframe_id = _.get(
    ctx.state,
    "data.app_state[0].meta.dataframe_id"
  );

  let page_title = _.get(current_project, "name");
  page_title = page_title ? `${page_title} | Reframe` : siteConfig.title;

  return (
    <>
      <Head>
        <title>{page_title}</title>
      </Head>
      <div
        className={clsx({
          "p-0": true,
        })}
      >
        {current_dataframe_id ? (
          <Table />
        ) : (
          <div className={"py-12 px-8"}>
            <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              You don't have any data in this project.
            </p>
            <div className="pt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="px-24 py-4 rounded-t-lg"
                  src={ingestion_sources[0]?.logo}
                  alt="product image"
                />
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {ingestion_sources[0]?.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <span className="text-zinc-800 text-xs font-semibold py-0.5 rounded dark:text-blue-200">
                      {ingestion_sources[0]?.description}
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <UploadPanel
                      text={"Upload"}
                      label_class_name={clsx(
                        "text-white bg-blue-700 hover:bg-blue-800",
                        "focus:ring-4 focus:outline-none focus:ring-blue-300",
                        "font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600",
                        "dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      )}
                    />
                  </div>
                </div>
              </div>

              {_.map(ingestion_sources.slice(1), (in_src) => (
                <div
                  key={in_src?.name}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <img
                    className="px-24 py-4 rounded-t-lg "
                    src={in_src?.logo}
                    alt="product image"
                  />
                  <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {in_src?.name}
                    </h5>
                    <div className="flex items-center mt-2.5 mb-5">
                      <span className="text-zinc-800 text-xs font-semibold py-0.5 rounded dark:text-blue-200">
                        {in_src?.description}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled={false}
                        onClick={(e) => {
                          e.preventDefault();
                          Mixpanel.track("🧫 | Third Party Ingest", {
                            provider: in_src?.name,
                            workspace_id: current_workspace_id,
                            ..._.pick(
                              auth0_user,
                              "sub",
                              "email",
                              "name",
                              "_id",
                              "sid"
                            ),
                          });
                          notifier.error({
                            title: `${in_src?.name} is not enabled yet`,
                            message: `Cannot import from ${in_src?.name}. Contact us at sup@leaptable.us to enable this feature.`,
                          });
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
