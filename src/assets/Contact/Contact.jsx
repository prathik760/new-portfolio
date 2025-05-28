import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_hb2anp9',          // Your Gmail-connected EmailJS Service ID
      'template_ue3k7k9',         // Updated Template ID here
      formData,                   // Data to send
      'UqXG16shAwWG2S-Ne'         // Your EmailJS Public Key
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="column contact-options">
          <h1 className="heading-1">
            <span className="gradient-text">Let's work together</span>
          </h1>
          <p className="muted">
            I'm currently open to new projects. Feel free to reach out for collaborations, freelance work, or just to say hello!
          </p>
          <div className="options">
            <div className="flex-option">
              <div className="flex-center icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span>prathikthelkar760@gmail.com</span>
            </div>
            <div className="flex-option">
              <div className="flex-center icon-wrapper">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <span>+91 6361770366</span>
            </div>
            <div className="flex-option">
              <div className="flex-center icon-wrapper">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>

        <div className="column contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="control"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="control"
                required
              />
            </div>
            <div className="flex row">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="control"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="control"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="control"
              rows={6}
              required
            ></textarea>
            <div className="flex-center bottom">
              <button type="submit" className="btn primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
