import React, { Component } from "react";
import flowers from '../assets/flowers.png'

function LandingHero() {
  return (
    <div className="w-full h-[100%]" id="heroContainer">
      <div className="flex flex-col justify-center items-center mt-20">
        <h1>Polo and Joie</h1>
        <h2 className="-mt-16">together forever</h2>
        <img src={flowers} alt="" />
        <h1></h1>
      </div>
    </div>
  );
}

export default LandingHero;
