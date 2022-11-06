import Image from "next/image";
import PC from "../public/pc.png";

const New = () => {
  return (
    <div className="mt-12 mx-w-48">
      <h1 className="flex justify-center items-center mb-2 text-white text-4xl font-bold">
        Latest Releases 🚀
      </h1>

      <div className="flex justify-center items-center">
        <Image
          src={PC}
          alt="Picture of the me"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
        />
      </div>
      <h6 className="flex justify-center items-cente text-white text-base font-medium mb-3">
        Don't forget to <a href="https://www.youtube.com/@SonnyTechAcademy"> <span className="bg-red-500 px-2 rounded-md mx-2 cursor-pointer py-1">Subscribe</span></a> if you haven't 😁
      </h6>

      <section className="flex flex-wrap  justify-center items-center mx-2">
        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/5UlvfxQvH2A"
          title="How to make phone call in React Native Expo (Open Phone Dialer)🚀"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="m-3 md:w-[6] h-[14]"
        ></iframe>

        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/66iA7TenmwU"
          title="How To Integrate Paystack payment into  React Native (using expo) 🚀🚀"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="md:w-[6] h-[14]"
        ></iframe>
      </section>
    </div>
  );
};

export default New;
