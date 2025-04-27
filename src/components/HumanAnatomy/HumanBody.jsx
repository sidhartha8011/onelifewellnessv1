import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import humanbody from "../../assets/images/human-anatomy/humanbody.png";
import heartLine from "../../assets/images/human-anatomy/heart-line.png";
import stomachLine from "../../assets/images/human-anatomy/stomach-line.png";
import muscleLine from "../../assets/images/human-anatomy/muscle-line.png";
import brainLine from "../../assets/images/human-anatomy/brain-line.png";
import bladderLine from "../../assets/images/human-anatomy/bladder-line.png";
import AnatomyCard from "./AnatomyCard";

function HumanBody({ organType }) {
  const [activePoint, setActivePoint] = useState(null);

  const handlePointClick = (pointName) => {
    setActivePoint(activePoint === pointName ? null : pointName);
    organType(activePoint === pointName ? null : pointName);
  };

  // Helper function to get the appropriate line image and positioning
  const getLineImageDetails = (pointName) => {
    // Map each point to its line image and manual positioning
    // You can adjust these values directly for precise positioning
    const lineDetails = {
      brain: {
        src: brainLine,
        className: "absolute top-[-4.5%] left-[47.5%] w-[250px]", // Adjust these values manually
      },
      heart: {
        src: heartLine,
        className: "absolute top-[10%] left-[48.6%] w-[255px]", // Adjust these values manually
      },
      "muscle-arm": {
        src: muscleLine,
        className: "absolute top-[19%] left-[54.5%] w-[250px]", // Adjust these values manually
      },
      stomach: {
        src: bladderLine,
        className: "absolute top-[29%] left-[47.7%] w-[250px] ", // Adjust these values manually
      },
      bladder: {
        src: bladderLine,
        className: "absolute top-[36%] left-[47.2%] w-[250px]", // Adjust these values manually
      },
    };

    return lineDetails[pointName] || null;
  };

  const AnatomyPoint = ({ top, left, name, label }) => (
    <div
      className={`absolute ${top} ${left} cursor-pointer transition-all duration-300 z-10 transform hover:scale-110`}
      onClick={() => handlePointClick(name)}
    >
      <motion.div
        className={`w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center ${
          activePoint === name ? "ring-2 ring-blue-500" : ""
        }`}
        whileTap={{ scale: 0.9 }}
        animate={activePoint === name ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`w-2 h-2 rounded-full ${
            activePoint === name ? "bg-red-500" : "bg-blue-600"
          } absolute`}
          animate={
            activePoint === name
              ? { backgroundColor: "#ef4444" }
              : { backgroundColor: "#2563eb" }
          }
          transition={{ duration: 0.3 }}
        ></motion.div>
      </motion.div>
      <div className="w-4 h-4 rounded-full bg-white shadow-md absolute animate-ping opacity-30"></div>
      {/* Label display removed */}
    </div>
  );

  // Get active line image details
  const activeLineDetails = activePoint
    ? getLineImageDetails(activePoint)
    : null;

  return (
    <div className="w-full absolute mx-auto flex justify-center ">
      <img
        src={humanbody}
        alt="Human anatomy"
        className="w-[41%] !-mt-20 !-ml-22 "
      />

      {/* Brain */}
      <AnatomyPoint
        top="top-[-2.4%]"
        left="left-[47.3%]"
        name="brain"
        label="Brain"
      />

      {/* Heart */}
      <AnatomyPoint
        top="top-[14.5%]"
        left="left-[48.3%]"
        name="heart"
        label="Heart"
      />

      {/* Stomach */}
      <AnatomyPoint
        top="top-[31%]"
        left="left-[47.5%]"
        name="stomach"
        label="Stomach"
      />

      {/* Bladder */}
      <AnatomyPoint
        top="top-[36.6%]"
        left="left-[46.5%]"
        name="bladder"
        label="Bladder"
      />

      {/* Muscles */}
      <AnatomyPoint
        top="top-[20%]"
        left="left-[54%]"
        name="muscle-arm"
        label="Muscles"
      />

      {/* Display the active line with animation */}
      <AnimatePresence>
        {activeLineDetails && (
          <motion.img
            src={activeLineDetails.src}
            alt={`${activePoint} line`}
            className={`z-0 ${activeLineDetails.className}`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default HumanBody;
