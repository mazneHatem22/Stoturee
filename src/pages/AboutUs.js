import React from "react";

import Branding from "../componentsApout/Branding";
import OurBranding from "../componentsApout/OurBranding";
import Logo from "../componentsApout/Logo";
import Us from "../componentsHome/Us";
import Footer from "../componentsHome/Footer";
import SliderAbout from "../componentsApout/SliderAbout";
import ScrollTop from "../componentsHome/ScrollTop";

const AboutUs = () => {
  return (
    <div>
      <SliderAbout />
      <Branding />
      <OurBranding />
      <Logo />
      <Us />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default AboutUs;
