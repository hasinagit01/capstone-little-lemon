import React from "react";
import { useHero } from "../../hooks/useHero";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Hero from "../Sections/Hero";
import MainRoutes from "../../routes/MainRoutes";

const MainLayout = ({ children }) => {
  const { heroParams } = useHero();
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="mainSection">
          {heroParams && <Hero paramsHero={heroParams} />}
             <MainRoutes />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
