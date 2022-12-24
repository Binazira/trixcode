import React from "react";
import BonusCard from "../BonusCard";
import Button from "../Button";
import ananas from "../../assets/icons/ananas.svg";
import ufo from "../../assets/icons/ufo.svg";
import robot from "../../assets/icons/robot.svg";
import "./style.scss";

const Bonus = () => {
  return (
    <section className="bonus">
      <div className="bonus__info">
        <h2>Convallis quis praesent libero placerat eu</h2>
        <Button text={"Subscribe now"} cl={"button__dark-blue"} />
        <p>✌️ Access more than 180 Pro Pills courses</p>
      </div>
      <div className="bonus__list">
        <BonusCard
          img={ananas}
          imgAlt={"ananas"}
          title={"Improve as a professional"}
          text={"Lorem ipsum dolor sit amet."}
        />

        <BonusCard
          cl={"bonusCard_red"}
          img={ufo}
          imgAlt={"ufo"}
          title={"Get that promotion"}
          text={"Lorem ipsum dolor sit amet."}
        />

        <BonusCard
          cl={"bonusCard_orange"}
          img={robot}
          imgAlt={"robot"}
          title={"Mantente al día"}
          text={"Lorem ipsum dolor sit amet."}
        />
      </div>
    </section>
  );
};

export default Bonus;
