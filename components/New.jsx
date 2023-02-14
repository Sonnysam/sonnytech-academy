import Image from "next/image";
import PC from "../public/pc.png";

const New = () => {
  return (
    <div className="mt-12 mx-w-48">
      <h1 className="flex justify-center items-center mb-2 text-white text-4xl font-bold">
        Latest Releases 🚀
      </h1>

      {/* <div className="flex justify-center items-center">
        <Image
          src={PC}
          alt="Picture of the me"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
        />
      </div> */}
      <h6 className="flex justify-center items-center text-white text-sm font-medium my-4">
        Don't forget to{" "}
        <a href="https://www.youtube.com/@SonnyTechAcademy">
          {" "}
          <span className="bg-red-500 px-2 rounded-md mx-2 cursor-pointer py-1">
            Subscribe
          </span>
        </a>{" "}
        if you haven't 😁
      </h6>

      <section className="flex flex-wrap  justify-center items-center">
        {/* <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/L0J7giCn0l0"
          title="How to add Password visibility toggle in React Native Expo 🚀"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="md:w-[6] h-[14] md:mx-2 my-2"
        ></iframe> */}
        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/2uJlOgfl8Fs"
          title="GitHub fundamentals for Beginners 🚀"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="md:w-[6] h-[14] md:mx-2 my-2"
        ></iframe>

        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/lfSqauDmRxM"
          title="How to collaborate on a project on Github"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="md:w-[6] h-[14] md:mx-2"
        ></iframe>
      </section>
    </div>
  );
};

export default New;
