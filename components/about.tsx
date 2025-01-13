"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

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
        I'm a guy who <span className="underline">loves</span> to work with{" "}
        <span className="font-medium">Typescript, Node and React.</span> Besides
        that, <span className="italic">Web Security</span> it's an area that
        I've always had passion learning about. Currently I work as a{" "}
        <span className="font-medium">Full Stack developer</span>, although my
        main knowledge and preference to work is on Back end. Solve problems in
        the most clean way that I can it's what I like to do. I can learn fast
        and I love it. Also, I'm a{" "}
        <span className="underline">Computer Science student</span>. Teach me!
      </p>
    </motion.section>
  );
}
