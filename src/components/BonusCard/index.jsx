import React from "react";
import "./style.scss";

const BonusCard = ({ img, imgAlt, title, text, cl }) => {
  return (
    <div className={`${cl} bonusCard`}>
      <img className="bonusCard__img" src={img} alt={imgAlt} />
      <div className="bonusCard__info">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BonusCard;
