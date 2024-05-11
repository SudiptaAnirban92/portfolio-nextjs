"use client";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    // Parent container
    <div id="contact" className="w-full lg:h-screen">
      {/* Container */}
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl -tracking-widest uppercase text-[#124e66]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        {/* Grid container */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-ful h-full shadow-xl shadow-[#2e3944] rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Sudipta Anirban</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance and full time positions. Feel
                  free to contact me.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4 ">
                  <a
                    href="https://www.linkedin.com/in/sudipta-anirban-022563110/"
                    target="target_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-[#2e3944] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#748d92]">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/SudiptaAnirban92"
                    target="target_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-[#2e3944] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#748d92]">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/sudipta.anirban.3/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-[#2e3944] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#748d92]">
                      <FaFacebookF />
                    </div>
                  </a>
                  <a
                    href="mailto:sudiptaanirban@gmail.com"
                    target="target_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-[#2e3944] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#748d92]">
                      <TfiEmail />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-[#2e3944] rounded-xl lg:p-4">
            <div className="p-4">
              {/* Form container */}
              <form>
                {/* Name and phone container 2 cols */}
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-[#748d92]"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-[#748d92]"
                    />
                  </div>
                </div>

                {/* Email and other container */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-[#748d92]"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-[#748d92]"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-[#748d92]"
                    rows={10}
                    placeholder="Enter here"
                  ></textarea>
                </div>
                <button className="uppercase w-full h-auto p-4 text-[#d3d9d4] mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#hero">
            <div className="rounded-full shadow-lg shadow-[#2e3944] p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#d3d9d4]">
              <HiOutlineChevronDoubleUp className="text-[#124e66]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
