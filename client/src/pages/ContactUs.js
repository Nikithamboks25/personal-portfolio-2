import axios from 'axios';
import { useState } from 'react';
import './../styles/ContactUs.css'; 

const ContactForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', emailData);
      alert('Email sent!');
    } catch (error) {
      alert('Failed to send email');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Recipient's Email"
            value={emailData.to}
            onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={emailData.subject}
            onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            value={emailData.text}
            onChange={(e) => setEmailData({ ...emailData, text: e.target.value })}
            required
          />
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
