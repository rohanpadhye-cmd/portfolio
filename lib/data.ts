import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaUsers, FaCode } from "react-icons/fa"
import one from "@/public/one.jpg";
import csi from "@/public/csi.png";
import anpr from "@/public/anpr.png";

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
    title: "B.E. in Information Technology",
    location: "VES Institute of Technology, Mumbai, India",
    description:
      "Completed coursework in Algorithms, Data Structures, and Software Engineering. Developed projects including an AI-powered smart doorbell and a license plate recognition system. Served as Placement Coordinator, managing campus placement drives and maintaining a student database.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2019 - May 2023",
  },

  {
    title: "Software Development Intern",
    location: "Virtual Labs IIT Bombay, Mumbai, India",
    description:
      "Developed Python scripts to dynamically generate MCQ-based questions for an educational software designed for school students. Implemented algorithms to automate question generation, ensuring diverse and accurate options tailored to varying difficulty levels.",
    icon: React.createElement(FaCode),
    date: "June 2021 - December 2021",
  },
  

  {
    title: "React Developer",
    location: "Coursenator, Navi Mumbai, India",
    description:
      "Worked as a Frontend Developer, focusing on building and optimizing web applications using React.",
    icon: React.createElement(FaReact),
    date: "March 2022 - July 2022",
  },

  {
    title: "Placement Coordinator",
    location: "Vivekanand Education Society's Institute of Technology, Mumbai, India",
    description:
      "Coordinated placement drives, collaborated with company HR representatives, and managed the selection process for final-year students. Developed and maintained a comprehensive student database, enhancing organizational efficiency.",
    icon: React.createElement(FaUsers),
    date: "July 2022 - May 2023",
  },
  {
    title: "MSc in Computer Science",
    location: "Western University, London, Ontario, Canada",
    description:
      "Focused on Distributed Systems, Machine Learning, and Cloud Computing. Conducted research on scalable microservices and backend optimization. Worked as a Teaching Assistant for CS Fundamentals II, leading lab sessions and mentoring students in Java programming.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2023 - August 2024",
  },

  {
    title: "Teaching Assistant",
    location: "Western University, London, ON",
    description:
      "Conducted lab sessions for CS Fundamentals II, guiding students through experiments and assignments in Java.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Smart Door Keeper",
    description:
      "Built an AI-powered smart doorbell system with facial recognition and real-time visitor management.",
    tags: ["Python", "Flask", "OpenCV", "Firebase"],
    imageUrl: one,
  },
  {
    title: "Automatic Number-Plate Recognition",
    description:
      "Developed a system for real-time license plate recognition using YOLOv4 and Attention OCR.",
    tags: ["Python", "YOLOv4", "Attention OCR", "OpenCV", "Firebase"],
    imageUrl: anpr,
  },
  
  {
    title: "React Website for CSI",
    description:
      "Developed a responsive web app to improve engagement and streamline updates for CSI.",
    tags: ["React", "Node.js", "Docker", "GitHub"],
    imageUrl: csi,
  },
  
] as const;

export const skillsData = [
"Python",
"Java",
"C++",
"JavaScript",
"SQL",
"React",
"Node.js",
"Spring Boot",
"PostgreSQL",
"MySQL",
"MongoDB",
"Docker",
"AWS",
"Flask",
"Django",
"TensorFlow",
"Keras",
"OpenCV",
"Kubernetes",
"Git",
"Firebase",
"Tailwind",
"MaterialUI",
"Bootstrap"

] as const;
