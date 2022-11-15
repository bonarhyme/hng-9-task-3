import React from "react";
import mbtoken from "../images/mbtoken.svg";
import metamask from "../images/metamask.svg";
import opensea from "../images/opensea.svg";

const Sponsors = () => {
  return (
    <section
      className="h-[70px] flex justify-around items-center "
      style={{
        background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
      }}
    >
      <div className="flex gap-4">
        <img src={mbtoken} alt="mbtoken" className="w-[100px] sm:w-[222px]" />
      </div>
      <div>
        <img src={metamask} alt="metamask" className="w-[100px] sm:w-[222px]" />
      </div>
      <div>
        <img src={opensea} alt="opensea" className="w-[100px] sm:w-[222px]" />
      </div>
    </section>
  );
};

export default Sponsors;
