import React from "react";
import logo from "../assets/P.png";

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="w-full h-16 items-center"
    >
      <ul className="flex w-full h-full justify-evenly items-center">
        <li>
          <a href="#heroContainer">Home</a>
        </li>
        <li>
          <a href="#weddingDetails">Venue</a>
        </li>
        <li>
          <a href="#program">Program</a>
        </li>
        <li>
          <a href="#attirePage">Attire</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </div>
  );
}
