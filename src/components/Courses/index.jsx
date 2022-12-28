import React, { useState } from "react";
import "./style.scss";
import CoursesCard from "../CoursesCard";
import cardAvatars1 from "../../assets/images/cardAvatars1.svg";
import cardAvatars2 from "../../assets/images/cardAvatars2.svg";
import cardAvatars3 from "../../assets/images/cardAvatars3.svg";
import stackCard1 from "../../assets/icons/stackCard1.svg";
import stackCard2 from "../../assets/icons/stackCard2.svg";
import stackCard3 from "../../assets/icons/stackCard3.svg";
import stackCard4 from "../../assets/icons/stackCard4.svg";
import Slider from "react-slick";
import FilterBtn from "../FilterBtn";

const coursesData = [
  {
    stackName: "<”W_P”>",
    title: "Web Performance ",
    image: cardAvatars1,
    imageAlt: "our mentors",
    author: "By Dani Santamaría and Javier Ferrer",
    stack: stackCard1,
    stackAlt: "angular logo",
  },

  {
    cl: "bgrOrange",
    stackName: "<”css”>",
    title: "CSS bottom flex",
    image: cardAvatars2,
    imageAlt: "our mentors",
    author: "By Dani Santamaría y Javier Ferrer",
    stack: stackCard2,
    stackAlt: "react and angular logo",
  },

  {
    cl: "bgrBlack",
    stackName: "<”TIGP”>",
    title: "Testing: Introduction and good practices",
    image: cardAvatars3,
    imageAlt: "our mentors",
    author: "By Rafa Gómez y Javier Ferrer",
    stack: stackCard3,
    stackAlt: "js logo",
  },

  {
    cl: "bgrRed",
    stackName: "<”W_P”>",
    title: "Front-end testing",
    image: cardAvatars3,
    imageAlt: "our mentors",
    author: "By Dani Santamaría y Javier Ferrer",
    stack: stackCard4,
    stackAlt: "css logo",
  },
];

const coursesFilter = [
  {
    id: 1,
    title: "All",
  },

  {
    id: 2,
    title: "software arch",
  },

  {
    id: 3,
    title: "Dev OPS",
  },
  {
    id: 4,
    title: "Tooling",
  },
  {
    id: 5,
    title: "Backend",
  },

  {
    id: 6,
    title: "Frontend",
  },

  {
    id: 7,
    title: "Mobile",
  },
];
const Courses = () => {
  const [isActive, setIsActive] = useState(1); //
  function onClickFilter(id) {
    setIsActive(id);
  }

  return (
    <section className="courses">
      <div className="container">
        <h2>Available courses_</h2>
        <div className="courses__btn">
          {coursesFilter.map((btnFilter, index) => {
            return (
              <FilterBtn
                text={btnFilter.title}
                cl={"activeFilter"}
                onClick={() => onClickFilter(btnFilter.id)}
              />
            );
          })}
        </div>
        <div className="courses__card">
          {coursesData.map((course, index) => {
            // console.log(course);
            return (
              <CoursesCard
                key={index}
                cl={course.cl}
                stackName={course.stackName}
                title={course.title}
                image={course.image}
                imageAlt={course.imageAlt}
                author={course.author}
                stack={course.stack}
                stackAlt={course.stackAlt}
              />
            );
          })}
        </div>
        <div>See full catalog</div>
      </div>
    </section>
  );
};

export default Courses;
