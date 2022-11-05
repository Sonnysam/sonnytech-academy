const Footer = () => {
  return (
    <div className="mx-5 mt-12 flex flex-col justify-center items-center text-white">
      <h1>
        Developed with ❤️ by{" "}
        <a
          href="https://github.com/Sonnysam"
          className="hover:text-slate-900 cursor-pointer text-sm"
        >
          Samuel Agbenyo
        </a>
      </h1>
      <h6 className="text-xs my-1">
        © {new Date().getFullYear()} <span className="mx-1">||</span>{" "}
        <a href="https://www.youtube.com/@SonnyTechAcademy" className="hover:text-slate-900 cursor-pointer">
          Sonnytech Academy
        </a>
      </h6>
    </div>
  );
};

export default Footer;
