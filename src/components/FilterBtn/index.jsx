import React from "react";
import "./style.scss";

const FilterBtn = ({ text, cl }) => {
  return <button className={`${cl} filterBtn`}>{text}</button>;
};

export default FilterBtn;
