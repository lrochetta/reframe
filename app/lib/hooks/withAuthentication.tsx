// @ts-nocheck
import { FC, ComponentType, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkspaceContext } from "../context";
import { getSession } from "../session/session";

const defaultOnRedirecting = (): JSX.Element => <></>;

export interface WithAuthenticationOptions {
  returnTo?: string | (() => string);
  onRedirecting?: () => JSX.Element;
}

const WithAuthentication = <P extends object>(
  Component: ComponentType<P>,
  options: WithAuthenticationOptions
): FC<P> => {
  return function WithAuthentication(props: P): JSX.Element {
    const { setUser }: any = useWorkspaceContext();
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    const { onRedirecting = defaultOnRedirecting } = options;

    useEffect(() => {
      getSession(function (response: any) {
        if (response.status) {
          const userId = response.user.sub.split("|")[1] || "";
          setUser({ ...response.user, isAuthenticated: true });
          localStorage.setItem("userId", userId);
          localStorage.setItem("user", response.user.nickname);
          localStorage.setItem("userpic", response.user.picture);
          setAuthenticated(true);
          if (response?.user?.profile?.role !== "beta") {
            navigate("/unauthorized");
          }
        } else {
          localStorage.clear();
          navigate("/auth/login");
        }
      });
    }, [navigate, setUser]);

    return authenticated ? <Component {...props} /> : onRedirecting();
  };
};

export default WithAuthentication;
