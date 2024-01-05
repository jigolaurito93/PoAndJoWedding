import React from "react";
import attire from "../assets/attire-wedding.png";

export default function Attire() {
  return (
    <div
      className="px-12 py-20 min-h-screen flex justify-center items-center"
      id="attirePage"
    >
      <div className="lg:flex flex-row lg:gap-12 xl:gap-5">
        <div className="flex flex-col justify-center items-center gap-7 xl:w-1/2">
          <h3 className="text-xl font-quicksand md:text-2xl">COME IN YOUR BEST</h3>
          <h2 className="text-5xl md:text-7xl font-semibold lg:text-6xl xl:text-8xl">Garden Formal</h2>
          <h3 className="font-quicksand text-xl md:text-2xl">ATTIRE</h3>
          <p className="text-lg md:text-xl text-center max-w-96">
            The brighter, the better. Please avoid dark colors strictly no black
            or white! Feel free to choose from our color palette:
          </p>
          <div className="flex gap-2 rounded-full border-2 w-fit px-4 py-2 bg-white mb-12">
            <div className="w-10 h-10 rounded-full" id="colorPal1"></div>
            <div className="w-10 h-10 rounded-full" id="colorPal2"></div>
            <div className="w-10 h-10 rounded-full" id="colorPal3"></div>
            <div className="w-10 h-10 rounded-full" id="colorPal4"></div>
            <div className="w-10 h-10 rounded-full" id="colorPal5"></div>
            <div className="w-10 h-10 rounded-full" id="colorPal6"></div>
          </div>
        </div>
        <div className="max-w-lg xl:max-w-6xl xl:w-1/2">
          <img src={attire} alt="image here" />
        </div>
      </div>
    </div>
  );
}
