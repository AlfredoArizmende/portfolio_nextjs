import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import mySkills from "@/data/skills.json";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl px-5 sm:px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-lg sm:text-2xl">
        Habilidades
      </h3>

      <div className="grid grid-cols-4 gap-3 md:gap-7 lg:gap-4">
        {mySkills.map((mySkill) => (
          <Skill key={mySkill.id} name={mySkill.name} image={mySkill.image} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
