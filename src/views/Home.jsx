import React from "react";
import LandingHero from "../components/LandingHero";
import DateAndVenue from "../components/DateAndVenue";
import FillerFlowers from "../components/FillerFlowers";

function Home() {
  return (
    <div>
      <LandingHero />
      <DateAndVenue />
      <FillerFlowers />
    </div>
  );
}

export default Home;
