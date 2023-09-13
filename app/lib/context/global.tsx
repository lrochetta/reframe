// @ts-ignore
// @ts-nocheck
import { useState, createContext, useContext } from "react";
import { defaultData } from "./defaults";

const AppContext = createContext({});

export default ({ children }) => {
  const [config, setConfig] = useState<any>({
    title: false,
  });

  const [user, setUser] = useState<any>({
    nickname: "",
    picture: "",
    isAuthenticated: false,
  });

  const [globalData, setGlobalData] = useState({
    ...defaultData,
  });

  return (
    <AppContext.Provider
      value={{ config, setConfig, user, setUser, globalData, setGlobalData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useWorkspaceContext = () => {
  const appContextData = useContext(AppContext);
  if (!appContextData) {
    throw new Error("useWorkspaceContext must be used within the AppProvider");
  }
  return appContextData;
};
