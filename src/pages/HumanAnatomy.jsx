import React, { useState } from "react";
import "../App.css";
import AnatomyTitle from "../components/HumanAnatomy/AnatomyTitle";
import InputFields from "../components/HumanAnatomy/InputFields";
import HumanBody from "../components/HumanAnatomy/HumanBody";
import CallToAction from "../components/CallToAction";
import AnatomyCard from "../components/HumanAnatomy/AnatomyCard";

function HumanAnatomy() {
  const [organType, setOrganType] = useState(null);

  console.log(organType);

  return (
    <div className="w-full overflow-hidden">
      <AnatomyTitle />
      <div className="lg:!px-10 !p-5 relative w-full !py-16 !mb-40">
        <div
          className="w-full rounded-2xl !px-8 flex justify-between h-[400px] lg:h-[800px]"
          style={{
            backgroundImage: "linear-gradient(to right, #E7ECF1, #ADFB49)",
          }}
        >
          <InputFields />
          <HumanBody organType={setOrganType} />
          {organType && <AnatomyCard organType={organType} />}
        </div>
      </div>
      <CallToAction
        title="Ready to Grow With Us?"
        description="Take the next step in your wellness journey. Dive deeper into our specialized programs, browse our expert articles, or get personal guidance tailored to your needs."
        buttonText="Explore Insights"
        buttonLink="/insights"
      />
    </div>
  );
}

export default HumanAnatomy;
