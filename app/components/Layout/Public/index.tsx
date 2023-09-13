import { Fragment } from "react";
import PublicHeader from "./Header";
import PublicFooter from "./Footer";

const PublicLayout = ({ children }) => {
  return (
    <div className={"h-screen md:h-fit min-h-screen overflow-y-scroll"}>
      <PublicHeader />
      {children}
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
