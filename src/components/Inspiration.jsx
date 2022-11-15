import React, { useEffect, useState } from "react";
import { inspirationData } from "../data/sampleInspiration";
import SingleInspiration from "./SingleInspiration";

const Inspiration = ({ home = true }) => {
  const [inspirations, setInspirations] = useState([]);

  useEffect(() => {
    setInspirations(inspirationData);
  }, []);

  return (
    <section
      className={` ${
        home ? "md:py-[100px] pt-10" : "pb-[20px]"
      } md:px-[20px]    mb-8 `}
    >
      {home ? (
        <h1
          className=" text-[28px] md:text-[48px]  text-black text-center mb-10"
          style={{
            fontWeight: "700",
            fontFamily: "cursive",
          }}
        >
          Inspiration for your next adventure
        </h1>
      ) : null}

      <div
        className="flex flex-wrap justify-center gap-3 "
        style={{
          rowGap: "1rem",
        }}
      >
        {home && inspirations && inspirations.length > 0
          ? inspirations
              .filter((x, i) => i < 8)
              .map((x, i) => {
                return (
                  <SingleInspiration
                    key={i}
                    image={x.image}
                    title={x.title}
                    distance={x.distance}
                    pay={x.pay}
                    available={x.available}
                  />
                );
              })
          : null}

        {!home && inspirations && inspirations.length > 0
          ? inspirations.map((x, i) => {
              return (
                <SingleInspiration
                  image={x.image}
                  title={x.title}
                  distance={x.distance}
                  pay={x.pay}
                  available={x.available}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export default Inspiration;
