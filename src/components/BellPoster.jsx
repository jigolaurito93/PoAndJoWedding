import React from "react";
import weddingBell from "../assets/wedding-bell.png";

export default function BellPoster() {
  return (
    <div className="flex justify-center py-16 lg:py-36" id="bellPoster">
      <div>
        <img src={weddingBell} alt="" />
      </div>
    </div>
  );
}
