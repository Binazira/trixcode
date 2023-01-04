import React from "react";
import logo from "../../assets/icons/logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkIn from "../../assets/icons/linkIn.svg";
import instagram from "../../assets/icons/instagram.svg";
import git from "../../assets/icons/git.svg";
import youtube from "../../assets/icons/youtube.svg";
import messenger from "../../assets/icons/messenger.svg";
import "./style.scss";

const linksData = ["courses", "Companies", "Communities", "Blog", "Contacts"];

const mediaData = [
  {
    img: facebook,
    altText: "facebook",
  },
  {
    img: linkIn,
    altText: "linkIn",
  },
  {
    img: instagram,
    altText: "instagram",
  },
  {
    img: git,
    altText: "git",
  },
  {
    img: youtube,
    altText: "youtube",
  },
  {
    img: messenger,
    altText: "messenger",
  },
];

const policyData = [
  "Legal warning",
  "General conditions",
  "Privacy Policy",
  "Cookies policy",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo trixcode" />
      </div>

      <ul className="footer__listLink">
        {linksData.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>

      <ul className="footer__listMedia">
        {mediaData.map((media, index) => {
          return (
            <li key={index}>
              <img src={media.img} alt={media.altText} />
            </li>
          );
        })}
      </ul>

      <ul className="footer__listPolicy">
        {policyData.map((policy, index) => {
          return <li key={index}>{policy}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
