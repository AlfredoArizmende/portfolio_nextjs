import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceCard = () => {
  const MotionImage = motion(Image);

  return (
    <>
      <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[350px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-8 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <MotionImage
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="/Toogether.WEBP"
          width={200}
          height={200}
          alt="Toogether"
          className="w-20 h-20 rounded-full lg:w-24 lg:h-24 object-cover object-center"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-2xl lg:text-3xl font-light">
            Front-End Developer
          </h4>
          <p className="font-bold text-xl mt-1">Toogether</p>
          <div className="flex space-x-2 my-2">
            <Image
              src="/react.WEBP"
              width={250}
              height={250}
              alt="React"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/javascript.WEBP"
              width={250}
              height={250}
              alt="JavaScript"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/bootstrap.WEBP"
              width={250}
              height={199}
              alt="Bootstrap"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/css.WEBP"
              width={250}
              height={250}
              alt="CSS"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/github.WEBP"
              width={250}
              height={250}
              alt="GitHub"
              className="w-7 h-7 object-cover"
            />
          </div>
          <p className="uppercase py-3 text-gray-300">Marzo - Abril 2023</p>

          <ul className="list-disc space-y-2 ml-5 pl-5 text-base lg:text-lg">
            <li>Implementación de seguridad mediante Tokens</li>
            <li>Creación de páginas nuevas para su sitio web</li>
            <li>Corrección de bugs y estilos para iOS y Android</li>
          </ul>
        </div>
      </article>

      <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[350px] sm:w-[500px] md:w-[600px]  xl:w-[900px] snap-center bg-[#292929] p-8 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <MotionImage
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="/ev.WEBP"
          width={250}
          height={250}
          alt="Enfoque Visionario"
          className="w-20 h-20 rounded-full lg:w-24 lg:h-24 object-cover object-center"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-2xl lg:text-3xl font-light">
            Jefe de Sistemas y Webmaster
          </h4>
          <p className="font-bold text-xl mt-1">Enfoque Visionario</p>
          <div className="flex space-x-2 my-2">
            <Image
              src="/wordpress.webp"
              width={250}
              height={250}
              alt="WordPress"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/elementor.webp"
              width={250}
              height={250}
              alt="Elementor"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/thrive-themes.webp"
              width={250}
              height={250}
              alt="Thrive Themes"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/divi.webp"
              width={250}
              height={250}
              alt="Divi"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/clickfunnels-icon.webp"
              width={250}
              height={210}
              alt="ClickFunnels"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/html.WEBP"
              width={250}
              height={250}
              alt="HTML"
              className="w-7 h-7 object-cover"
            />
            <Image
              src="/css.WEBP"
              width={250}
              height={250}
              alt="CSS"
              className="w-7 h-7 object-cover"
            />
          </div>
          <p className="uppercase py-3 text-gray-300">
            Enero 2014 - Octubre 2021
          </p>

          <ul className="list-disc space-y-2 ml-5 pl-5 pr-5 text-base lg:text-lg h-32 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
            <li>Creación de páginas web</li>
            <li>Rediseño de sitios web en WordPress</li>
            <li>Implementación de plataformas</li>
            <li>Creación de estrategias</li>
            <li>Marketing Digital</li>
            <li>Manejo de métricas</li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default ExperienceCard;
