const Footer = () => {
  return (
    <div className="mx-5 mt-12 flex flex-col justify-center items-center text-gray-500">
      <h1>
        Developed with ❤️ by{" "}
        <a
          href="https://github.com/Sonnysam"
          className="hover:text-[#FFDE57] cursor-pointer text-sm"
        >
          Samuel Agbenyo
        </a>
      </h1>
      <h6 className="text-xs my-1 hover:text-[#FFDE57]">
        © {new Date().getFullYear()} {" "}
        <a href="https://www.youtube.com/@SonnyTechAcademy" className="cursor-pointer hover:text-[#FFDE57]">
        Sonnytech Academy Labs. All Rights Reserved.
        </a>
      </h6>
    </div>
  );
};

export default Footer;
