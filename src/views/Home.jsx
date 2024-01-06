import React from "react";
import LandingHero from "../components/LandingHero";
import DateAndVenue from "../components/Venue";
import FillerFlowers from "../components/FillerFlowers";
import Program from "../components/Program";
import Navbar from "../components/Navbar";
import Rsvp from "../components/Rsvp";
import BellPoster from "../components/BellPoster";
import Attire from "../components/Attire";
import CocktailLogo from "../components/CocktailLogo";
import Faq from "../components/Faq";

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
      <CocktailLogo />
      <Faq />
      <Rsvp />
    </div>
  );
}

export default Home;
