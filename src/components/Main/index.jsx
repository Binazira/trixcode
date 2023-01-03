import React from "react";
import Bonus from "../Bonus";
import CardStory from "../CardStory";
import Codely from "../Codely";
import Courses from "../Courses";
import Hero from "../Hero";
import Reviews from "../Reviews";

const Main = () => {
  return (
    <main>
      <Hero />
      <Reviews />
      <Bonus />
      <Codely />
      {/* <Courses /> */}
      <CardStory />
    </main>
  );
};

export default Main;
