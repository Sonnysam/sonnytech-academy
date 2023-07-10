import Image from "next/image";
import Me from "../public/me.png";
import PC from "../public/pc.png";
import D from "../public/d.png";
import W from "../public/w.png";
import WB from "../public/wb.png";
import DE from "../public/de.png";
import M from "../public/m.png";
// import React, { useEffect } from "react";
// import AOS from "aos";

const Courses = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <section className="mt-5 mx-5 lg:mx-15 md:mx-12">
      <article className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image
            src={M}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
          />
        </div>
        <div className="my-auto" data-aos="fade-left">
        <h1 className="mb-2 flex justify-center items-center text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
          Mobile <span className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text ml-2">Development</span>{""}📱
        </h1>
          <p className="text-gray-400 mt-2  text-sm sm:text-base md-text-xl lg:text-xl flex justify-center items-center">
            Learn mobile app development for iOS and Android. Build responsive,
            user-friendly, and high-performance mobile applications. Master the
            latest techniques, frameworks, and tools for captivating mobile
            experiences.
          </p>
        </div>
      </article>

      <article className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image
            src={W}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
          />
        </div>
        <div className="my-auto">
         <h1 className="mb-2 flex justify-center items-center text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
          Web <span className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text ml-2">Development</span>{""}🌐
        </h1>
          <p className="flex justify-center items-center text-sm sm:text-base md-text-xl lg:text-xl text-gray-400 mt-2">
            Explore web development for modern, dynamic, and interactive
            websites. Master HTML, CSS, JavaScript, and popular frameworks like
            React, Angular, and Vue.js. Create responsive web applications with
            front-end design and back-end development.
          </p>
        </div>
      </article>

      <article className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image
            src={D}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
          />
        </div>
        <div className="my-auto">
        <h1 className="mb-2 flex justify-center items-center text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
          UI / <span className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text ml-2">UX</span>{""}🎨
        </h1>
          <p className="flex justify-center items-center text-sm sm:text-base md-text-xl lg:text-xl text-gray-400 mt-2">
            Master UI/UX principles for exceptional user experiences. Learn
            user-centered design, wireframing, prototyping, and user research.
            Create intuitive, visually appealing interfaces for delightful user
            interactions.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Courses;
