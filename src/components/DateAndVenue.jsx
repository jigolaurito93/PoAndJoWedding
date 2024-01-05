import React from "react";
import weddingRing from "../assets/wedding ring.png";

function DateAndVenue() {
  return (
    <div
      id="weddingDetails"
      className="flex gap-14 justify-center items-center py-20"
    >
      <div>
        <img src={weddingRing} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3>Eleventh of June, Tuesday</h3>
        <h4>at the</h4>
        <h3>Farm Hills Garden</h3>
        <div>
          <h4>Barangay</h4>
          <h4>Silang, Cavite</h4>
          <h4>Philippines</h4>
        </div>
        <h3>Three O'Clock</h3>
        <h4>in the afternoon</h4>
      </div>
    </div>
  );
}

export default DateAndVenue;
