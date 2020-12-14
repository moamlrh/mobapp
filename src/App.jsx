import React from "react";
import { Navbar, Home, Features } from "./Components";
import "./app.css";
import companyIcons from "./assest/image/client-logos.png";
import Gallary from "./Components/Gallary/Gallary";
import { Container } from "@material-ui/core";
import Pricing from "./Components/Pricing/Pricing";
import Questions from "./Components/Pricing/Questions";
import DownloadApp from "./Components/DownloadApp/DownloadApp";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Container className="company-icons">
        <img src={companyIcons} alt="company icons" />
        <Features />
        <Gallary />
        <Pricing />
        <Questions />
      </Container>
      <DownloadApp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
