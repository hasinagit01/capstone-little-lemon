import { Link } from "react-router-dom";
import './Hero.css'
import Button from "../UI/Buttons/Button";

const Hero = ({ paramsHero }) => {

  const renderSubText = () => {
    switch (paramsHero.type_for_sub_text) {
      case "p":
        return <p className="text-white">{paramsHero.sub_text}</p>;
      case "h3":
        return <h3 className="text-white">{paramsHero.sub_text}</h3>;
      default:
        return null;
    }
  };

  const renderSubHeading = () => {
    return <h2 className="text-white">{paramsHero.sub_heading}</h2>;
  };


  const renderButton = () => {
    return (
      <Link to={paramsHero.button_path}>
        <Button className="btn-primary">{paramsHero.button_text}</Button>
      </Link>
    );
  };

  return (
    <>
      <section className="section hero-section ">
        <div className="container hero-container">
          <div className="page_top_box">
            <h1>{paramsHero.heading}</h1>
            {paramsHero.sub_heading ? renderSubHeading() : null}
            {renderSubText()}
            {paramsHero.button_path && paramsHero.button_text
              ? renderButton()
              : null}
          </div>

          <img
            className="page-main-image hero-image"
            src={paramsHero.image.heroImage}
            alt="hero"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
