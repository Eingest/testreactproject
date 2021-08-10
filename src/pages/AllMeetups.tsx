import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "SENDAI",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Panorama_of_Sendai_Station_East_Entrance.jpg",
    address: "Country: Japan - Prefecture: Miyagi -  City: Sendai",
    description: "This is a Sendai. Nice.",
  },
  {
    id: "m2",
    title: "DORTMUND",
    image:
      "https://www.dortmund.de/media/bilder/pool/___allgemein_pool/dortmund/Panorama-Stadt-Standort-Hansaplatz_Roland-Gorecki03_PanoramaGross_LG.jpg",
    address: "Country: Germany - State: NRW -  City: Dortmund",
    description:
      "This is a Dortmund. Very Nice.",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
