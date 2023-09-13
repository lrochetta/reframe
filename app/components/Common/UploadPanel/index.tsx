// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import _get from "lodash/get";
import { Fragment } from "react";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import { clsx } from "clsx";
import _map from "lodash/map";
const MAX_COUNT = 5;
import axios_instance from "@/lib/services/request";
import { Mixpanel } from "@/lib/mixpanel";
import _ from "lodash";
import { useAuthUserContext } from "@/components/Pages/context/authUser";
import { useNofificationContext } from "@/components/Shared/Notification";
import {
  FaceIcon,
  FilePlusIcon,
  ImageIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export default ({ label_class_name, text }) => {
  const workspace_ctx: any = useWorkspaceContext();
  const { auth0_user }: any = useAuthUserContext();
  const notifier: any = useNofificationContext();

  const [isOpen, setIsOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileProgress, setFileProgress] = useState({});
  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
    setIsOpen(true);

    //  Todo: Add Mixpanel tracking for files chosen.
    Mixpanel.track("Upload Ingest", {
      provider: "Leaptable Console",
      workspace_id: current_workspace_id,
      ..._.pick(auth0_user, "sub", "email", "name", "_id", "sid"),
    });
  };

  const current_workspace_id = _get(
    workspace_ctx?.state,
    "data.app_state[0].meta.workspace_id"
  );

  const onUploadProgress = (progressEvent, file) => {};

  const onSubmitUploads = (e) => {
    e.preventDefault();

    _map(uploadedFiles, (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("workspace_id", current_workspace_id);
      return axios_instance
        .post("/dataframe/upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (ev) => {
            onUploadProgress(ev, file);
            setFileProgress({
              ...fileProgress,
              [file.name]: (ev.loaded / ev.total) * 100,
            });
          },
        })
        .then((res) => {
          workspace_ctx.updateState({ dataframe_id: res.data.dataframe_id });
          setIsOpen(false);
          notifier.success({
            title: `File uploaded successfully`,
            message: `Find your file in the Dataframe tab.`,
          });
        })
        .catch((err) => {
          notifier.error({
            title: `File upload failed`,
            message: `Please try again.`,
          });
        });
    });
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={clsx()}>
      <form
        onSubmit={onSubmitUploads}
        className={"flex flex-row items-center justify-between"}
      >
        <label
          htmlFor="fileUpload"
          className={label_class_name}
          onChange={handleFileEvent}
        >
          <input
            id="fileUpload"
            type="file"
            multiple
            hidden
            className={"flex  hidden flex-row w-full space-x-2"}
            accept="application/pdf, image/png, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            disabled={fileLimit}
          />
          <FilePlusIcon className="w-5 h-5 mr-2" />
          {text}
        </label>
      </form>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Uploading Files
                  </Dialog.Title>
                  <div className="mt-2 py-2">
                    {uploadedFiles.map((file) => {
                      // const width = `w-[${Math.round(fileProgress[file.name])}%]`
                      const width = `${Math.round(
                        fileProgress[file.name] ? fileProgress[file.name] : 0
                      )}%`;
                      return (
                        <div key={file.name}>
                          <div className="mt-2 py-2">{file.name}</div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                              className={clsx(
                                `bg-blue-600 h-2.5 rounded-full`,
                                `${width}`
                              )}
                              style={{ width }}
                            ></div>
                            <span>{width} Complete</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex flex-row justify-center items-center space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onSubmitUploads}
                    >
                      Upload
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
