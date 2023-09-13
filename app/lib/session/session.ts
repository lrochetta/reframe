// @ts-nocheck
import { auth } from "../../components/auth/auth";

export const setSession = async (authResult: any) => {
  if (authResult?.accessToken) {
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem(
      "expires_at",
      `${authResult.expiresIn * 1000 + new Date().getTime()}`
    );
  }
};

export const getSession = async (callback: any) => {
  const expiresAt: any = localStorage.getItem("expires_at");
  const token: any = localStorage.getItem("access_token");
  const isValid = new Date().getTime() < expiresAt;
  const response = { status: false, token: "", user: {} };
  if (isValid) {
    auth.client.userInfo(token, (err, profile) => {
      if (err) {
        callback(response);
      } else {
        response.status = true;
        response.token = token;
        response.user = profile;
        callback(response);
      }
    });
  } else {
    callback(response);
  }
};

export const isAuthenticated = async () => {
  const expiresAt: any = localStorage.getItem("expires_at");
  return new Date().getTime() < expiresAt;
};

export const getUser = async (token: any = "", callback: any) => {
  if (!token) {
    token = localStorage.getItem("access_token");
  }
  auth.client.userInfo(token, (err, profile) => {
    if (err) {
      callback({});
    } else {
      callback(profile);
    }
  });
};
