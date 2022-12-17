import React from "react";
import "./style.scss";

const Button = ({ text, cl }) => {
  return <button className={`${cl} button`}>{text}</button>;
};

export default Button;
