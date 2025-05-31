import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "@/utils/data/personal-data";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Developer working illustration"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Section */}
        <div className="order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:order-2 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className="text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            {personalData.github && (
              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 transition-all duration-300 hover:scale-125"
              >
                <BsGithub size={30} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 transition-all duration-300 hover:scale-125"
              >
                <BsLinkedin size={30} />
              </Link>
            )}
            {personalData.facebook && (
              <Link
                href={personalData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 transition-all duration-300 hover:scale-125"
              >
                <FaFacebook size={30} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link
                href={personalData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 transition-all duration-300 hover:scale-125"
              >
                <SiLeetcode size={30} />
              </Link>
            )}
            {personalData.twitter && (
              <Link
                href={personalData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 transition-all duration-300 hover:scale-125"
              >
                <FaTwitterSquare size={30} />
              </Link>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="flex items-center gap-1 rounded-full bg-[#0d1224] px-3 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </a>

          </div>
        </div>

        {/* Right Section - Code Block */}
        <div className="overflow-hidden border-t-2 border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <span className="text-pink-500">public class</span>{" "}
            <span className="text-amber-300">Coder </span>
            <span className="text-gray-400">{"{"}</span>
            <br />
            <span className="ml-4 text-pink-500">String</span>{" "}
            <span className="text-white">name</span>{" "}
            <span className="text-pink-500">=</span>{" "}
            <span className="text-amber-300">"Pravin Sonwane"</span>
            <span className="text-gray-400">;</span>
            <br />
            <span className="ml-4 text-pink-500">String[]</span>{" "}
            <span className="text-white">skills</span>{" "}
            <span className="text-pink-500">=</span>{" "}
            <span className="text-gray-400">{"{"}</span>
            <span className="text-amber-300">"Java"</span>,{" "}
            <span className="text-amber-300">"Spring Boot"</span>,{" "}
            <span className="text-amber-300">"React + Vite"</span>,{" "}
            <span className="text-amber-300">"Microservices"</span>,{" "}
            <span className="text-amber-300">"REST API"</span>,{" "}
            <span className="text-amber-300">"Postgres"</span>,{" "}
            <span className="text-amber-300">"MongoDB"</span>
            <span className="text-gray-400">{"};"}</span>
            <br />
            <span className="ml-4 text-pink-500">boolean</span>{" "}
            <span className="text-white">hardWorker</span>{" "}
            <span className="text-pink-500">=</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">;</span>
            <br />
            <span className="ml-4 text-pink-500">boolean</span>{" "}
            <span className="text-white">quickLearner</span>{" "}
            <span className="text-pink-500">=</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">;</span>
            <br />
            <span className="ml-4 text-pink-500">boolean</span>{" "}
            <span className="text-white">problemSolver</span>{" "}
            <span className="text-pink-500">=</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">;</span>
            <br />
            <br />
            <span className="ml-4 text-pink-500">boolean</span>{" "}
            <span className="text-green-400">hireable()</span>{" "}
            <span className="text-gray-400">{"{"}</span>
            <br />
            <span className="ml-8 text-pink-500">return</span>{" "}
            <span className="text-cyan-400">this.</span>
            <span className="text-white">hardWorker</span>{" "}
            <span className="text-amber-300">&amp;&amp;</span>
            <br />
            <span className="ml-12 text-cyan-400">this.</span>
            <span className="text-white">problemSolver</span>{" "}
            <span className="text-amber-300">&amp;&amp;</span>
            <br />
            <span className="ml-12 text-cyan-400">this.</span>
            <span className="text-white">skills.length</span>{" "}
            <span className="text-amber-300">&gt;=</span>{" "}
            <span className="text-orange-400">5</span>
            <span className="text-gray-400">;</span>
            <br />
            <span className="ml-4 text-gray-400">{"}"}</span>
            <br />
            <span className="text-gray-400">{"}"}</span>
          </code>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
