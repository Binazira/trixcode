import React from "react";
import avatar1 from "../../assets/images/avatar1.svg";
import avatar2 from "../../assets/images/avatar2.svg";
import avatar3 from "../../assets/images/avatar3.svg";
import avatar4 from "../../assets/images/avatar4.svg";
import story from "../../assets/images/story.svg";
import Button from "../Button";
import CardStories from "../CardStories";
import "./style.scss";

function Main() {
  return (
    <main className="stories">
      <div className="mobile">
        <div className="hero__avatars">
          <CardStories img={avatar1} text="Ventajas" />
          <CardStories img={avatar2} text="Enfoque" />
          <CardStories img={avatar3} text="Los cursos" />
          <CardStories img={avatar4} text="El órden" />
        </div>
        <div className="hero">
          <h1 className="hero__title">
            Condimen tum vel amet ut amet, sodales nulla
          </h1>
          <a href="#">
            <Button text="Know the courses" />
          </a>
          <p className="hero__info">A catalog with more than 180 courses</p>
        </div>
      </div>

      <div className="main__stories">
        <div className="main__hero">
          <h1 className="main__hero__title">
            Condimentum vel amet ut amet, sodales nulla
          </h1>
          <div className="">
            <a href="#">
              <Button text="Know the courses" />
            </a>

            <p className="hero__info">
              ✌️ A catalog with more than 180 courses
            </p>
          </div>
        </div>
        <div className="main__story">
          <img src={story} alt="stories" />
        </div>
      </div>
    </main>
  );
}

export default Main;
