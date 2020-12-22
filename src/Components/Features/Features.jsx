import React from "react";
import "./features.css";
import { EmojiEmotions, LockOpenOutlined, Settings } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import image from "../../assest/image/perspective.webp";
import Tabs from "../Tabs/Tabs";
import LunchApp from "./LunchApp";
import LastSection from "./LastSection";
import CustomersSays from "./CustomersSays";
import { useSpring, animated } from "react-spring";

const calcXY = (x, y) => [
  -(y - window.innerHeight / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.0,
];
const perspective = (x, y, s) =>
  `perspective(500px) 
 rotateX(${x}deg) 
 rotateY(${y}deg) 
 scale(1)`;

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
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 0.5],
    config: { mass: 5, tension: 200, friction: 100 },
  }));
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
          <animated.img
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calcXY(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(perspective) }}
            src={image}
            alt="perspective"
          />
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
