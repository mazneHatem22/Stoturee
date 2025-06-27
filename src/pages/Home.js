import React from "react";
import NavBar from "../componentsHome/NavBar";
import OurWork from "../componentsHome/OurWork";
import Slider from "../componentsHome/Slider";
import Services from "../componentsHome/Services";
import Us from "../componentsHome/Us";
import Footer from "../componentsHome/Footer";
import Logo from "../componentsApout/Logo";
import ScrollTop from "../componentsHome/ScrollTop";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Logo/>
      <OurWork />
      <Services />
      <Us/>
      <Footer/>
      <ScrollTop/>
    </div>
  );
};

export default Home;
