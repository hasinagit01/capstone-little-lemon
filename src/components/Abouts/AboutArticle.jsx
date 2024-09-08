import React from "react";

const AboutArticle = ({ image, boldText, paragraphe, className }) => {
  return (
    <article className="section">
      <div className="container">
        <figure>
          <img
            className={`page-main-image ${className}`}
            src={image}
            alt="error"
          />
        </figure>
        <div>
          <p>
            <span className="bigBold">{boldText}</span>
            {paragraphe}
          </p>
        </div>
      </div>
    </article>
  );
};

export default AboutArticle;
