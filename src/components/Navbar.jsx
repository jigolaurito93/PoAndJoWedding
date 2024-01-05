import React from "react";
import logo from "../assets/P.png";

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="w-full sticky top-0 h-16 justify-center items-center lg:flex hidden"
    >
      <ul className="flex gap-56 justify-center">
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
