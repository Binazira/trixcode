import React from "react";
import PriceCard from "../PriceCard";
import price from "../../assets/icons/price.svg";
import toggle from "../../assets/icons/toggle.svg";
import "./style.scss";
const pricesData = [
  {
    cl: "",
    title: "individuals",
    img: price,
    imgAlt: price,
    textH4: "No minimum stay",
    textP1: "Annual payment",
    imgToggle: toggle,
    imgToggleAlt: "toggle",
    textP2: "monthly",
    btnText: "subscribe",
    markType: "white",
    listData: [
      "Access to all courses",
      "quality content",
      "Professionals with extensive experience",
      "New content every week",
      "Access to the CodelyTV Pro community",
      "Certificates upon completion of courses",
    ],
  },

  {
    cl: "priceCard_black",
    title: "Companies",
    text: "Do you think it may interest more team members?",
    textH4: "No minimum stay",
    textP1: "Annual or monthly billing",
    btnText: "Know the courses",
    clBtn: "button__outline",
    markType: "black",
    listData: [
      "Discount up to 40%",
      "Centralized account management",
      "Professionals with extensive experience",
      "Invoices in company name",
      "Reports and analytics",
      "Certificates upon completion of courses",
    ],
  },
];

const Price = () => {
  return (
    <section className="price">
      <div className="price__wrapper">
        {pricesData.map((price, index) => {
          return (
            <PriceCard
              key={index}
              index={index}
              cl={price.cl}
              title={price.title}
              text={price.text}
              img={price.img}
              imgAlt={price.imgAlt}
              textH4={price.textH4}
              textP1={price.textP1}
              imgToggle={price.imgToggle}
              imgToggleAlt={price.imgToggleAlt}
              textP2={price.textP2}
              btnText={price.btnText}
              clBtn={price.clBtn}
              markType={price.markType}
              listData={price.listData}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Price;
