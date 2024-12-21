import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import confetti from "canvas-confetti";

import OLWLogo from '../assets/images/OLW-logo.png';

const SubscriptionPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const launchConfetti = () => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none"; 
    canvas.style.zIndex = 5000; 
    document.body.appendChild(canvas);

    const confettiInstance = confetti.create(canvas, { resize: true });
    confettiInstance({
      particleCount: 150,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
    });

    setTimeout(() => {
      document.body.removeChild(canvas);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mailchimp form action URL
    const formActionUrl = 'https://ewcdubai.us10.list-manage.com/subscribe/post?u=058998e159fa07b048e1e01f4&id=042fede18a&f_id=003b33e2f0';

    const formData = new FormData();
    formData.append('EMAIL', email);

    // Send the email to Mailchimp using fetch
    fetch(formActionUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true); // Show success message
          launchConfetti(); // Trigger confetti animation
          setTimeout(() => {
            setEmail(''); // Reset email field
            setSuccess(false); // Hide success message
            onClose(); // Close popup after 5 seconds
          }, 5000);
        } else {
          setSuccess(true);
          launchConfetti(); // Trigger confetti animation
          setTimeout(() => {
            setEmail(''); // Reset email field
            setSuccess(false); // Hide success message
            onClose(); // Close popup after 5 seconds
          }, 5000);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setSuccess(true);
        launchConfetti(); // Trigger confetti animation
          setTimeout(() => {
            setEmail(''); // Reset email field
            setSuccess(false); // Hide success message
            onClose(); // Close popup after 5 seconds
          }, 5000);
      });
  };

  if (!isOpen) return null; // Don't render if popup is not open

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          <CgClose />
        </button>
        {!success ? (
          <form onSubmit={handleSubmit} className="popup-form">
            <img src={OLWLogo} alt="OLW Logo" className="popup-logo" />
            <h2>SStay informed, stay healthy!</h2>
            <p className="popup-content">
              Subscribe to OneLife Wellness and get expert tips on medical insights, healthy lifestyles, and routines—your ultimate life manual. Be the first to know when we go live!
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Notify Me</button>
          </form>
        ) : (
          <div className="popup-success">
            <h2>Congrats!</h2>
            <p>Your email has been successfully submitted.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPopup;
