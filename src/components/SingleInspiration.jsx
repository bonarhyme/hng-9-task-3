import React from "react";

import { FaStar, FaHeart } from "react-icons/fa";

const SingleInspiration = ({ image, title, distance, pay, available }) => {
  return (
    <article
      className="text-[#434343] flex flex-col  border justify-between items-center py-3 gap-3 "
      style={{
        width: "292px",
        height: "372x",
        borderRadius: "15px",
        background: "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
        border: "1px solid #D7D7D7",
      }}
    >
      <div className="relative">
        <img
          src={image}
          alt=""
          style={{
            width: "260px",
            maxHeight: "265px",
            // borderRadius: "15px",
            // border: "1px solid #D7D7D7",
          }}
        />

        <FaHeart className="absolute top-2 right-2" size={16} color="#D7D7D7" />
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[12px] leading-[13px] ">{title}</p>
          <p className="text-[12px] leading-[13px] ">{distance}</p>
          <div className="flex gap-2">
            <FaStar size={12} color="#a02279" />
            <FaStar size={12} color="#a02279" />
            <FaStar size={12} color="#a02279" />
            <FaStar size={12} color="#a02279" />
            <FaStar size={12} color="#a02279" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] leading-[13px] font-bold">{pay}</p>
          <p className="text-[12px] leading-[13px] ">{available}</p>
        </div>
      </div>
    </article>
  );
};

export default SingleInspiration;
