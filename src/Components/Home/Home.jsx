import { Container } from "@material-ui/core";
import React  from "react";
import "./home.css";
import image from "../../assest/image/iphonex.webp";
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

const Home = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 0.5],
    config: { mass: 5, tension: 200, friction: 100 },
  }));

  return (
    <div className="home">
      <Container className="container">
        <h1>Mobile App Landing Page Template</h1>
        <p>
          The one and only solution for any kind of mobila app landing needs.
          Just change the screenshots and texts and you are good to go.
        </p>
        <animated.img
          onMouseMove={({ clientX: x, clientY: y }) =>
            set({ xys: calcXY(x, y) })
          }
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(perspective) }}
          className="image"
          src={image}
          alt="iphonex.webp"
        />
      </Container>
    </div>
  );
};

export default Home;
