import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "../../data/menu";
import Button from "../UI/Buttons/Button";
import SkeletonLoaderDish from "../Skeletons/SkeletonLoaderDish";

import DishCard from "./DishCard";

const DishIndex = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Simulating an HTTP call with Axios
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve({ data: menu }), 250);
        });

        setMenuData(response.data.filter((item) => item.special === true));
        setLoading(false);
      } catch (error) {
        setError("An error occurred while loading data.");
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <SkeletonLoaderDish />
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <section className="section">
        <div className="container grid-container highlights">
          <header className="highlights-head">
            <h2>Special holiday offer!</h2>
            <Link to="/menu">
              <Button className="btn-primary">Order Online</Button>
            </Link>
          </header>
          <div className="menu-list">
            {menuData.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DishIndex;
