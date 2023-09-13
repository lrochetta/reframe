// @ts-nocheck
import React from "react";
import Link from "next/link";

function LogoX({ homepage }) {
  return (
    <div className={"main-logo"}>
      <Link href={`${homepage}`}>
        <img src="/logo.svg" />
      </Link>
    </div>
  );
}

export default LogoX;
