import React from "react";

import one from "../images/hero-left-1.svg";
import two from "../images/hero-left-2.svg";
import three from "../images/hero-right-1.svg";
import four from "../images/hero-left-2.svg";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-col xl:flex-row p-4 pt-8   md:py-[100px] md:px-[20px]   lg:px-[100px] gap-8 md:gap-6">
      <div className="flex flex-col gap-[27px] md:gap-[48px] text-[#434343] flex-1">
        <h1 className=" lg:w-[646px] md:w-[536px]  text-[30px] sm:text-[40px] lg:text-[56px] md:leading-[58px] lg:leading-[78px] ">
          Rent a <span className="text-[#a02279]">Place</span> away from <br />
          <span className="text-[#a02279]">Home</span> in the{" "}
          <span className="text-[#a02279]">Metaverse</span>
        </h1>
        <p className=" lg:w-[636px] md:w-[536px] md:h-[102px] md:text-[24px] md:leading-[35px]">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          {" "}
          <form className="h-[54px] flex">
            <input
              type="text"
              placeholder="Search for location"
              className="bg-[rgba(247, 247, 247, 0.1] border border-[#A3A3A3] md:w-[390px] flex items-center px-2"
              style={{
                borderRadius: "8px 0px 0px 8px",
              }}
            />
            <button
              type="submit"
              className="flex items-center md:w-[230px] text-white px-2 md:px-6"
              style={{
                background:
                  "linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)",
                borderRadius: " 0px 8px  8px  0px",
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-1   min-h-[460px] gap-1 justify-center  ">
        <div className=" flex flex-col justify-end gap-1 items-center md:items-start ">
          <div className="w-[234px] h-[176px]">
            <img src={one} alt="" />
          </div>
          <div className="w-[234px] h-[176px]">
            <img src={two} alt="" />
          </div>
        </div>
        <div className=" h-full flex flex-col justify-start gap-1 items-center md:items-start  ">
          <div className="w-[234px] h-[176px]">
            <img src={three} alt="" />
          </div>
          <div className="w-[234px] h-[176px]">
            <img src={four} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
