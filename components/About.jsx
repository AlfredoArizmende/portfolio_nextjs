import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const MotionImage = motion(Image);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-lg sm:text-2xl">
        Sobre mi
      </h3>

      <MotionImage
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/AlfredoAbout.webp"
        width={1200}
        height={801}
        alt="Alfredo Arizmende"
        className="-mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg w-32 h-32 sm:w-40 sm:h-40 md:w-[250px] md:h-[350px] lg:w-[380px] lg:h-[420px]"
      />

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Un poco <span className="underline decoration-[#F7AB0A]/50">de</span>{" "}
          mi
        </h4>
        <p className="text-base lg:text-lg">
          Soy Alfredo, desarrollador web apasionado por crear sitios web
          increíbles, funcionales y centrados en las necesidades del usuario.
          Con más de 7 años de experiencia trabajando en WordPress y
          constructores como Elementor, DIVI y ClickFunnels puedo sentirme
          orgulloso de que puedo transformar cualquier diseño en sitios web
          elegantes, eficientes y totalmente responsivos con los dispositivos
          actuales. Con el objetivo de perfeccionar mis habilidades, ahora
          cuento con experiencia creando sitios web con frameworks como React,
          Next.js, TailwindCSS entre otras tecnologías, aprovechando todo su
          potencial para crear sitios con una calidad fuera de este mundo.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
