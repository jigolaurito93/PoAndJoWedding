import React from "react";
import logo from "../assets/P.png";

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="flex w-full fixed top-0 h-16 items-center border-2"
    >
      <div className="w-1/4 pl-5">
        <a href="#heroContainer">
          <img src={logo} alt="" className="w-12 rounded-full" />
        </a>
      </div>
      <ul className="flex gap-24 w-3/4 justify-center">
        <li className="">
          <a href="#heroContainer">Home</a>
        </li>
        <li>
          <a href="#weddingDetails">Venue</a>
        </li>
        <li>
          <a href="#program">Program</a>
        </li>
        <li>
          <a href="">Attire</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
    </div>
  );
}
