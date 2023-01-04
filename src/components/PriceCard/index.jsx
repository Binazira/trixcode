import React from "react";
import "./style.scss";
import Button from "../Button";

const PriceCard = ({
  cl,
  clBtn,
  title,
  text,
  img,
  imgAlt,
  textH4,
  textP1,
  textP2,
  btnText,
  markType,
  listData,
  index,
}) => {
  return (
    <div className={`${cl} priceCard`}>
      <div className="priceCard__up">
        <h3>{title}</h3>
        <p className="priceCard__text">
          {text}
          <img src={img} alt={imgAlt} />
        </p>
        <ul className="priceCard__text__checkMark">
          {listData.map((list, index) => {
            return (
              <li
                className={
                  markType === "white"
                    ? "priceCard__text__checkMark_white"
                    : "priceCard__text__checkMark_black"
                }
                key={index}
              >
                {list}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="priceCard__down">
        <h4>{textH4}</h4>
        <Button text={btnText} cl={clBtn} />
        <div
          className={
            index === 0 ? "hidden priceCard__footer" : "priceCard__footer"
          }
        >
          <p>{textP1}</p>
          {index === 0 ? (
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          ) : null}
          <p>{textP2}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
