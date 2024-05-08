"use client"
import Image from "next/image";
import React, { useState } from "react";
import navLogo from "../public/assets/navLogo.png";
import Link from "next/link";
import { TfiMenu, TfiClose, TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";



const Navbar = () => {

    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] ">
      {/* Container */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 backdrop-blur-[5px]">
        <Image src={navLogo} alt="/" width={125} height={50} />

        {/* Main Menu */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <TfiMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#212a31]/70" : ''}>
        <div className={nav ? "fixed left-0 top-0 w-[75%] h-screen sm:w-[60%] md:w-[45%] bg-[#d3d9d4] p-10 ease-in duration-500" :
            "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
          {/* Upperpart */}
          <div>
            <div className="flex w-full justify-between items-center">
              <Image src={navLogo} width={87} height={35} alt="" />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer">
                <TfiClose size={20} />
              </div>
            </div>
            <div className="border-b border-[#748d92] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's create something great
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#124e66]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#748d92]">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#748d92]">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#748d92]">
                  <TfiEmail />
                </div>
                <div className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#748d92]">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
