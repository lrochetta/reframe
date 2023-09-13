// @ts-nocheck
import React from "react";

export function MobileView(props) {
  const { children } = props;
  return <div className={"hide-desktop"}>{children}</div>;
}

export function DesktopView(props) {
  const { children } = props;
  return <div className={"hide-mobile"}>{children}</div>;
}
