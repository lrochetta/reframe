// @ts-nocheck
import React, { useState, createContext, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import _get from "lodash/get";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGetUserStreamSubscription } from "@/generated/graphql";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
import Loader from "@/components/Common/Loader";
import jwt from "jsonwebtoken";
import * as jose from "jose";
const AppContext = createContext({});

export const AuthUserProvider = ({
  children,
  user: auth0_user,
  id_token,
}: any) => {
  const router = useRouter();

  const system_user = useGetUserStreamSubscription({
    variables: { _id: auth0_user?._id },
  });

  const current_user = _get(system_user, "data.user[0]");

  const cert =
    "-----BEGIN CERTIFICATE-----\nMIIC/zCCAeegAwIBAgIJCf2ya3Gc/0sxMA0GCSqGSIb3DQEBCwUAMB0xGzAZBgNV\nBAMTEm5uZXh0LnVzLmF1dGgwLmNvbTAeFw0yMjA4MTUwMjIwMjRaFw0zNjA0MjMw\nMjIwMjRaMB0xGzAZBgNVBAMTEm5uZXh0LnVzLmF1dGgwLmNvbTCCASIwDQYJKoZI\nhvcNAQEBBQADggEPADCCAQoCggEBAO7hsn3ugXFOwTIRArCP/j3X564EDjfSOqKk\nZj6wvaICDeZPVupbh4ih18mIWHogso8cl20fNsraDOaiiP/GaAItUVB6A9SJTqWF\nOwXlKvo/xqt4yqgkj6BoOGp/0IDCf1ksrO52e1S4Hy1ZU/HMc8YNUfFekxN4rzJD\nlu5TH/lNiN2Te9ESzRjTzDjKp+zZX5+wLvZWPEz09fs8L8RP/D2SS23uMAO/rGdN\n9Xc1CJKnVv0Io7TisZQl24HWEUmfZidk3Nhw9VKZC+v7cWdM0e2TE597W99DmBmw\nfcRco8fTYt7BMzxO7o4IJ7PQO+jEGDuvd231aD8qJ3AQXwxW46MCAwEAAaNCMEAw\nDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU7ve8HKPzramYKWs3EvUyKF0/y44w\nDgYDVR0PAQH/BAQDAgKEMA0GCSqGSIb3DQEBCwUAA4IBAQAB2Mi04MlENj2OI+nW\nBYHPLiwRDKHfxrNu69raejmaMA/B1nEeAZI2XWqElvRahFXKOvzapP5acvmFYusI\nOvqwRpu6iwKGvlgEvbIgPSEmbu+Sy/bCv4B/8w+IN8wmk/53J9w1M8Y1zoc+E3XS\n7x/drrRHVPc+NCq4P+tAeucC2uAtqVducRa7/uEi1gvQyn3Hur/8/0RF+ZIrPB3w\nsfDpv4PHg7uoye92OP8BSMmOPssf8k+WkcrVkzLEq1f9dOIaAfbBk8NMu5LqSlAC\nC84hbPKIikAG64ypRTN2fw3IrXVDpF8FcKJcGxx19TwjLOjm7dJLg4444SJTv/Fb\nvLCk\n-----END CERTIFICATE-----";

  useEffect(() => {
    try {
      // let x = jwt.verify(id_token, cert, { algorithms: ["RS256"] });
      //
    } catch (e) {
      console.error(e);
    }
  });

  const LogoutScreen = () => (
      <div className="flex items-center justify-center h-screen">
        <div className="flex shadow-md items-center rounded flex-col space-y-8 w-64 w-64 bg-fuchsia-100 p-4">
          <Link
              href={"/api/auth/logout/"}
              className="relative py-3 w-48 px-4 flex bg-sky-100 flex-row justify-between items-center space-x-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded border-t border-gray-200 dark:border-gray-700"
          >
            <span>Logout</span>
            <AiOutlineLogout className="w-5 h-5" />
          </Link>
        </div>
      </div>
  )

  if (
    current_user &&
    (!current_user?.beta_access || !current_user?.email_verified) &&
    router.pathname !== "/user/verify"
  ) {
    router.push("/user/verify/");
  }

  return (
    <AppContext.Provider
      value={{
        user_id: auth0_user?._id,
        system_user: system_user,
        auth0_user: auth0_user,
        session_id: auth0_user?.sid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuthUserContext = () => {
  const appContextData = useContext(AppContext);
  if (!appContextData) {
    throw new Error("useUserContext must be used within the AuthUserProvider");
  }
  return appContextData;
};
