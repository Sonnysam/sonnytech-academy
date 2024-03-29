import Image from "next/image";
import Me from "../public/me.png"
import { GoVerified } from "react-icons/go";


const Nav = () => {
  return (
    <nav className="px-5 py-1 flex justify-between text-white bg-slate-800">
      <h1 className="text-base cursor-pointer font-extrabold flex items-center lg:text-3xl md:text-2xl sm:text-xl">
        Sonnytech Academy
        <span className="text-[#FFDE57] ml-1 text-base lg:text-lg ">
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
              className="rounded-full p-3"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
