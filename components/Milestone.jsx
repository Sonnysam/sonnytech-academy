import React from "react";
import Image from "next/image";
import k from "../public/30k.jpeg";

const Milestone = () => {
  return (
    <div className="mx-5 my-5">
      <h1 className="text-3xl font-bold text-center text-white mb-3">Channel Milestones 🎉</h1>
      <div className="flex justify-center items-center">
        <Image
          src={k}
          alt="Thank you"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
        />
      </div>
      <div className="flex justify-center items-center mt-3">
        <h1 className="text-base text-white mx-1">
          Thank y'all fam for your support to my channel. We've just hit a
          milestone of <span className="text-[#FFDE57] font-bold">30,000</span> views! Here's to many milestones to come!
        </h1>
      </div>
    </div>
  );
};

export default Milestone;
