import React from "react";
import LandingHero from "../components/LandingHero";
import DateAndVenue from "../components/Venue";
import FillerFlowers from "../components/FillerFlowers";
import Program from "../components/Program";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="">
      <Navbar />
      <LandingHero />
      <DateAndVenue />
      <FillerFlowers />
      <Program />
    </div>
  );
}

export default Home;
