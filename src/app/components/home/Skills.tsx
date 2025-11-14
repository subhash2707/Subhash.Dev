'use client';
import React from "react";
import { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript, TbBrandMongodb, TbBrandJavascript, TbBrandCloudflare } from "react-icons/tb";
import { RiTailwindCssLine, RiVercelLine } from "react-icons/ri";
import { SiExpress, SiFirebase, SiMysql } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

export interface SkillItem {
  name: string;
  logo: IconType;
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export const skillsData: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: FaReact },
      // { name: "Next.js", logo: TbBrandNextjs },
      { name: "TypeScript", logo: TbBrandTypescript },
      { name: "TailwindCSS", logo: RiTailwindCssLine },
      { name: "JavaScript", logo: TbBrandJavascript },
      { name: "Git", logo: FaGitAlt },
      { name: "GitHub", logo: FaGithub },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: FaNodeJs },
      { name: "Express", logo: SiExpress },
      { name: "MongoDB", logo: TbBrandMongodb },
      { name: "MySQL", logo: SiMysql },
      { name: "Firebase", logo: SiFirebase },
      { name: "Vercel", logo: RiVercelLine },
      { name: "Cloudflare", logo: TbBrandCloudflare },
    ],
  },
];

const Skills = () => {
  return (
    <section className="w-full mt-25 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">

        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Technologies"
            description="Technologies I use to craft digital experiences"
            subtitle="Tech Stack"
          />
        </motion.div>

        {/* Skills Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="mt-6 flex flex-col md:flex-row w-full gap-6 border border-gray-700 text-gray-300 backdrop-blur-3xl bg-[#161B22]/70 p-8 rounded-2xl">
            {skillsData.map((skill) => (
              <motion.div
                key={skill.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <SkillsCard group={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

const SkillsCard = ({ group }: { group: SkillGroup }) => {
  return (
    <div key={group.title}>
      <h2 className="font-medium pb-2 mb-4">{group.title}</h2>

      <div className="flex flex-wrap gap-2 md:gap-4 justify-start items-center">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="text-gray-400 hover:text-foreground hover:decoration-1 hover:underline decoration-red-500 flex items-center gap-2 border border-gray-700 bg-[#0D1117] px-4 py-2 rounded-md hover:scale-105 hover:rotate-3 transition-transform"
          >
            <skill.logo className="text-lg" />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
