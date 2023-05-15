import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Subscribe = () => {
  const form = useRef();

  const sendMsg = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hmxk7y8",
        "template_j6vewro",
        form.current,
        "VtWPjDfzCqDzP1bY3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="mt-5 flex justify-center items-center mx-2">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-white">
          Subscribe to our newsletter
        </h1>
        <p className="text-center text-white text-sm">
          Get the latest news and updates from Sonnytech Academy
        </p>
        <form ref={form} onSubmit={sendMsg}>
          <div className="flex flex-col items-center md:mx-2 sm:mx-2">
            <input
              type="text"
              name="user_email"
              placeholder="Enter your email address"
              className="mt-5 w-96 h-10 border-2 border-gray-200 outline-none rounded-md p-2"
            />

            <button
              type="submit"
              className="mt-5 bg-[#FFDE57] text-white w-96 h-10 rounded-md"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
