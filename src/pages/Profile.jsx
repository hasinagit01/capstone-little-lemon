import React, { useEffect } from "react";
import { useHero } from "../hooks/useHero";
import heroImage from "../assets/1695718012281.jpeg";
import ProfileIndex from "../components/Profile/ProfileIndex"

const paramsHero = {
  heading: "WELCOME",
  sub_text: `Enjoy a variety of our classic dishes, made with fresh, 
             premium ingredients and a contemporary flair`,
  image: { heroImage },
  type_for_sub_text: "h3",
  button_path: "./profile",
};

const Profile = () => {
  const { setHeroParams } = useHero();

  useEffect(() => {
    setHeroParams(paramsHero);
  }, [setHeroParams]);
  return (
    <div className="mainSection">
      <ProfileIndex />
    </div>
  );
};

export default Profile;
