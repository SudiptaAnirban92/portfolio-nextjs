"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import navLogo from "../public/assets/navLogo2.png";
import Link from "next/link";
import { TfiMenu, TfiClose, TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#d3d9d4");
  const [linkColor, setLinkColor] = useState("#212a31");
  const router = usePathname();

  useEffect(() => {
    if (
      router === "/basic" ||
      router === "/survey" ||
      router === "/todo" ||
      router === "/best" ||
      router === "/portfolio" ||
      router === "/data"
    ) {
      setNavBg("transparent");
      setLinkColor("#d3d9d4");
    } else {
      setNavBg("#d3d9d4");
      setLinkColor("#212a31");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    // Parent container
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      {/* Container */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#hero">
          <Image src={navLogo} alt="/" width={125} height={50} />
        </Link>

        {/* Main Menu */}
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#hero">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#124e66]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#124e66]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#124e66]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#124e66]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#124e66]">
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
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#212a31]/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] h-screen sm:w-[60%] md:w-[45%] bg-[#d3d9d4] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          {/* Upper part */}
          <div>
            <div className="flex w-full justify-between items-center">
              <Image src={navLogo} width={87} height={35} alt="/" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer"
              >
                <TfiClose size={20} />
              </div>
            </div>
            <div className="border-b border-[#748d92] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s create something great
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href="/#hero">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#124e66]">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/sudipta-anirban-022563110/"
                  target="target_blank"
                >
                  <div className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#748d92]">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/SudiptaAnirban92"
                  target="target_blank"
                >
                  <div className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#748d92]">
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:sudiptaanirban@gmail.com" target="target_blank">
                  <div className="rounded-full shadow-lg shadow-[#2e3944] p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#748d92]">
                    <TfiEmail />
                  </div>
                </a>
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
