import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import onlinecheckproject from "@/public/onlinecheck.png";
import canigethome from "@/public/canigethome.png";
import netfliximage from "@/public/netflixclone.png";
import obsbrowser from "@/public/obs-browser.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from High School",
    location: "Fortaleza, CE",
    description:
      "I graduated after 3 years studying computer networks. I immediately found a job as a Network Operator.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Joined at university - UECE",
    location: "Fortaleza, CE",
    description: "Started my graduation studying Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "BlockChain One/Urbe.digital as Full-stack Developer",
    location: "Fortaleza, CE",
    description:
      "I worked as a full-stack developer for 2 years. I also upskilled from internship to Full-stack mid-level in 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Backend Developer at Good Software Dev",
    location: "Texas, USA",
    description:
      "I'm now a back-end developer working as a freelancer with an international team. My stack includes React, TypeScript, Prisma, NodeJS, JavaScript, Gravity boilerplate and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Online Check",
    link: "https://github.com/Emerson1337/onlineCheckEMS",
    description:
      "A real full stack project made for education purposes. It is an online check that uses the WhatsApp API for sending messages.",
    tags: [
      "React",
      "PostgreSQL",
      "Styled components",
      "Typeorm",
      "NodeJS",
      "Express",
      "Yup",
    ],
    imageUrl: onlinecheckproject,
  },
  {
    title: "Can I get home?",
    link: "https://github.com/Emerson1337/CanIGetHome",
    description:
      "An app that allow me to consult Uber ride prices through my mi band or any smart watch.",
    tags: ["NodeJS", "Typescript", "Jwt"],
    imageUrl: canigethome,
  },
  {
    title: "Netflix Clone",
    link: "https://netflix-front-clone-reactjs.vercel.app/",
    description: "A Netflix front end clone.",
    tags: ["ReactJS"],
    imageUrl: netfliximage,
  },
  {
    title: "OBS Browser Preview",
    link: "https://github.com/Emerson1337/obs-browser-preview",
    description:
      "That's an app that allows you to preview your video source from your OBS Studio in the browser locally.",
    tags: ["NodeJS", "JavaScript", "Html", "WebSocket", "Obs-web-socket"],
    imageUrl: obsbrowser,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "Python",
  "PHP",
  "C",
  "Node.js",
  "React",
  "Next.js",
  "Nest.js",
  "Git",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Docker-compose",
  "Kubernetes",
  "Docker-swarm",
  "AWS EC2",
  "S3 Bucket",
  "Unit testing",
  "Algorithms",
  "Microservices",
  "JQuery",
  "Ajax",
  "Laravel",
  "Adonis.js",
  "REST APIs",
  "Git",
  "GitHub",
  "POO",
  "Clean Code",
  "Clean Architecture",
  "Computer Networks",
  "HTML",
  "CSS",
] as const;
