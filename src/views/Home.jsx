import React from "react";
import LandingHero from "../components/LandingHero";
import DateAndVenue from "../components/Venue";
import FillerFlowers from "../components/FillerFlowers";
import Program from "../components/Program";
import Navbar from "../components/Navbar";
import Rsvp from "../components/Rsvp";
import BellPoster from "../components/BellPoster";

function Home() {
  return (
    <div>
      <LandingHero />
      <Navbar />
      <DateAndVenue />
      <FillerFlowers />
      <Program />
      <BellPoster />
      <Rsvp />
    </div>
  );
}

export default Home;
