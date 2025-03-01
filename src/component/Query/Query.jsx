import React, { useState } from "react";
import "./Query.css"; // Ensure you have this CSS file

const Query = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/send_email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error sending email"+ error.message);
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Send an Email</h2>
      <form onSubmit={sendEmail} className="email-form">
        <div className="input-group">
          <input
            type="tel"
            name="name"
            placeholder="Your Phone Number"
            value={formData.name}
            pattern="[0-9]{10}"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="body"
          placeholder="Your Message"
          value={formData.body}
          onChange={handleChange}
          required
        />
        <button type="submit" className="send-btn" disabled={loading}>
          {loading ? "Sending..." : "Send Email"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Query;
