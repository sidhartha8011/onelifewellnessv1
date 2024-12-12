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

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      console.log(email);
      launchConfetti(); // Trigger confetti on success
      setTimeout(() => {
        setEmail("");
        setSuccess(false);
        onClose(); // Close popup after 3 seconds
      }, 5000);
    }, 1000);
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          <CgClose />
        </button>
        {!success ? (
          <form onSubmit={handleSubmit} className="popup-form">
            <img src={OLWLogo} alt="" className="popup-logo" />
            <h2>Subscribe to Notify</h2>
            <p className="popup-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad nemo soluta ut explicabo modi</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
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
