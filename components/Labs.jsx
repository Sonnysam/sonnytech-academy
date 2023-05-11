import React from "react";


const Labs = () => {
  return (
    <>
      <div className="my-3 flex flex-col justify-center items-center mx-5">
        <h1 className="mb-2 text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
          Introducing <span className="text-2xl font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text">SA Labs</span>{""}🎉
        </h1>
        <p className="text-white text-base sm:text-base md-text-xl lg:text-xl">
          <span className="text-[#FFDE57] font-bold">
            {" "}
            Sonnytech Academy Labs
          </span>{" "}
          is a space in Sonnytech Academy dedicated to the development and
          testing of software and also building open source projects for the
          community. It provides resources, mentorship, internships and guidance
          to entrepreneurs and startups looking to develop their ideas into
          successful products.
        </p>
        {/* <br /> */}
        <div>
          <h1 className="text-[#FFDE57] text-2xl font-bold mt-3 flex justify-center items-center ">Join the wait list</h1>
          <p className="text-white text-base sm:text-base md-text-xl lg:text-xl">
            We are currently working on the first batch of projects and we will
            be opening the lab to the public soon. If you are interested in
            joining the wait list, please subscribe to our newsletter.
          </p>
          {/* <form className="flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Name"
              className="w-72 h-10 rounded-lg mt-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-72 h-10 rounded-lg mt-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-72 h-10 rounded-lg mt-3"
            />
            <button className="w-72 h-10 rounded-lg mt-3 bg-[#FFDE57] text-white">
              Submit
            </button>
          </form> */}
        </div>
      </div>
      {/* <section className="mx-3 mt-5">
        <div>
          <h1 className="text-white text-2xl font-bold mt-3">
            Some of our focus areas
          </h1>
          <p>
            <ul className="text-[#FFDE57] hover:cursor-pointer text-base sm:text-base md-text-xl lg:text-xl">
              <li>Tech Girl Child Education</li>
              <li>Development and Testing</li>
              <li>Product Management</li>
              <li>Prototyping and Design</li>
              <li>Quality Assurance</li>
              <li>User Experience (UX) Design</li>
            </ul>
          </p>
        </div>
      </section> */}
    </>
  );
};

export default Labs;
