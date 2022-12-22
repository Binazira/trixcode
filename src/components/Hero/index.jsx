import React from "react";
import avatar1 from "../../assets/images/avatar1.svg";
import avatar2 from "../../assets/images/avatar2.svg";
import avatar3 from "../../assets/images/avatar3.svg";
import avatar4 from "../../assets/images/avatar4.svg";
import story from "../../assets/images/story.png";
import Button from "../Button";
import CardStories from "../CardStories";
import "./style.scss";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__avatars">
          <CardStories img={avatar1} text="Ventajas" />
          <CardStories img={avatar2} text="Enfoque" />
          <CardStories img={avatar3} text="Los cursos" />
          <CardStories img={avatar4} text="El órden" />
        </div>
        <div className="hero__info">
          <h1 className="hero__info__title">
            Condimen tum vel amet ut amet, sodales nulla
          </h1>
          <div className="hero__info__btn">
            <a href="#">
              <Button text="Know the courses" />
            </a>
            <p className="hero__info__icon">✌️</p>
            <p className="hero__info__catalog">
              A catalog with more than 180 courses
            </p>
          </div>
        </div>
        <div className="hero__stories">
          <img src={story} alt="stories" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
