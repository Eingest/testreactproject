import React from "react";
import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "SENDAI",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/9/90/Panorama_of_Sendai_Station_East_Entrance.jpg",
//     address: "Country: Japan - Prefecture: Miyagi -  City: Sendai",
//     description: "This is a Sendai. Nice.",
//   },
//   {
//     id: "m2",
//     title: "DORTMUND",
//     image:
//       "https://www.leonardo-hotels.de/octopus/upload/images/pages/dortmund-1-.jpg",
//     address: "Country: Germany - State: NRW -  City: Dortmund",
//     description: "This is a Dortmund. Very Nice.",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //useEffect -> fetch() won't run everytime
  //async await -> not with react
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-1b898-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups: any = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
