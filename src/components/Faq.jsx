import React from "react";

export default function Faq() {
  const faqs = [
    {
      title: "Plus ones",
      content:
        "Due to the limited capacity of our venue, we are unable to accommodate additional guests unless specified on your invitation.",
    },
    {
      title: "Arrival",
      content:
        "The ceremony will begin at 3:30pm. Please arrive at least half an hour prior to the ceremony to park and find your seat.",
    },
    {
      title: "Dress Code",
      content:
        "We’d love for our guests to dress up with us! Since our ceremony will be located in the garden, we encourage the ladies to wear cocktail to tea-length dresses and avoid wearing stilettos! Following our color palette is much appreciated as well.",
    },
    {
      title: "Children",
      content:
        "As much as we’d love to have kids celebrating with us, we have decided to keep our wedding adult-only with the exception of immediate family. We encourage you to make this evening a date night!",
    },
    {
      title: "RSVP",
      content:
        "Please let us know if you’ll be able to celebrate with us to help us finalize the number of guests for our wedding. We’d appreciate a response no later than May 25.",
    },
    {
      title: "More questions?",
      content:
        "If anything is unclear, feel free to message Polo at 09175914763 and Joie at 09178665803",
    },
  ];
  return (
    <div id="faq" className="py-16 px-10">
      <div className="flex flex-col gap-6 md:gap-12">
        <h1 className="text-4xl text-center md:text-6xl">Frequently Asked Questions</h1>
        <div className="flex flex-col gap-14">
          {faqs.map((faq, i) => {
            return (
              <div key={i} className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl">{faq.title}</h2>
                <p className="font-quicksand">{faq.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
