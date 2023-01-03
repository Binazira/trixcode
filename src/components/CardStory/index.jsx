import React from "react";
import BonusCard from "../BonusCard";
import "./style.scss";
import cardStory from "../../assets/images/cardStory.svg";

const cardsData = [
  {
    cl: "cardStory__grey",
    title: "✌️ Pills Pro+",
    text: "Learn from experienced professionals in no-nonsense, hands-on courses.",
  },
  {
    cl: "cardStory__grey",
    title: "🚀 Specialized courses",
    text: "Learn from experienced professionals in no-nonsense, hands-on courses.",
  },
  {
    cl: "cardStory__grey",
    title: "🎓 For businesses",
    text: "Learn from experienced professionals in no-nonsense, hands-on courses.",
  },
];

const CardStory = () => {
  return (
    <section className="cardStory">
      <div className="cardStory__cards">
        {cardsData.map((cardInfo, index) => {
          return (
            <BonusCard
              cl={cardInfo.cl}
              title={cardInfo.title}
              text={cardInfo.text}
            />
          );
        })}
      </div>
      <div className="cardStory__story">
        <img src={cardStory} alt="video message" />
      </div>
    </section>
  );
};

export default CardStory;
