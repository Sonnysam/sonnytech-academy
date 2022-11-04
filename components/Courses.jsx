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
    <section className="mt-24 mx-3">
      <article className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image
            src={M}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[50vh] lg:w-[30vw] md:flex lg:flex"
          />
        </div>
        <div>
          <strong className="text-3xl text-center">ABOUT US</strong>
          <p className="flow-root ... max-w-md text-gray-600 mt-3">
            Vision Board Realty Limited (VBRL) is an organisation committed and
            dedicated to assisting our clients, both local and abroad, find
            their ideal homes and properties. <br /> Our focus is to ensure that
            the purchasing, rental or management process is seamless for our
            clients by providing options that meet their needs while remaining
            professionals and delivering excellence.
          </p>
        </div>
      </article>

      <article className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image
            src={W}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[50vh] lg:w-[30vw] md:flex lg:flex"
          />
        </div>
        <div>
          <strong className="text-3xl text-center">ABOUT US</strong>
          <p className="flow-root ... max-w-md text-gray-600 mt-3">
            Vision Board Realty Limited (VBRL) is an organisation committed and
            dedicated to assisting our clients, both local and abroad, find
            their ideal homes and properties. <br /> Our focus is to ensure that
            the purchasing, rental or management process is seamless for our
            clients by providing options that meet their needs while remaining
            professionals and delivering excellence.
          </p>
        </div>
      </article>

      <article className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image
            src={D}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[50vh] lg:w-[30vw] md:flex lg:flex"
          />
        </div>
        <div>
          <strong className="text-3xl text-center">ABOUT US</strong>
          <p className="flow-root ... max-w-md text-gray-600 mt-3">
            Vision Board Realty Limited (VBRL) is an organisation committed and
            dedicated to assisting our clients, both local and abroad, find
            their ideal homes and properties. <br /> Our focus is to ensure that
            the purchasing, rental or management process is seamless for our
            clients by providing options that meet their needs while remaining
            professionals and delivering excellence.
          </p>
        </div>
      </article>

      <article className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image
            src={M}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[50vh] lg:w-[30vw] md:flex lg:flex"
          />
        </div>
        <div>
          <strong className="text-3xl text-center">ABOUT US</strong>
          <p className="flow-root ... max-w-md text-gray-600 mt-3">
            Vision Board Realty Limited (VBRL) is an organisation committed and
            dedicated to assisting our clients, both local and abroad, find
            their ideal homes and properties. <br /> Our focus is to ensure that
            the purchasing, rental or management process is seamless for our
            clients by providing options that meet their needs while remaining
            professionals and delivering excellence.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Courses;
