import "./contact.css";

import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const onSubmit = async (event) => {
    setMessage(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0d60bc2c-ca47-4361-9ebc-5651d015bc85");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    event.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided 😊
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ajitinfotech28@gmail.com</h5>
            <a href="mailto:ajitinfotech28@gmail.com">Send a message</a>
          </article>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP 😊</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
