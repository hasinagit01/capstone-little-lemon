import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonial from "../../../data/testimonial";
import SkeletonLoaderTestimonial from "../../Skeletons/SkeletonLoaderTestimonial";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        // Simulating an HTTP call with Axios
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve({ data: testimonial }), 250);
        });
        setTestimonialData(response.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while loading data.");
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, []);

  if(loading){
   return  <SkeletonLoaderTestimonial />
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="section">
      <div className="container grid-container testimonials">
        <div className="testimonials-topbar">
          <h1>Testimonials</h1>
        </div>
        <div className="testimonials-cards">
            {loading ? (
            <SkeletonLoaderTestimonial />
          ) : (
            testimonialData.map((item) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                description={item.description}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
