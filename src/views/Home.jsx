import React from "react";
import LandingHero from "../components/LandingHero";
import DateAndVenue from "../components/Venue";
import FillerFlowers from "../components/FillerFlowers";
import Program from "../components/Program";
import Navbar from "../components/Navbar";
import Rsvp from "../components/Rsvp";
import BellPoster from "../components/BellPoster";
import Attire from "../components/Attire";

function Home() {
  return (
    <div>
      <LandingHero />
      <Navbar />
      <DateAndVenue />
      <FillerFlowers />
      <Program />
      <BellPoster />
      <Attire />
      <Rsvp />
    </div>
  );
}

export default Home;
