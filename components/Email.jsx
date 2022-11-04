import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <form ref={form} onSubmit={sendMsg}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Email;