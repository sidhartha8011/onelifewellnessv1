import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    purpose: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.purpose || !formData.message) {
      setErrorMessage("All fields are required");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post("http://51.112.95.57:4000/send-email", formData);
      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (error) {
      setErrorMessage("Failed to send the form. Please try again.");
      console.error("Form submission error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="olw-contact bottom-100 flex-col align-center">
      <div className="bottom-50"></div>
      <div className="contact-us-form-container">
        <div className="olw-form-container">
          {/* Heading with fade-in-up animation */}
          <motion.div 
            className="contact-form-heading"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1>
              Get in <span className="light-blue-color">Touch</span>
            </h1>
            <p>
              Feel free to reach out to us with any inquiries, feedback, or support requests.
            </p>
          </motion.div>

          {!submitted ? (
            <div>
              <form onSubmit={handleSubmit} className="contact-us-form">
                
                {/* Inputs with fade-in-up animation */}
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {/* Phone Number Input with Country Code Dropdown */}
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    required
                  />
                </motion.div>

                <motion.select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <option value="" disabled selected>
                    Purpose of Contact
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </motion.select>

                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                />

                {/* Button with fade-in-up animation */}
                <motion.button 
                  type="submit" 
                  className="submit-button" 
                  disabled={loading}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  {loading ? "Sending..." : "SEND"}
                </motion.button>
              </form>

              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          ) : (
            <div className="thank-you-message">
              <h2>Thank you for contacting us!</h2>
              <p>We’ve received your information and will get back to you soon.</p>
            </div>
          )}

        </div>

        {/* Map with fade-in animation */}
        <motion.div 
          className="google-maps-container"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            className="google-maps-preview"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubai+(One%20Life%20Wellness)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
