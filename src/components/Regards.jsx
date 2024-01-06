import React from "react";
import loveLetter from "../assets/love-polo-and-joie.png";

export default function Regards() {
  return (
    <div className="flex justify-center pb-40 lg:py-56" id="regards">
      <div className="w-5/6 md:w-2/3 lg:w-[50%] xl:w-[40%] duration-500 hover:-rotate-2 hover:scale-110">
        <img src={loveLetter} alt="" />
      </div>
    </div>
  );
}
