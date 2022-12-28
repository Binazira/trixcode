import React from "react";
import "./style.scss";

const CoursesCard = ({
  cl,
  stackName,
  title,
  image,
  imageAlt,
  author,
  stack,
  stackAlt,
}) => {
  return (
    <section className="coursesCard">
      <div className={`${cl} coursesCard__color`}>
        <p>{stackName}</p>
      </div>
      <div>
        <h4>{title}</h4>
        <div className="coursesCard__author">
          <img src={image} alt={imageAlt} />
          <p>{author}</p>
        </div>
        <p>🔥 300+ students</p>
        <div className="coursesCard__btn">
          <button>Subscribe</button>
          <img src={stack} alt={stackAlt} />
        </div>
      </div>
    </section>
  );
};

export default CoursesCard;
