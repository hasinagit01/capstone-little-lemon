import "./Skeleton.css";

const SkeletonLoaderCard = () => {
  return (
    <section className="section">
      <div className="container grid-container skeleton-container-dish">
        {[...Array(6)].map((_, i) => (
          <article key={i} className="dishCard skeleton">
            <div className="dishImage skeleton"></div>
            <div className="dish-details">
              <div className="dish-title-cost-box">
                <span className="cardTitle skeleton"></span>
                <span className="costText skeleton"></span>
              </div>
              <p className="paragraphText skeleton"></p>
            </div>
            <div className="delivery-btn-box">
              <div className="delivery-btn skeleton"></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkeletonLoaderCard;
