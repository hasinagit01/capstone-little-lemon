import React from 'react';

const AboutArticle = ({ image, boldText, paragraphe, className }) => {
    return (
        <section className='section'>
            <div className='container'>
                <img className={`page-main-image ${className}`} src={image} alt="error" />
                <div>
                    <p>
                        <span className='bigBold'>{boldText}</span>
                        {paragraphe}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutArticle