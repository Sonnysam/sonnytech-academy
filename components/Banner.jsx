const Banner = () => {
  return (
    <section className="flex justify-center items-center mt-5">
      <div>
        {/* <p className="text-white text-2xl lg:text-5xl md:text-3xl sm:text-xl font-extrabold">
          Featured Free Courses 
        </p> */}
        <h1 className="mb-2 flex justify-center items-center text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
        Featured Free{" "}
        <span
          className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text ml-2"
        >
          Courses
        </span>
        {""}😎
      </h1>
        
      </div>
      
    </section>
  );
};

export default Banner;
