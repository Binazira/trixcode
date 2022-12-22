import React from "react";
import "./style.scss";

const ReviewsCard = ({ text, avatar, fullName, position, logo, cl }) => {
  return (
    <div className={`${cl} reviewsCard`}>
      <h2>{text}</h2>
      <div className="reviewsCard__info info">
        <div className="info__person">
          <img src={avatar} alt="avatar img" />
          <div className="info__person__about">
            <p>{fullName}</p>
            <p>{position}</p>
          </div>
        </div>
        <img className="info__logo" src={logo} alt="" />
      </div>
    </div>
  );
};

export default ReviewsCard;
