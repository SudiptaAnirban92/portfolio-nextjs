import React from "react";
import { TfiMenu, TfiClose, TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  return (
    // Parent container
    <div id="hero" className="w-full h-screen text-center">
      {/* Container */}
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-[#212a31]">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-[#2e3944]">
            Hey I'm
            <span className="text-[#124e66]"> Sudipta</span>
          </h1>
          <h1 className="py-2 text-[#2e3944]">A Front End Web Developer</h1>
          <p className="py-4 text-[#212a31] max-w-[70%] m-auto">
            I'm a final semester CS student who has a passion for web
            development. Currently, I'm specializing in front end development
            and learning back-end technologies on the side. Building responsive
            applications is something I take very seriously and aspire to build
            breathtaking digital experience for my clients.
          </p>
          <div className="flex max-w-[330px] items-center justify-between m-auto py-4">
            <a
              href="https://www.linkedin.com/in/sudipta-anirban-022563110/"
              target="target_blank"
            >
              <div className="rounded-full shadow-lg shadow-[#2e3944] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#748d92]">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/SudiptaAnirban92" target="target_blank">
              <div className="rounded-full shadow-lg shadow-[#2e3944] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#748d92]">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:sudiptaanirban@gmail.com" target="target_blank">
              <div className="rounded-full shadow-lg shadow-[#2e3944] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#748d92]">
                <TfiEmail />
              </div>
            </a>
            <div className="rounded-full shadow-lg shadow-[#2e3944] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#748d92]">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
