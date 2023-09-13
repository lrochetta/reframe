// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import DatasetMenuMenu from "@/components/Layout/App/SideBar/Left/data";

export default (props) => {
  const { user, isLoading: user_loading, ...rest } = useUser();
  return <DatasetMenuMenu />;
  f;
};
