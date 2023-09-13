import * as React from "react";
import { useWorkspaceContext } from "@/components/Pages/context/workspace";
import _some from "lodash/some";

export interface RainbowLoaderProps {
  css?: React.CSSProperties;
}

export const GlobalLoader: React.FC<RainbowLoaderProps> = ({ css }) => {
  const datactx: any = useWorkspaceContext();
  const { loading } = datactx;

  const defaultStyles: React.CSSProperties = {
    background: `linear-gradient(
            90deg,
            orange,
            yellow,
            lime,
            cyan,
            violet,
            magenta,
            red,
            orange,
            yellow,
            lime,
            cyan,
            violet,
            magenta,
            red,
            orange
          )`,
    backgroundSize: "200%",
    animationDuration: "10s",
    animationName: "RainbowLoaderAnimation",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    height: "0.25rem",
  };

  const style = Object.assign({}, defaultStyles, css);

  return (
    <>
      {_some(loading) && (
        <div className={"w-screen m-0 left-0 top-0 absolute p-0"}>
          <div style={style}>
            <style>{`
            @keyframes RainbowLoaderAnimation {
                0% {
                    background-position: 0%;
                  }
                  100% {
                    background-position: 100%;
                  }
            }
        `}</style>
          </div>
        </div>
      )}
    </>
  );
};
