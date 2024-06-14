"use client"
import Image from "next/image";
import React from "react";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import github from "../public/assets/skills/github.png";
import django from "../public/assets/skills/django.png";
import python from "../public/assets/skills/python.png";

const Skills = () => {
  return (
    // Parent container
    <div id="skills" className="w-full lg:h-screen p-2">
      {/* Container */}
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#124e66]">
          skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        {/* Grid container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cards */}
          <div className="p-6 shadow-xl shadow-[#2e3944] rounded-xl hover:scale-105 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={html} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-[#2e3944] rounded-xl hover:scale-105 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={css} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-[#2e3944] rounded-xl hover:scale-105 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={javascript} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-[#2e3944] rounded-xl hover:scale-105 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={react} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-[#2e3944] rounded-xl hover:scale-105 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={tailwind} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-[#2e3944] rounded-xl hover:scale-105 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={github} alt="/" width={64} height={64} className=""/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-[#2e3944] rounded-xl hover:scale-105 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={django} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Django</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-[#2e3944] rounded-xl hover:scale-105 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={python} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
