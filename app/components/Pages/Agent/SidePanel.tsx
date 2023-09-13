// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import SidePanel from "@/components/Layout/App/SideBar/Left/agent";

export default (props) => {
  const { user, isLoading: user_loading, ...rest } = useUser();
  return <SidePanel />;
};
