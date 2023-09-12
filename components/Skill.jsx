import Image from "next/image";
import React from "react";

const Skill = ({ name, image }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        src={image}
        width={250}
        height={250}
        alt={name}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 filter group-hover:grayscale transition ease-in-out duration-300"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition ease-in-out duration-300 group-hover:bg-white w-20 h-20 sm:w-24 sm:h-24 lg:h-28 lg:w-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm sm:text-lg font-bold text-black opacity-100">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
