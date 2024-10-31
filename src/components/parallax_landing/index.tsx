import { useEffect, useState } from "react";

import { Footer, Header } from "../shared";
import { Hero } from "./Hero";
import { Story } from "./Story";
import { FeatureCards } from "./FeatureCards";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";

const ParallaxLanding = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scrolling and set scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <Hero scrollPosition={scrollPosition} />
      <Story scrollPosition={scrollPosition} />
      <FeatureCards scrollPosition={scrollPosition} />
      <Portfolio scrollPosition={scrollPosition} />
      <Testimonials scrollPosition={scrollPosition} />
      <Footer />
    </div>
  );
};

export default ParallaxLanding;
