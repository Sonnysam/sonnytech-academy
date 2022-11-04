import Image from "next/image";
import Me from "../public/me.png";

const About = () => {
  return (
    <div className="mx-5 mt-12 ">
      <section className="flex flex-col items-center justify-center">
        <Image
          src={Me}
          alt="Picture of the me"
          width={50}
          height={50}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="rounded-full"
        />
        <p className="text-2xl font-bold text-white">Agbenyo Samuel</p>
        <small className="text-xs text-gray-400">Developer & content creator</small>
      </section>
    </div>
  );
}

export default About