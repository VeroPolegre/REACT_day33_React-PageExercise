import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const initialValue = {
    name: "",
    email: "",
    message: "",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [submitFeedback, setSubmitMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (data.name.length < 3) {
      setSubmitMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setSubmitMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage("Thanks for contacting!");
    setTimeout(() => {
      setData(initialValue);
      navigate("/");
    }, 3000);
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-h1">Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          id="name"
          onChange={handleInputChange}
          value={data.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="email@example.com"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={data.email}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          placeholder="Your message..."
          id="message"
          onChange={handleInputChange}
          value={data.message}
          rows="6"
          maxLength={255}
        />
        <button type="submit" disabled={btnDisabled} className="submit-btn">
          Send Message
        </button>
      </form>
      <div className="submit-feedback">{submitFeedback}</div>
    </div>
  );
};

export default Contact;
