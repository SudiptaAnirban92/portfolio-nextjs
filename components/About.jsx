"use client";
import React from "react";
import profile from "../public/assets/20240331_134805.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      {/* container div */}
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="col-span-2">
          <p className="uppercase text-xl -tracking-widest text-[#124e66]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="text-[#212a31] py-2">
            I am a final semester CS student from North South University
            currently on my way to complete graduation. I have always been
            fascinated with software and technology which made me pursue
            computer science in the first place. At this stage of life, among a
            plethora of options in the tech industry I have gravitated towards
            something that I truly feel passionate about and that is web
            development.
          </p>
          <p>
            I am at the moment focused on building fully responsive front-end
            web applications with exceptional designs. I want to create and
            design applications that amazes people and takes their user
            experience to another level.
          </p>
          <Link href="/#projects">
            <p className="text-[#212a31] py-2 cursor-pointer underline">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        {/* Column 2 */}
        <div className="w-full h-auto m-auto shadow-xl shadow-[#2e3944] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={profile} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
