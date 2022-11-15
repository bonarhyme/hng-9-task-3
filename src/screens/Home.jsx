import React from "react";
import Hero from "../components/Hero";
import Inspiration from "../components/Inspiration";
import Pitch from "../components/Pitch";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <main>
      <Hero />
      <Sponsors />
      <Inspiration />
      <Pitch />
    </main>
  );
};

export default Home;
