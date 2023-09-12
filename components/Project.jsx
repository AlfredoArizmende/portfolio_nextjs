import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Project = ({ name, image, description, link }) => {
  const MotionImage = motion(Image);

  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 lg:p-44 h-full sm:h-screen">
      <MotionImage
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={image}
        width={800}
        height={387}
        alt={name}
        className="w-4/5 lg:w-2/3 xl:w-1/2"
      />
      <div className="space-y-5 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl sm:text-3xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">{name}</span>
        </h4>

        <p className="text-base sm:text-lg text-center md:text-left">
          {description}
        </p>

        <div className="text-center">
          <Link target="_blank" href={link}>
            <button className="px-3 py-2 border border-white rounded-full uppercase text-sm sm:text-base tracking-widest text-white transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              Visitar proyecto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
