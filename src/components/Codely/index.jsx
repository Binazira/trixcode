import React from "react";
import "./style.scss";
import manCard1 from "../../assets/images/manCard.png";
import roboCard from "../../assets/images/roboCard.png";
import girlCard from "../../assets/images/girlCard.png";

const Codely = () => {
  return (
    <section className="codely">
      <div className="codely__left">
        <h2 className="codely__title codely__left__hidden">
          Ready for Codely? there's always a room for you here_
        </h2>
        <img className="codely__img" src={manCard1} alt="manCard" />

        <img className="codely__img" src={roboCard} alt="roboCard" />
      </div>
      <div className="codely__right">
        <h2 className="codely__title codely__right__hidden">
          Ready for Codely? there's always a room for you here_
        </h2>
        <img className="codely__img" src={girlCard} alt="girlCard" />
      </div>
    </section>
  );
};

export default Codely;
