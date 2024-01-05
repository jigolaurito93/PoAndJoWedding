import React from "react";
import fillerFlowers from "../assets/fillerflowers.png";

export default function FillerFlowers() {
  return (
    <div id="fillerF" className="flex justify-center w-full border-3 border-black">
      <img className="h-fit my-48" src={fillerFlowers} alt="" />
    </div>
  );
}
