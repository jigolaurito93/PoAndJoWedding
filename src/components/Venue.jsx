import React from "react";
import weddingRing from "../assets/wedding ring.png";

function DateAndVenue() {
  return (
    <div
      id="weddingDetails"
      className="flex flex-col h-screen gap-9 lg:gap-16 lg:flex-row lg:py-28 xl:gap-28 justify-center items-center py-20"
    >
      <div>
        <img src={weddingRing} alt="" className="w-52 xl:w-72" />
      </div>
      <div className="flex gap-4 flex-col justify-center items-center md:gap-7">
        <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
          Eleventh of June, Tuesday
        </h3>
        <h4 className="tracking-wider md:text-2xl">at the</h4>
        <h3 className="text-3xl  md:text-5xl lg:text-6xl xl:text-7xl">Farm Hills Garden</h3>
        <div className="tracking-wider md:text-2xl">
          <h4>Barangay</h4>
          <h4>Silang, Cavite</h4>
          <h4>Philippines</h4>
        </div>
        <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Three O'Clock</h3>
        <h4 className="tracking-wider md:text-2xl">in the afternoon</h4>
      </div>
    </div>
  );
}

export default DateAndVenue;
