import React from "react";

const CartOrOrderDetail = ({ dishName, quantity, dishPrice }) => (
    <div className='profile-item-card-detail-box'>
    <div>
      <span className="cardTitle">{dishName}</span>
    </div>
    <div>
      <span className='profile-item-card-qty'> Qty. {quantity}</span>
    </div>
    <div className='cart-price-box'>
      <span className='costText DishCost'>
        $ {
          (parseFloat(dishPrice)
            * parseFloat(quantity)).toFixed(2)
        }
      </span>
    </div>
  </div>
);

export default CartOrOrderDetail;
        