import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './Contact.css';

// EmailJS template must contain these exact variable names:
// {{firstName}}, {{lastName}}, {{email}}, {{phone}}, {{message}}
const SERVICE_ID  = 'service_hb2anp9';
const TEMPLATE_ID = 'template_ue3k7k9';
const PUBLIC_KEY  = 'UqXG16shAwWG2S-Ne';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
        setErrorMsg(error?.text || error?.message || 'Unknown error — check console for details.');
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

            {status === 'success' && (
              <p className="contact-status contact-status--success">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-status contact-status--error">
                Failed to send: {errorMsg}
              </p>
            )}

            <div className="flex-center bottom">
              <button type="submit" className="btn primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
