const roundedButton = ({ title }) => {
    return (
      <div className="mt-5 flex justify-center items-center text-white">
        <a
          href="https://www.youtube.com/@SonnyTechAcademy"
          className="bg-yellow-300 px-16 py-5 rounded-full text-base font-bold hover:bg-yellow-400 cursor-pointer"
        >
          {title}
        </a>
      </div>
    );
  };
  
  export default roundedButton;
  