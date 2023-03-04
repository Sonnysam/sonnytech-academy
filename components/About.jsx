import Image from "next/image";
import Me from "../public/me.png";
import L from "../public/linkedin.png";
import T from "../public/twitter.png";
import Y from "../public/sub.gif";
import G from "../public/github.png";

const About = () => {
  return (
    <div className="mx-5 mt-12 ">
      <section className="flex flex-col items-center justify-center">
        <h1 className="flex justify-center items-center mb-6 text-white text-4xl font-bold">
          About Me
        </h1>
        <Image
          src={Me}
          alt="Picture of the me"
          width={60}
          height={60}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="rounded-full"
        />
        <p className="text-xl font-bold text-white">Agbenyo Samuel</p>
        <small className="text-xs text-gray-400">
          Developer & content creator
        </small>
        <p className="text-base text-white mx-1">
          <span className="flex justify-center items-center my-1">Hello there 👋</span>
          I'm Samuel Agbenyo, but my dad calls me Sonny. I'm a mobile and web developer. I found love for
          tech during my second year of junior high school and immediately
          developed interest in it. I'm very thankful to God almighty and the
          people around me who have helped me come this far with my career as a
          developer. I'm also passionate about sharing the little knowledge I
          have with everyone interested in learning to become a developer like
          me. Keep going and never give up!
        </p>
        <p className="flex mt-3 mb-2 text-gray-400 font-bold text-base">
          Let's get social 😎
        </p>
        <div className="flex mb-3">
          <a href="https://github.com/Sonnysam">
            <Image
              src={G}
              alt="Picture of the me"
              width={30}
              height={30}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="rounded-full mx-1 animate-bounce p-1"
            />
          </a>
          {/* <a href="https://www.youtube.com/@SonnyTechAcademy">
            <Image
              src={Y}
              alt="Picture of the me"
              width={30}
              height={30}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="rounded-full mx-1 animate-bounce p-1"
            />
          </a> */}
          <a href="https://twitter.com/AgbenyoOfficial">
            <Image
              src={T}
              alt="Picture of the me"
              width={30}
              height={30}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="rounded-full mx-1 animate-bounce p-1"
            />
          </a>
          <a href="https://www.linkedin.com/in/samuel-agbenyo-963580202/">
            <Image
              src={L}
              alt="Picture of the me"
              width={30}
              height={30}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="rounded-full mx-1 animate-bounce p-1"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About