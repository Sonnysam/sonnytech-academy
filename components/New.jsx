import Image from "next/image";
import PC from "../public/pc.png";

const New = () => {
  return (
    <div className="mt-12 mx-w-48">
      <h1 className="mb-2 flex justify-center items-center text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
        Latest{" "}
        <span
          className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text ml-2"
        >
          Release
        </span>
        {""}🚀
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
      <h6 className="flex justify-center items-center text-gray-500 text-xs font-medium mt-3">
        Don't forget to Subscribe if you haven't 😁
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
        ></iframe>

        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/ycx4rqC2AC0"
          title="Beginner Guide to Reusable Components and Clean Code in React Native 👨🏿‍💻✅"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="md:w-[6] h-[14] md:mx-2 "
        ></iframe> */}
        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/aEw0O5t-Gg8"
          title="Master Flexbox in React Native: The Ultimate Guide 🚀"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="md:w-[6] h-[14] md:mx-2 my-2"
        ></iframe>

        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/ycx4rqC2AC0"
          title="Beginner Guide to Reusable Components and Clean Code in React Native 👨🏿‍💻✅"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="md:w-[6] h-[14] md:mx-2 "
        ></iframe>
      </section>
    </div>
  );
};

export default New;
