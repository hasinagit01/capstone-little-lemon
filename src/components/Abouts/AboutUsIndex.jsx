import React from "react"
import AboutArticle from "./AboutArticle"
import AboutHoursOfOperation from "../Abouts/AboutHoursOfOperation"
import aboutUsImage from "../../assets/chef.jpg"
import aboutUsImage2 from "../../assets/food2.jpeg"

const AboutUsIndex = () => {
    const aboutArticlePara = {
        FirstParagraphe: `Little Lemon, we believe that the heart of every great meal lies in 
        the harmony of flavors, the warmth of tradition, and the joy of sharing. 
        Our culinary journey began with a deep appreciation for the Mediterranean's 
        rich tapestry of tastes and cultures. From the sun-drenched coasts of Greece 
        to the bustling spice markets of Turkey, we've embarked on a voyage to bring you a 
        dining experience that is not just about food but a celebration of life, love, 
        and connection. Our kitchen is a melting pot of family recipes passed down through 
        generations, combined with a modern twist that caters to the diverse and evolving 
        palates of our cherished guests. Our commitment to using fresh, locally-sourced 
        ingredients and time-honored cooking techniques ensures that each dish that 
        leaves our kitchen is a piece of art, a reflection of the Mediterranean's spirit. 
        Whether you're joining us for a cozy dinner, a celebration, or a casual gathering 
        with friends, we invite you to embark on a culinary adventure with us and savor 
        the flavors of our heritage, for each meal at Little Lemon tells a story - 
        a story of tradition, passion, and the timeless beauty of the Mediterranean.`,  
        SecondParagraphe: `the heart of Chicago, Illinois, where the city's rich tapestry of cultures 
        converge, there stands a family-owned restaurant that has been a labor of love 
        for two brothers, Mario and Adrian. These two Italian siblings embarked on a 
        culinary journey, fueled by their passion for tradition and the desire to share the 
        vibrant flavors of the Mediterranean. Born into a family where food was a way of life, 
        their roots run deep in Italian heritage, but their curiosity led them to explore 
        the diverse tastes of Greece and Turkey. The result is a restaurant that serves up a 
        delectable fusion of Italian, Greek, and Turkish cuisine, where each dish is a 
        celebration of their shared experiences and a testament to their commitment to 
        quality and authenticity. At the heart of the bustling city, this family-owned gem is 
        a testament to the power of tradition, family,and the universal language of exceptional food. 
        Welcome to our culinary haven, where the flavors of the Mediterranean come to life 
        in the heart of Chicago.`
    };
    return (
        <>
            <section className='aboutus-para'>
                <AboutArticle
                    image={aboutUsImage}
                    boldText="At"
                    paragraphe={aboutArticlePara.FirstParagraphe}
                    className="aboutFirstImage"
                />
                <AboutArticle
                    image={aboutUsImage2}
                    boldText="In"
                    paragraphe={aboutArticlePara.SecondParagraphe}
                    className="aboutSecondImage"
                />
            </section>
            <AboutHoursOfOperation />
        </>
    )
}

export default AboutUsIndex;
