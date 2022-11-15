import React from "react";
import pitch from "../images/pitch.svg";

const Pitch = () => {
  return (
    <section
      className="flex flex-col md:flex-row py-10 md:py-[100px] px-3 md:px-[100px]"
      style={{
        background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
        rowGap: "3rem",
      }}
    >
      <div className="flex-1 text-white">
        <h2 className="text-[28px] md:text-[48px] leading-[60px]   mb-10 font-bold">
          {" "}
          Metabnb NFTs
        </h2>
        <p className="text-[18px] mb-10 leading-[35px] max-w-[415px]">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <div>
          <button
            className="h-[48px] w-[156px] rounded-[8px] text-[#a02279]"
            style={{
              background:
                " linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
            }}
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="flex-1 w-full max-w-[704px]">
        <div>
          <img
            src={pitch}
            alt="pitch"
            className="w-full"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Pitch;
