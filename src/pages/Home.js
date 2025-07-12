import React, { useState } from "react";
import OurWork from "../componentsHome/OurWork";
import Slider from "../componentsHome/Slider";
import SecondBanner from "../componentsHome/secondBanner";
import Services from "../componentsHome/Services";
import Us from "../componentsHome/Us";
import Footer from "../componentsHome/Footer";
import Logo from "../componentsApout/Logo";

const Home = () => {
  const [isSliderReady, setIsSliderReady] = useState(false);
  return (
    <div>
      <Slider onReady={() => setIsSliderReady(true)} />
      {isSliderReady && (
        <>
          <SecondBanner />
          <Logo />
          <OurWork />
          <Services />
          <Us />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
