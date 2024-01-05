import React, { Component } from "react";
import flowers from "../assets/flowers.png";

function LandingHero() {
  return (
    <div className="w-full h-screen border-2 border-black" id="heroContainer">
      <div className="flex flex-col justify-center items-center px-3 pt-[50%]">
        <h1 className="text-6xl md:text-8xl lg:text-9xl">Polo and Joie</h1>
        <h2 className="text-5xl mt-3 mb-36 md:text-6xl lg:text-7xl">
          together forever
        </h2>
        <img src={flowers} alt="" />
        <h1></h1>
      </div>
    </div>
  );
}

export default LandingHero;
