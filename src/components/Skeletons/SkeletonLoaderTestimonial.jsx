import "./Skeleton.css";

const SkeletonLoaderTestimonial = () => {
  return (
    <section className="section">
      <div className="container grid-container skeleton-container-testimonial">
        {[...Array(6)].map((_, i) => (
          <article key={i} className="testimonial-card skeleton">
            <div className="skeleton-img"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text small"></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkeletonLoaderTestimonial;
