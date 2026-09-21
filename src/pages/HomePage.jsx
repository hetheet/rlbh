import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import TrustStrip from "../components/TrustStrip";
import QuickHighlights from "../components/QuickHighlights";
import AboutPreview from "../components/AboutPreview";
import Slider from "../components/Slider";
import EligibilitySection from "../components/EligibilitySection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutPreview />
      <TrustStrip />
      <QuickHighlights />

      <Slider />
      <EligibilitySection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default HomePage;
