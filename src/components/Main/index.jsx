import React from "react";
import Bonus from "../Bonus";
import CardStory from "../CardStory";
import Codely from "../Codely";
import Courses from "../Courses";
import Hero from "../Hero";
import Price from "../Price/Price";
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
      <Price />
    </main>
  );
};

export default Main;
