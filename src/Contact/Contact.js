import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact-us">
      <h1>Talk To Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        consectetur.
      </p>
      <div className="contact__main">
        <div className="contact__address">
          <h2>Keep in touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iusto
            voluptate? Ut corrupti ipsum nulla inventore qui! Molestiae, ratione
            repellendus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            ratione.
          </p>
        </div>
        <div className="contact__form">
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <br />
            <textarea
              name="message"
              cols="70"
              rows="10"
              placeholder="Your Message"
            />
            <br />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
