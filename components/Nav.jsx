import Image from "next/image";
import Me from "../public/me.png"
import { GoVerified } from "react-icons/go";


const Nav = () => {
  return (
    <nav className="py-3 mb-12 flex justify-between text-white">
      <h1 className="text-xl font-extrabold flex items-center lg:text-3xl md:text-2xl sm:text-2xl">
        Sonnytech Academy
        <span className="text-sky-300 ml-1 text-xl">
          <GoVerified />
        </span>
      </h1>

      <ul className="flex items-center">
        <li>
          <a href="https://www.youtube.com/@SonnyTechAcademy">
            <Image
              src={Me}
              alt="Picture of the me"
              width={70}
              height={70}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="rounded-full p-3 animate-pulse"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
