import React from "react";
import "./features.css";
import { EmojiEmotions, LockOpenOutlined, Settings } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import image from "../../assest/image/perspective.webp";
import Tabs from "../Tabs/Tabs";
import LunchApp from "./LunchApp";
import LastSection from "./LastSection";
import CustomersSays from "./CustomersSays";

const featuresParts = [
  {
    title: "Simple",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque",
    logo: EmojiEmotions,
  },
  {
    title: "Customize",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque",
    logo: Settings,
  },
  {
    title: "Secure",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque",
    logo: LockOpenOutlined,
  },
];

const Features = () => {
  return (
    <div className="features">
      <Container>
        <div className="fh-title">
          <span> HIGHLIGHTS </span>
          <h3>Features you love</h3>
        </div>
        <div className="fh-part">
          {featuresParts.map((fh, i) => (
            <div className="parts" key={i}>
              <div className="logo">{<fh.logo />}</div>
              <div className="info">
                <h4>{fh.title}</h4>
                <p>{fh.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="our-app">
          <div className="info">
            <h3>Discover our App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati vel exercitationem eveniet vero maxime ratione{" "}
            </p>
            <button>READ MORE</button>
          </div>
          <img src={image} alt="perspective" />
        </div>
        <Tabs />
        <LunchApp />
        <LastSection />
        <CustomersSays />
      </Container>
    </div>
  );
};

export default Features;
