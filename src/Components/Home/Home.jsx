import { Container } from "@material-ui/core";
import React from "react";
import "./home.css";
import image from "../../assest/image/iphonex.webp";

const Home = () => {
  return (
    <div className="home">
      <Container className="container">
        <h1>Mobile App Landing Page Template</h1>
        <p>
          The one and only solution for any kind of mobila app landing needs.
          Just change the screenshots and texts and you are good to go.
        </p>
        <img src={image} alt="iphonex.webp" />
      </Container>
    </div>
  );
};

export default Home;
