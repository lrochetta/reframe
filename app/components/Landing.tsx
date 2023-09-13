// @ts-nocheck
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaExternalLinkAlt, FaPaperPlane, FaTerminal } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";
import { Player } from "video-react";
import Link from "next/link";
import OmniLink from "@/components/Shared/omnilink";
import _map from "lodash/map";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { Mixpanel } from "@/lib/mixpanel";
import { EnvelopeClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import WikiCard from "@/components/interfaces/WikiCard";

const EarlyAccessButton = ({ className }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        Mixpanel.track("Button | Early Access", {});
        router.push("/api/auth/login?signup=true");
      }}
      className="flex shadow-lg hover:shadow-xl dark:hover:shadow-gray-900 border-solid border-1 dark:border-slate-600 ring-1 border-black rounded flex-row  max-w-md w-52 p-2 md:p-4 bg-white dark:bg-black dark:text-white"
    >
      <GoTelescope size={25} />{" "}
      <span className="grow text-center">Get Early Access</span>
    </button>
  );
};

const GetInTouchButton = ({ className }) => {
  return (
    <div
      className={
        " border rounded shadow-lg ring-1 shadow-zinc-800 border-solid border-black  max-w-md w-52 p-2 md:p-4 bg-white dark:bg-black dark:text-white"
      }
    >
      <OmniLink
        href="mailto:team@leaptable.us?subject=Leaptable » Hello from Landing Page"
        className="flex flex-row h-full items-center justify-center space-x-2"
      >
        <EnvelopeClosedIcon />
        <span className="grow text-center">Get In Touch</span>
        <FaExternalLinkAlt size={15} />
      </OmniLink>
    </div>
  );
};

export default (props) => {
  const { posts, use_cases } = props;
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center min-h-screen __variable_b1c8cd">
        <div className="w-full h-fit flex justify-left py-6 px-6 lg:px-0 max-w-7xl mt-20 lg:mt-28">
          <div className={""}>
            <div
              className={
                "tracking-wide text-5xl md:text-7xl mt-12 font-bold h-fill py-4 w-fill h-56 md:h-64 __variable_b1c8cdm"
              }
            >
              <TypeAnimation
                className={
                  "leading-[4rem] md:leading-[6rem] font-serif text-center md:text-left"
                }
                style={{
                  whiteSpace: "pre-line",
                }}
                sequence={[
                  "AI Agents at\nYour Fingertips",
                  2000,
                  () => {
                    //
                  },
                ]}
                wrapper="h1"
                cursor={false}
                repeat={1}
              />
            </div>
            <div>
              <div className="mt-2 flex flex-row items-center justify-center md:justify-between px-12 w-full">
                <div className="hidden md:block">
                  <EarlyAccessButton />
                </div>
                <div className="md:hidden ">
                  <GetInTouchButton />
                </div>
              </div>
            </div>
            <div className={"md:h-fit py-6 w-fill"}>
              <h2
                className={
                  "text-2xl py-4 leading-9  md:text-md tracking-normal font-normal"
                }
              >
                Leaptable is an <strong>AI Database</strong>.
              </h2>
              <h3 className={"text-xl font-light py-4"}>
                Leaptable unleashes the future with AI Agents that work for you.
                These virtual assistants automate workflows, search the web,
                explore LinkedIn, and more - with human-like intelligence but
                without human limitations. Leaptable combines an effortless a
                low-code database, dozens of tireless AI agents and powerful
                Language Models like GPT, so you can manage data smarter, not
                harder. Let AI Agents do the work so you can focus on insights.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center  py-4">
          <div className="w-full px-6 lg:px-0 max-w-7xl  mt-12 lg:mt-8">
            <div className="w-full flex p-2 border border-black border-1 preview-video items-center justify-center transform-gpu hover:scale-105 transition-transform ease-out duration-200 rounded-lg">
              <Player
                poster="https://d3g1vr8yw3euzd.cloudfront.net/media/img/reframe-ss-01.png"
                className="flex items-center justify-center m-0 w-full h-full bg-fuchsia-400"
                muted
                autoPlay
                loop
                src="https://d3g1vr8yw3euzd.cloudfront.net/media/videos/reframe-screenrecording-02.mp4"
              />
            </div>
            <div className="my-24 flex flex-row items-center justify-center w-full">
              <div className="hidden md:block">
                <EarlyAccessButton />
              </div>
              <div className="md:hidden ">
                <GetInTouchButton />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center  py-12">
          <div className="w-full px-6 lg:px-0 max-w-7xl  mt-4 lg:mt-8">
            <div className={"mt-0 md:mt-2  leading-7 "}>
              <p className={"py-2 leading-7"}>
                Whether you’re looking to analyze your product reviews, develop
                a sales pipeline or analyze the latest earnings report, Reframe
                is your ultimate solution.
              </p>

              <p className={"py-2 leading-7"}>
                We are building building core infrastructure to simplify the
                process of building, deploying, and managing LLM-powered AI
                agents on tabular data, making it the most efficient solution
                available. Gone are the days of laborious and time-consuming
                setups; our solution is designed to be seamless and
                user-friendly. From conceptualization to deployment, we have
                carefully engineered each step to ensure a smooth and productive
                journey.
              </p>

              <p className={"py-2 leading-7"}>
                Our team has experience building video search & understanding,
                person ID, radiology AI, and semantic search for some of the
                largest media companies in the world, Department of Defence
                (DoD) and Intelligence partners. And we have deep familiarity
                with the challenges in the eCommerce space.
              </p>

              <p className={"py-2 inline-flex leading-7 items-center"}>
                If you want to better supercharge your productivity with tabular
                data, we can help. &nbsp;
                <a
                  className={"underline"}
                  href={
                    "mailto:sales@leaptable.us?subject=Hello from Landing Page"
                  }
                >
                  Please get in touch
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center  py-24">
          <div className="w-full max-w-7xl  mt-4 lg:mt-6">
            <div className="">
              {use_cases && use_cases.hits && (
                <section className="container mx-auto pt-2 px-4 sm:px-6 lg:px-8 w-full">
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start lg:mt-2 mb-24">
                    {_map(use_cases.hits, (pg, idx) => (
                      <WikiCard base_page={"use-case"} page={pg} />
                    ))}
                  </div>
                  <div
                    className={
                      "w-full flex flex-row items-center justify-center py-8 mb-24"
                    }
                  >
                    <Link href="/use-case/">
                      <p
                        aria-hidden="true"
                        className="text-violet-600 font-semibold mt-auto"
                      >
                        Read more&nbsp;
                        <ArrowRightCircleIcon
                          role="img"
                          className="h-4 inline-flex opacity-50"
                        />
                      </p>
                    </Link>
                  </div>
                </section>
              )}
            </div>
            <div className="my-24 flex flex-row items-center justify-center w-full">
              <div className="hidden md:block">
                <EarlyAccessButton />
              </div>
              <div className="md:hidden ">
                <GetInTouchButton />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center  py-24">
          <div className="w-full max-w-7xl  mt-4 lg:mt-6">
            <div className="">
              {posts && posts.hits && (
                <section className="container mx-auto pt-2 px-4 sm:px-6 lg:px-8 w-full">
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start lg:mt-2 mb-24">
                    {_map(posts.hits, (pg, idx) => (
                      <WikiCard page={pg} />
                    ))}
                  </div>
                  <div
                    className={
                      "w-full flex flex-row items-center justify-center py-8 mb-24"
                    }
                  >
                    <Link href="/wiki">
                      <p
                        aria-hidden="true"
                        className="text-violet-600 font-semibold mt-auto"
                      >
                        Read more&nbsp;
                        <ArrowRightCircleIcon
                          role="img"
                          className="h-4 inline-flex opacity-50"
                        />
                      </p>
                    </Link>
                  </div>
                </section>
              )}
            </div>
            <div className="my-24 flex flex-row items-center justify-center w-full">
              <div className="hidden md:block">
                <EarlyAccessButton />
              </div>
              <div className="md:hidden ">
                <GetInTouchButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
