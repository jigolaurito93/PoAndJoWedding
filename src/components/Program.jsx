import React from "react";

function Program() {
  const programV = [
    {
      title: "Ceremony",
      time: "3:30pm",
      message:
        "Please arrive at least an hour before to park your vehicles, find your seats and get settled before the program starts.",
    },
    {
      title: "Cocktail Hour",
      time: "5:00pm",
      message:
        "Relax, take photos and enjoy some refreshments while waiting for the couple and their families to finish taking photos!",
    },
    {
      title: "Reception",
      time: "6:00pm",
      message:
        "It’s time to celebrate with good food, great music and lots of dancing! Don’t forget to let us know if you have any food restrictions!",
    },
  ];
  return (
    <div id="program" className="min-h-screen py-3 px-4">
      {programV.map((program, i) => {
        return (
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 lg:gap-28 my-20 xl:gap-36"
            key={i}
          >
            <div
              className={`${
                i % 2 == 1 ? "lg:order-1" : ""
              } flex flex-col justify-center items-center`}
            >
              <h3 className="text-5xl md:text-5xl lg:text-6xl">{program.title}</h3>
              <div className="w-60 mt-3 bg-black h-[.5px] rounded-full"></div>
              <h4 className="mt-6 md:text-xl">{program.time}</h4>
            </div>
            <p className="w-64 text-center md:text-lg">{program.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Program;
