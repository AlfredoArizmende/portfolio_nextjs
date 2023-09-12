import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:k.arizmende@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-lg sm:text-2xl">
        Contacto
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl sm:text-3xl font-semibold text-center">
          Hagamos cosas{" "}
          <span className="decoration-[#F7AB0A]/50 underline">increíbles</span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-lg">+52 442 443 9746</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-lg">k.arizmende@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-lg">Quéretaro, México</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Nombre"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Asunto"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Mensaje"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] px-5 py-5 rounded-md text-black font-bold text-lg uppercase tracking-widest"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
