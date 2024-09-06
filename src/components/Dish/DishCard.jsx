import React, { useState } from "react";
import { MdDeliveryDining } from "react-icons/md"
import './DishCard.css'
import Button from "../UI/Buttons/Button"
import Card from "../UI/Cards/Card"
import DishOrderModal from "./DishOrderModal"

const DishCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Card className="dishCard">
        <img className="dishImage" src={item.dishImage} alt={item.dishName} />
        <div className="dish-details">
          <div className="dish-title-cost-box">
            <span className="cardTitle">{item.dishName}</span>
            <span className="costText">$ {item.dishPrice}</span>
          </div>
          <p className="paragraphText">{item.dishDetails}</p>
        </div>
        <div className="delivery-btn-box">
          <Button className="delivery-btn" onClick={openModal}>
            Order a Delivery <MdDeliveryDining className="dishDeliveryIcon" />
          </Button>
        </div>
      </Card>
      <DishOrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        dish={item}
      />
    </>
  );
};

export default DishCard;
