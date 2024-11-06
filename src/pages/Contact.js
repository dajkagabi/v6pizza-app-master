import React from "react";
import mobile from "../assets/tog.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${mobile})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name" type="text"></input>

          <label htmlFor="email">E-mail</label>
          <input name="e-mail" placeholder="Enter e-mail..." type="email" />

          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>

          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
