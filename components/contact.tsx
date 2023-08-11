"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          emersonlucenaoficial@gmail.com
        </a>{" "}
        or through my{" "}
        <a
          target="_blank"
          className="underline"
          href="https://www.linkedin.com/in/emerson67"
        >
          LinkedIn page
        </a>
        .
      </p>

      <br />
      <br />
      <br />
      <br />

      <SectionHeading>Enjoy my songs :D</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        <a
          target="_blank"
          className="underline"
          href="https://soundcloud.com/erms1337"
        >
          Sound Cloud
        </a>
        .
      </p>
    </motion.section>
  );
}
