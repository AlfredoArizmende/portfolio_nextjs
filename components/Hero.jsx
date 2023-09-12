import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hola, Soy Alfredo Arizmende",
      "<HombreQueAmaProgramar />",
      "Y-Crear-Sitios-Web-Increíbles.jsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/AlfredoHero1.webp"
        width={500}
        height={500}
        priority
        alt="Alfredo Arizmende"
        className="relative rounded-full h-32 w-32 lg:w-36 lg:h-36 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] sm:tracking-[13px] lg:tracking-[15px]">
          Front-End Developer
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre mi</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiencia</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Proyectos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
