import React from "react";

const CartOrOrderDetail = ({ dishName, quantity, dishPrice }) => (
  <section className="profile-item-card-detail-box">
    <header>
      <span className="cardTitle">{dishName}</span>
    </header>
    <div>
      <span className="profile-item-card-qty"> Qty. {quantity}</span>
    </div>
    <footer className="cart-price-box">
      <span className="costText DishCost">
        $ {(parseFloat(dishPrice) * parseFloat(quantity)).toFixed(2)}
      </span>
    </footer>
  </section>
);

export default CartOrOrderDetail;
