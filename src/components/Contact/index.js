import React, { useState } from "react";
import "./styles.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const handleSubmit = event => {
    console.log("heree");
    const templateId = "template_dBShjcin";
    sendFeedback(templateId, {
      message_html: message,
      from_name: name,
      reply_to: email
    });
  };

  return (
    <div className="contact">
      <form className="contact-form">
        <h1>Contact me</h1>
        <input
          className="input"
          type="text"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          className="input"
          type="text"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={e => setMessage(e.target.value)}
          placeholder="Write message here"
          required
          value={message}
        />
        <input
          type="button"
          value="SUBMIT"
          className="btn"
          onClick={e => handleSubmit(e)}
        />
      </form>
    </div>
  );
};

export default Contact;
