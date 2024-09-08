import React, { useState, useEffect } from "react";
import DishCard from "../Dish/DishCard";
import menu from "../../data/menu";
import SkeletonLoaderDish from "../Skeletons/SkeletonLoaderDish";

const ContentMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categorizedMenu = groupByCategory(menuData);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Simulating an HTTP call with Axios
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve({ data: menu }), 250);
        });

        setMenuData(response.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while loading data.");
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <SkeletonLoaderDish />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="section">
      <div className="container grid-container">
        <div className="menuPart">
          {Object.keys(categorizedMenu).map((category) => (
            <section key={category}>
              <header className="menuPartTitle">
                <h2>{category}</h2>
              </header>
              <div className="menu-list">
                {categorizedMenu[category].map((item) => (
                  <DishCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

const groupByCategory = (menuData) => {
  return menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
};

export default ContentMenu;
