import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const Email = () => {
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
    <article>
      <h1 className="flex justify-center items-center mt-5 text-white font-bold text-3xl">
        Let’s keep in touch
      </h1>
      <h3 className="flex justify-center items-center mt-2 mb-4 mx-3 text-white font-bold text-sm">
        Subscribe to our newsletter
      </h3>
      <section className="mx-6 mx-w-64">
        <form
          ref={form}
          onSubmit={sendMsg}
          className=" flex
        flex-col
        justify-center
        items-center
         p-2"
        >
          {/* <label className="text-white font-base flex justify-start">
            Name
          </label> */}
          <div className="border-2 py-2 px-3 rounded mb-4 bg-[#E2F1F6]">
            <input
              type="text"
              placeholder="Enter your name"
              name="user_name"
              className="outline-none border-none bg-transparent py-2 overflow-hidden w-64"
            />
          </div>
          {/* <label className="text-white font-base flex justify-start">
            Email
          </label> */}
          <div className="border-2 py-2 px-3 rounded bg-[#E2F1F6]">
            <input
              type="email"
              placeholder="Enter your email address"
              name="user_email"
              className="outline-none border-none bg-transparent py-2 overflow-hidden w-64"
            />
          </div>
          <div className="flex justify-start mt-1 w-64">
            <input type="checkbox" name="" id="" />
            <h5 className="text-white font-bold text-xs ml-2">
              Send me weekly emails only
            </h5>
          </div>

          <div className="border-none py-4 px-3 mt-4 rounded mb-4 bg-yellow-300 flex justify-center items-center">
            <button
              type="submit"
              placeholder="Subscribe"
              className="outline-none border-none font-bold text-white text-xl bg-transparent overflow-hidden w-64"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </article>
  );
};

export default Email;
