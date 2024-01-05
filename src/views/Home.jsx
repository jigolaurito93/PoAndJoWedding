import React from "react";
import LandingHero from "../components/LandingHero";
import DateAndVenue from "../components/DateAndVenue";
import FillerFlowers from "../components/FillerFlowers";
import Program from "../components/Program";

function Home() {
  return (
    <div>
      <LandingHero />
      <DateAndVenue />
      <FillerFlowers />
      <Program />
    </div>
  );
}

export default Home;
