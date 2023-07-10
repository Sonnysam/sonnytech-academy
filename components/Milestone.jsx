import React from "react";
import Image from "next/image";
// import k from "../public/30k.jpeg";
import K from "../public/50k.png";

const Milestone = () => {
  return (
    <div className="mx-5 my-5">
      <h1 className="mb-2 flex justify-center items-center text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
          Channel <span className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text ml-2">Milestone</span>{""}🎉
        </h1>
      <div className="flex justify-center items-center">
        {/* <Image
          src={k}
          alt="Thank you"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
        /> */}
         <Image
          src={K}
          alt="Thank you"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
        />
      </div>
      <div className="flex justify-center items-center mt-3">
        <h1 className="text-sm sm:text-base md-text-xl lg:text-xl text-gray-400 mx-1">
          Thank y'all fam for your support to my channel. We've just hit a
          milestone of <span className="text-[#FFDE57] font-bold">50,000+</span> views! Here's to many milestones to come!
        </h1>
      </div>
    </div>
  );
};

export default Milestone;
