import React from "react";
import todo from "../../public/assets/projects/todo-list2.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const surveyForm = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#212a31]/90 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={todo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[-50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Todo List App</h2>
          <h3>React JS/ Vanilla CSS</h3>
        </div>
      </div>

      {/* Container */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-[#124e66]">project</p>
          <h2>Overview</h2>
          <p>
            Here&apos;s a beginner Todo List app that was my first React JS project.
            It really made me understand the fundamentals of React and how all
            it&apos;s hooks such as useState() and useEffect() work. This app has a
            minimalistic interface that includes an input section and a list
            section where you can write, add and delete your todo list. It also
            keeps your todo list intact, even if you terminate the server.
          </p>
          <a href="/">
            <button className="px-8 py-2 mt-4 mr-8 ">Demo</button>
          </a>
          <a
            href="https://github.com/SudiptaAnirban92/react-todo-list.git"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-[#2e3944] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#2e3944] flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-[#2e3944] flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-[#2e3944] flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default surveyForm;
