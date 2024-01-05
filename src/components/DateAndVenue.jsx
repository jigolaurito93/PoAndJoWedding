import React from "react";
import weddingRing from "../assets/wedding ring.png";

function DateAndVenue() {
  return (
    <div id="weddingDetails" className="flex  justify-center">
      <div>
        <img src={weddingRing} alt="" />
      </div>
      <div>
        <h3>Eleventh of June, Tuesday</h3>
        <h4>at the</h4>
        <h2>Farm Hills Garden</h2>
        <div>
          <h3>Barangay</h3>
          <h3>Silang, Cavite</h3>
          <h3>Philippines</h3>
        </div>
        <h2>Three O'Clock</h2>
        <h4>in the afternoon</h4>
      </div>
    </div>
  );
}

export default DateAndVenue;
