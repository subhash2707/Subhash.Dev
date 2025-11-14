'use client';
import Image from "next/image";
import React from "react";
import "./hero.css";
import {
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const socialLinks = [
  // {
  //   name: "Instagram",
  //   icon: <BsInstagram size={20}/>,
  //   url: "https://www.instagram.com/",
  // },
  { name: "Email", icon: <MdMailOutline size={25}/>, url: "mailto:subhashc2707.com" },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp size={20}/>,
    url: "https://wa.me/+916396304269",
  },
];

const Hero = () => {
  return (
    <section className="w-full mt-35 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative w-40 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full transition-all duration-300"
        >
          <Image
            src="/images/hero/subhash.jpeg"
            alt="Siddhant Dwivedi - profile photo"
            fill
            className="grayscale-100 hover:grayscale-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </motion.div>

        {/* Text and Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center items-center mt-6 gap-8 md:gap-6 max-w-3xl"
        >
          <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start">
            <span>Hi, I&apos;m</span>
            <h1 className="font-display tracking-wide text-5xl font-medium text-gray-50">
              Subhash Chandra
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <SkillsSlider />
          </motion.div>

          <p className="text-base tracking-wider text-center md:text-left">
I&apos;m <span>Subhash Chandra</span>, a passionate <span>MERN Stack Developer</span> dedicated to building dynamic, high-performance digital experiences. From crafting sleek, responsive <span>frontends</span> in React to architecting scalable <span>backends</span> with Node.js and MongoDB, I bring ideas to life with clean code, modern design, and seamless functionality.

          </p>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;

// slider style come from hero.css file.
const SkillsSlider = () => {
  return (
    <div className="flex gap-2 justify-center items-baseline">
      {/* <div>I am</div> */}
      <div className="slider">
        <div className="slides ">
          <div className="underline decoration-1 decoration-blue-500">
            DSA Enthusiast
          </div>
          <div className="underline decoration-1 decoration-red-500">
            Fullstack Dev
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-3 justify-center items-center">
        {socialLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="text-gray-500 hover:text-foreground border-red-500 hover:border-b-[0.5px] p-1"
            >
              <a
                title={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
