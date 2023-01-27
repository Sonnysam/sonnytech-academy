import React from "react";

const Labs = () => {
  return (
    <>
      <div className="my-3 flex flex-col justify-center items-center mx-2">
        <h1 className="mb-2 text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
          Introducing{" "}
          <span className="text-[#FFDE57]">S A Labs</span>🎉
        </h1>
        <p className="text-white text-base sm:text-base md-text-xl lg:text-xl">
        <span className="text-[#FFDE57] font-bold"> Sonnytech Academy Labs</span>  is a space in Sonnytech Academy dedicated to
          the development and testing of software and also building open source
          projects for the community. It provides resources, mentorship,
          internships and guidance to entrepreneurs and startups looking to
          develop their ideas into successful products. <br /> The lab offers
          access to the latest technology, tools, and resources needed to create
          innovative software solutions. It also provides a collaborative
          environment for entrepreneurs to network with other like-minded
          individuals and share ideas.
        </p>
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
