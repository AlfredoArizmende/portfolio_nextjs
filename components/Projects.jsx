import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const MotionImage = motion(Image);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-lg sm:text-2xl">
        Proyectos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 lg:p-44 h-full sm:h-screen">
          <MotionImage
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/OBRSite.WEBP"
            width={800}
            height={387}
            alt="Ocean Reef Bue"
            className="w-4/5 lg:w-2/3 xl:w-1/2"
          />
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl sm:text-3xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Sitio Web Ocean Reef Bue
              </span>
            </h4>

            <p className="text-base sm:text-lg text-center md:text-left">
              Sitio web profesional creado para dar a conocer un servicios de
              “estacionamiento” para barcos mediante el uso de boyas que además
              tiene como objetivo cuidar los ecosistemas marinos, fue creado
              mediante las tecnologías Next.js, React y Tailwind CSS.
            </p>

            <div className="text-center">
              <Link target="_blank" href="https://ocean-reef-blue.vercel.app/">
                <button className="px-3 py-2 border border-white rounded-full uppercase text-sm sm:text-base tracking-widest text-white transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
                  Visitar proyecto
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 lg:p-44 h-full sm:h-screen">
          <MotionImage
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/DaniSite.WEBP"
            width={800}
            height={387}
            alt="Fotógrafa Daniela"
            className="w-4/5 lg:w-2/3 xl:w-1/2"
          />
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl sm:text-3xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Sitio Web Fotógrafa Daniela
              </span>
            </h4>

            <p className="text-base sm:text-lg text-center md:text-left">
              Sitio web profesional creado para dar a conocer la larga
              trayectoria de esta talentosa fotógrafa además de que por medio de
              este, también da a conocer sus servicios, galerías y testimonios
              de su trabajo. Este sitio fue creado con WordPress y Elementor.
            </p>

            <div className="text-center">
              <Link target="_blank" href="https://danielasan.com/">
                <button className="px-3 py-2 border border-white rounded-full uppercase text-sm sm:text-base tracking-widest text-white transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
                  Visitar proyecto
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 lg:p-44 h-full sm:h-screen">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/LizSite.webp"
            width={800}
            height={387}
            alt="Coach Elizabeth León"
            className="w-4/5 lg:w-2/3 xl:w-1/2"
          />
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl sm:text-3xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Página Coach Elizabeth León
              </span>
            </h4>

            <p className="text-base sm:text-lg text-center md:text-left">
              Página web creada con el objetivo de hacer que muchas personas
              entraran y se registraran en un taller online con el fin de dar
              información de valor y al final poner en marcha una estrategia de
              ventas. Esta página fue creada con WordPress y Elementor para el
              diseño, WebinarJam para transmitir en vivo y ActiveCampaign para
              almacenar todos los contactos.
            </p>

            <div className="text-center">
              <Link target="_blank" href="https://leonelizabeth.com/">
                <button className="px-3 py-2 border border-white rounded-full uppercase text-sm sm:text-base tracking-widest text-white transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
                  Visitar proyecto
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 lg:p-44 h-full sm:h-screen">
          <MotionImage
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/AbogadaSite.WEBP"
            width={800}
            height={387}
            alt="Abogada Raquel"
            className="w-4/5 lg:w-2/3 xl:w-1/2"
          />
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl sm:text-3xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Sitio Web Abogada Raquel
              </span>
            </h4>

            <p className="text-base sm:text-lg text-center md:text-left">
              Sitio web profesional creado para dar a conocer todos los
              servicios que ofrece y busca llegar a muchas personas que
              necesiten de su experiencia por medio de internet. Este sitio fue
              creado con WordPress y Elementor.
            </p>

            <div className="text-center">
              <Link target="_blank" href="https://abogadaraquel.com/">
                <button className="px-3 py-2 border border-white rounded-full uppercase text-sm sm:text-base tracking-widest text-white transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
                  Visitar proyecto
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
