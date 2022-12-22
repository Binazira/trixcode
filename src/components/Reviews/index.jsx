import React from "react";
import ReviewsCard from "../ReviewsCard";
import person1 from "../../assets/images/person1.svg";
import person2 from "../../assets/images/person2.svg";
import companyLogo from "../../assets/icons/companyLogo.svg";
import "./style.scss";

const Reviews = () => {
  return (
    <section className="reviews">
      <p className="reviews__text">
        🔥 70,000 developers are learning online with Codely
      </p>
      <div className="reviews__list">
        <ReviewsCard
          text={
            "Ac egestas curabitur tempus, nunc urna lectus est. Lorem nisl feugiat faucibus elementum. Pretium in id mi rutrum."
          }
          avatar={person1}
          fullName={"Marc Jonson"}
          position={"PM - JobFluent.com"}
          logo={companyLogo}
        />
        <ReviewsCard
          cl="orange hidden"
          text={
            "“Cursus donec diam lectus tellus lacus, quis. Convallis quis molestie praesent libero placerat eu.”"
          }
          avatar={person2}
          fullName={"María Ripoll"}
          position={"Fullstack Developer - Addiliate"}
          logo={companyLogo}
        />
      </div>
      <p className="reviews__text">
        🏢 Are you part of a team? visit the Companies section
      </p>
    </section>
  );
};

export default Reviews;
