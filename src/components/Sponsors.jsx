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
      <div>
        <img src={mbtoken} alt="mbtoken" />
      </div>
      <div>
        <img src={metamask} alt="metamask" />
      </div>
      <div>
        <img src={opensea} alt="opensea" />
      </div>
    </section>
  );
};

export default Sponsors;
