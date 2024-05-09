import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-[#2e3944] rounded-xl p-4 group hover:bg-gradient-to-r from-[#124e66] to-[#748d92]">
      <Image
        className="rounded-xl group-hover:opacity-10 w-full h-full object-cover"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#e8ede9] tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-[#e8ede9] text-center">React JS</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-[#e8ede9] text-[#124e66] font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
