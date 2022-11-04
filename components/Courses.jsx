import Image from "next/image";
import Me from "../public/me.png";
import PC from "../public/pc.png";
import D from "../public/d.png";
import W from "../public/w.png";
import WB from "../public/wb.png";
import DE from "../public/de.png";
import M from "../public/m.png";

const Courses = () => {
  return (
    <section className="mt-5 mx-16">
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
        <div className="my-auto">
          <strong className="text-3xl text-white flex justify-center items-center">
            Mobile Development
          </strong>
          <p className="text-gray-400 mt-2 flex justify-center items-center">
            learn to build cross platform mobile apps with react native and
            flutter for free.
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
          <strong className="text-3xl flex justify-center items-center text-white">
            Web Development
          </strong>
          <p className="flex justify-center items-center text-gray-400 mt-2">
            learn to be a master of the web from scratch.
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
          <strong className="text-3xl flex justify-center items-center text-white">UI/UX</strong>
          <p className="flex justify-center items-center text-gray-400 mt-2">
            learn to use Adobe XD & Figma for free.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Courses;
