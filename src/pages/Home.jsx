import React, { useEffect } from "react";
import { useHero } from "../hooks/useHero";
import heroImage from "../assets/greek-salad.jpg";
import DishIndex from "../components/Dish/DishIndex";
import Testimonial from "../components/Sections/Testimonials/Testimonial";
import About from "../components/Sections/About";

const paramsHero = {
  heading: "Little Lemon",
  sub_heading: "Chicago",
  sub_text: `Enjoy a variety of our classic dishes, made with fresh, 
             premium ingredients and a contemporary flair`,
  image: { heroImage },
  type_for_sub_text: "p",
  button_text: "Reserve a Table",
  button_path: "./booking",
};

const Home = () => {
  const { setHeroParams } = useHero();

  useEffect(() => {
    setHeroParams(paramsHero);
  }, [setHeroParams]);
  return (
    <>
      <DishIndex />
      <Testimonial />
      <About />
    </>
  );
};

export default Home;
