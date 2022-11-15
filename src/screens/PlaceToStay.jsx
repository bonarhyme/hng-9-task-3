import React from "react";
import Inspiration from "../components/Inspiration";
import settings from "../images/settings.svg";

const filterer = [
  "Restaurant",
  "Cottage",
  "Castle",
  "fantast city",
  "beach",
  "carbins",
  "off-grid",
];

const PlaceToStay = () => {
  return (
    <main className="">
      <div className="flex  pt-10 mx-4 md:px-[100px] flex-wrap gap-6   mt-8 mb-12 items-center justify-between">
        {filterer.map((x) => {
          return (
            <div key={x} className>
              {x}
            </div>
          );
        })}

        <div
          className="flex border justify-between w-[161px] h-[48px] items-center px-2"
          style={{
            background:
              "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%",
            border: "1px solid #B4B4B4",
            borderRadius: "8px",
          }}
        >
          <div>Location</div>
          <div>
            <img src={settings} alt="settings" />
          </div>
        </div>
      </div>

      <Inspiration home={false} />
    </main>
  );
};

export default PlaceToStay;
