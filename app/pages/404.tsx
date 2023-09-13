// @ts-nocheck
import React from "react";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";

const _404Page = () => {
  return (
    <div className={"lost-404"}>
      <video autoPlay muted loop className="bg-video">
        <source src="pexels-rodnae-productions-8474620.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="content">
        <Link href="/">
          <button id="myBtn">
            <IoIosHome size={40} />
            Home
          </button>
        </Link>
        <h1>Page Not found.</h1>
      </div>
    </div>
  );
};

export default _404Page;
