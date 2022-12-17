import React from "react";
// import avatar1 from "../../assets/images/avatar1.svg";
import "./style.scss";

const CardStories = ({ img, text }) => {
  return (
    <div className="avatar">
      <div className="avatar__item">
        <img src={img} alt="avatar img" />
      </div>
      <p>{text}</p>
      {/* <p>Ventajas</p> */}
    </div>
  );
};

export default CardStories;
