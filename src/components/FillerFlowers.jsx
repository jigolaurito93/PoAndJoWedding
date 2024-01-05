import React from "react";
import fillerFlowers from "../assets/fillerflowers.png";

export default function FillerFlowers() {
  return (
    <div id="fillerF" className="flex justify-center  border-3 border-black">
      <img className="w-48 my-32" src={fillerFlowers} alt="" />
    </div>
  );
}
