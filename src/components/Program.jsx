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
    <div id="program" className="py-32 px-44">
      {programV.map((program, i) => {
        return (
          <div className="flex justify-center items-center gap-28 my-20" key={i}>
            <div
              className={`${
                i % 2 == 1 ? "order-1" : ""
              } flex flex-col justify-center items-center`}
            >
              <h3 className="">{program.title}</h3>
              <h4>{program.time}</h4>
            </div>
            <p className="w-64 text-center">{program.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Program;
