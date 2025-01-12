"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating with a degree in{" "}
  <span className="font-medium">Information Technology</span>, I decided to deepen my technical knowledge with an{" "}
  <span className="font-medium">MSc in Computer Science</span>.{" "}
  <span className="italic">My favorite part of programming</span> is solving complex problems and designing efficient systems. I{" "}
  <span className="underline">love</span> building scalable solutions that make a real impact. My core stack includes{" "}
  <span className="font-medium">
    Spring Boot, PostgreSQL, Docker, and AWS
  </span>
  . I am also experienced with Python and Flask. I am always looking to learn and adapt to{" "}
  <span className="font-medium">new technologies</span>. I am currently looking for a{" "}
  <span className="font-medium">full-time position</span> as a backend or software developer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and exploring new technologies. I also enjoy{" "}
  <span className="font-medium">learning new things</span>. I am currently diving into{" "}
  <span className="font-medium">history and philosophy</span> and expanding my knowledge of{" "}
  <span className="font-medium">cloud architecture and system optimization</span>.
</p>

    </motion.section>
  );
}
