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
      <h3 className="flex justify-center items-center mt-2 mb-4 text-white font-bold text-sm">
        Subscribe to our newsletter & receive the latest updates
      </h3>
      <section className=" ">
        <form
          ref={form}
          onSubmit={sendMsg}
          className=" flex
        flex-col
        justify-center
        items-center
        w-full p-2"
        >
          <label className="text-white font-base flex justify-start">Name</label>
          <div className="border-2 py-2 px-3 rounded mb-4 bg-[#E2F1F6]">
            <input
              type="text"
              name="user_name"
              className="outline-none border-none bg-transparent py-2 overflow-hidden w-96"
            />
          </div>
          <label className="text-white font-base flex justify-start">
            Email
          </label>
          <div className="border-2 py-2 px-3 rounded  bg-[#E2F1F6]">
            <input
              type="email"
              name="user_email"
              className="outline-none border-none bg-transparent py-2 overflow-hidden w-96"
            />
          </div>
          <div className="flex justify-start mt-1 w-96">
            <input type="checkbox" name="" id="" />
            <h5 className="text-white font-bold text-sm ml-2">
              Send me weekly emails only
            </h5>
          </div>

          <div className="border-none py-4 px-3 mt-4 rounded mb-4 bg-yellow-300 flex justify-center items-center">
            <button
              type="submit"
              placeholder="Subscribe"
              className="outline-none border-none font-bold text-white text-xl bg-transparent overflow-hidden w-96"
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
