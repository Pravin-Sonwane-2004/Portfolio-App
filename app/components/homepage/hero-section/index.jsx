// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <span className="blink">
              <span className="mr-2 text-pink-500">public class</span>
              <span className="mr-2 text-amber-300">Coder</span>
              <span className="text-gray-400">{' {'}</span>
            </span><br />

            <span>
              <span className="ml-4 lg:ml-8 mr-2 text-pink-500">String</span>
              <span className="text-white"> name</span>
              <span className="text-pink-500"> = </span>
              <span className="text-amber-300">"Pravin Sonwane"</span>
              <span className="text-gray-400">;</span>
            </span><br />

            <span className="ml-4 lg:ml-8 mr-2">
              <span className="text-pink-500">String[]</span>
              <span className="text-white"> skills</span>
              <span className="text-pink-500"> = </span>
              <span className="text-gray-400">{"{"}</span>
              <span className="text-amber-300">"Java"</span>
              <span className="text-gray-400">,</span>
              <span className="text-amber-300">"Spring Boot"</span>
              <span className="text-gray-400">,</span>
              <span className="text-amber-300">"React + Vite"</span>
              <span className="text-gray-400">,</span>
              <span className="text-amber-300">"Microservices"</span>
              <span className="text-gray-400">,</span>
              <span className="text-amber-300">"REST API"</span>
              <span className="text-gray-400">,</span>
              <span className="text-amber-300">"Postgress"</span>
              <span className="text-gray-400">,</span>
              <span className="text-amber-300">"MongoDB"</span>
              <span className="text-gray-400">{"};"}</span>
            </span><br />

            <span>
              <span className="ml-4 lg:ml-8 mr-2 text-pink-500">boolean</span>
              <span className="text-white"> hardWorker</span>
              <span className="text-pink-500"> = </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">;</span>
            </span><br />

            <span>
              <span className="ml-4 lg:ml-8 mr-2 text-pink-500">boolean</span>
              <span className="text-white"> quickLearner</span>
              <span className="text-pink-500"> = </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">;</span>
            </span><br />

            <span>
              <span className="ml-4 lg:ml-8 mr-2 text-pink-500">boolean</span>
              <span className="text-white"> problemSolver</span>
              <span className="text-pink-500"> = </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">;</span>
            </span><br />

            <span>
              <span className="ml-4 lg:ml-8 text-green-400">boolean hireable()</span>
              <span className="text-gray-400"> {'{'}</span>
            </span><br />

            <span>
              <span className="ml-8 lg:ml-16 text-pink-500">return</span>
              <span className="text-cyan-400"> this.</span>
              <span className="text-white">hardWorker</span>
              <span className="text-amber-300"> &&</span>
            </span><br />

            <span>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="text-white">problemSolver</span>
              <span className="text-amber-300"> &&</span>
            </span><br />

            <span>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="text-white">skills.length</span>
              <span className="text-amber-300"> &gt;= </span>
              <span className="text-orange-400">5</span>
              <span className="text-gray-400">;</span>
            </span><br />

            <span><span className="ml-4 lg:ml-8 text-gray-400">{'}'}</span></span><br />
            <span><span className="text-gray-400">{'}'}</span></span>
          </code>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;