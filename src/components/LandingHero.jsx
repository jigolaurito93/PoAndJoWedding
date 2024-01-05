import React, { Component } from "react";
import flowers from "../assets/flowers.png";

function LandingHero() {
  return (
    <div className="w-full min-h-screen px-3 pt-52" id="heroContainer">
      <div className="flex flex-col justify-center items-center  gap-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl">Polo and Joie</h1>
        <h2 className="text-5xl mt-3 mb-16 md:text-6xl lg:text-7xl">
          together forever
        </h2>
        <h2 className="text-4xl">6 . 11 . 24</h2>
        <div className="absolute bottom-0">
          <img src={flowers} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
