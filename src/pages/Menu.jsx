import React, { useEffect } from "react";
import { useHero } from "../hooks/useHero";
import heroImage from "../assets/table1.avif";
import MenuIndex from "../components/Menu/MenuIndex";


const paramsHero = {
  heading: "Explore Our Menus ",
  sub_text: `Each dish is a celebration of vibrant flavors 
            and timeless traditions. Our menu is crafted to take you on a sensory journey, 
            where every bite offers a taste of sun-soaked landscapes and culinary excellence.`,
  image: { heroImage },
  type_for_sub_text: "p",
};

const Menu = () =>  {
  const { setHeroParams } = useHero();

  useEffect(() => {
    setHeroParams(paramsHero);
  }, [setHeroParams]);
  return (
      <MenuIndex/>
  );
};

export default Menu;
