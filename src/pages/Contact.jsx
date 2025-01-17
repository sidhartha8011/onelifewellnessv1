import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { MdOutlineAttachEmail } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    purpose: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const [errorMessage, setErrorMessage] = useState(""); // To display errors
  const [loading, setLoading] = useState(false); // To manage loading state

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle phone number change
  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.purpose || !formData.message) {
      setErrorMessage("All fields are required");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Clear any previous errors

    try {
      // Send form data to the backend API using axios
      const response = await axios.post("http://localhost:5000/send-email", formData);

      if (response.status === 200) {
        setSubmitted(true); // Set submitted to true to show the thank you message
      }
    } catch (error) {
      // Handle errors during the API request
      setErrorMessage("Failed to send the form. Please try again.");
      console.error("Form submission error: ", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="olw-contact bottom-100 flex-col align-center">
      <div className="contact-us-form-container">
        <div className="olw-form-container">
          <div className="contact-form-heading">
            <h1>
              Get in <span className="light-blue-color">Touch</span>
            </h1>
            <p>
              Feel free to reach out to us with any inquiries, feedback, or support requests.
            </p>
          </div>

          {!submitted ? (
            <div>
              <form onSubmit={handleSubmit} className="contact-us-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                
                {/* Phone Number Input with Country Code Dropdown */}
                <PhoneInput
                  international
                  defaultCountry="US" // Default country code (can be changed)
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  required
                />
                
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
                    Purpose of Contact
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? "Sending..." : "SEND"}
                </button>
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

        <div className="google-maps-container">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
