import Image from "next/image";
import B from "../public/buymecoffee.png";

const Buy = () => {
  return (
    <div className="mt-5 flex justify-center items-center text-white">
      <a
        href="https://www.buymeacoffee.com/sonnytech"
        className="bg-yellow-300 p-3 fixed m-3 bottom-0 right-0 rounded-full text-base font-bold hover:bg-yellow-400 animate-bounce cursor-pointer"
      >
        <Image
          src={B}
          alt="Picture of the me"
          width={30}
          height={30}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="rounded-full"
        />
      </a>
    </div>
  );
};

export default Buy;