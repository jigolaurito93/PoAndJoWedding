import React from "react";
import envelope from "../assets/envelope1.png";
import arrow from "../assets/arrow.png";

export default function Rsvp() {
  return (
    <div className="px-14 py-16 flex justify-center w-full" id="rsvp">
      <div className="flex flex-col gap-24 justify-center items-center relative">
        <h3 className="text-5xl">
          it would be an honor to celebrate our special day with you! please let
          us know if you can come
        </h3>
        <div>
          <div className="flex justify-start mb-14">
            <h5 className="text-4xl -rotate-12">RSVP here</h5>
            <img src={arrow} alt="" className=" rotate-90 w-1/4 hidden" />
          </div>
          <a
            href="https://withjoy.com/poloandjoie/rsvp"
            className="hover:shadow-2xl shadow-purple-800 w-3/4"
          >
            <img
              src={envelope}
              alt=""
              className="-rotate-12 hover:rotate-2 duration-300 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
