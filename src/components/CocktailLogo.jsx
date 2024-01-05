import React from "react";
import cocktailLogo from "../assets/cocktail-logo.png";

export default function CocktailLogo() {
  return (
    <div id="cocktailLogo">
      <div className="flex justify-center">
        <img src={cocktailLogo} alt="" />
      </div>
    </div>
  );
}
