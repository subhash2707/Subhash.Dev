'use client';
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    title: "QuickStay — Hotel Booking Platform",
    description:
      "Hotel booking web app featuring live availability, filters, and location-aware search for multiple concurrent users. Implemented secure booking flow with JWT authentication, role-based access (Admin/Guest), and booking history tracking. Integrated an admin dashboard for listings, pricing, and availability management. Deployed on Vercel with automated build & deployment simulating a CI/CD pipeline.",
    image: "/images/projects/mpc.webp",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST API",
      "Vercel",
    ],
    github: "https://github.com/Yungstunner/QuickStay",
    demo: null,
  },
  {
    title: "MediConnect — HACK-36",
    description:
      "Full-stack doctor–patient appointment booking platform developed during HACK-36 with calendar scheduling for 50+ simulated appointments and dashboards for 10 mock doctors. Implemented JWT authentication, role-based access control, and REST APIs for 5 user roles and 15 endpoints, optimizing queries to reduce response time by 40%. Built interactive UI components using React.js and Tailwind CSS.",
    image: "/images/projects/hrms.webp",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/Yungstunner/MediConnect",
    demo: null,
  },
  {
    title: "Email Spam Classifier — Streamlit + NLTK",
    description:
      "Machine learning web app to classify emails as spam or ham using NLTK and Tf-idf Vectorizer. Trained on 5,000 labeled emails from Kaggle, achieving 98% accuracy and 99% precision after preprocessing (tokenization, stopword removal, vectorization). Deployed via Streamlit and Render for real-time text classification.",
    image: "/images/projects/mcodo.webp",
    tags: [
      "Python",
      "NLTK",
      "Scikit-learn",
      "Tf-idf",
      "Streamlit",
      "Render",
      "Machine Learning",
    ],
    github: "https://github.com/Yungstunner/Email-Spam-Classifier",
    demo: "https://email-spam-classifier-yungstunner.onrender.com",
  },
];

const Projects = () => {
  return (
    <section className="w-full mt-25 px-6" id="projects">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Projects"
            subtitle="Featured"
            description="A selection of my recent work demonstrating my skills and experience."
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
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
          className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 auto-rows-fr items-stretch"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 text-center text-gray-500"
        >
          Delivered 15+ confidential projects across web and mobile platforms.
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="h-full flex flex-col border border-gray-700 text-gray-300 backdrop-blur-3xl bg-[#161B22]/70 rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          fill
          loading="lazy"
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 gap-4">
        {/* Title + Description */}
        <div>
          <h3 className="font-display text-xl sm:text-xl font-bold mb-2 group-hover:gradient-text transition-all tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-normal">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-gray-700 bg-[#0D1117] text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3 pt-4 border-t border-gray-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center py-2.5 rounded-lg border border-gray-700 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center py-2.5 rounded-lg border border-gray-700 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
