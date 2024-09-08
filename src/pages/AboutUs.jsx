import React, { useEffect } from 'react';
import { useHero } from '../hooks/useHero';
import heroImage from "../assets/about-lemon.jpg";
import AboutUsIndex from "../components/Abouts/AboutUsIndex";
import "../components/Abouts/AboutUs.css"

const paramsHero = {
  heading: "Discover Our Mediterranean Journey",
  sub_text: `Where Flavors Meet Tradition,and Every Meal Tells a Story.`,
  image: { heroImage },
  type_for_sub_text: "h3",
};

const AboutUs = () => {
  const { setHeroParams } = useHero();

  useEffect(() => {
    setHeroParams(paramsHero);
  }, [setHeroParams]);

  return (
    <main className="mainSection">
      <AboutUsIndex />
    </main>
  );
};

export default AboutUs;
