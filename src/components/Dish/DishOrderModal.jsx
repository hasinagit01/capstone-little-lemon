import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Dialogs/Modal";
import { OrderContext } from "../../context/OrderContext";
import { CartContext } from "../../context/CartContext";
import SelectInput from "../UI/Inputs/SelectInput";
import { MdDeliveryDining, MdOutlineAddShoppingCart } from "react-icons/md";
import Button from "../UI/Buttons/Button";
import DialogConfirm from "../UI/Dialogs/DialogConfirm";

const DishOrderModal = ({ isOpen, onClose, dish }) => {
  const { addOrder } = useContext(OrderContext);
  const { addCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const navigate = useNavigate();

  const handleOrder = () => {
    addOrder({ ...dish, quantity });
    onClose();
    setShowSuccessModal(true);
    setIsOrder(true);
  };

  const handleAddToCart = () => {
    addCart({ ...dish, quantity });
    onClose();
    setShowSuccessModal(true);
    setIsCart(true);
  };

  const handleCloseModal = () => setShowSuccessModal(false);
  
  const handleGoToProfile = (tab) => {
    setShowSuccessModal(false);
    navigate(`/profile?tab=${tab}`); // Redirection avec paramètre de tab
  };

  const successMessageForAddToCart = {
    heading: "Dish added to cart!",
    message: "Your dish has been successfully added to the cart. You can continue shopping or view your cart",
    buttonLabel: "Go to Cart"
  };

  const successMessageForOrder = {
    heading: "Order placed successfully!",
    message: "Thank you for your order! Your order has been successfully placed. You can track your order or explore more items on our menu",
    buttonLabel: "Go to Order"
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="dish-modal-details">
          <img className="modal-dishImage" src={dish.dishImage} alt={dish.dishName} />
          <h2>{dish.dishName}</h2>
          <p>{dish.dishDetails}</p>
          <div className="dish-price-quantity">
            <span className="costText">$ {dish.dishPrice}</span>
            <SelectInput
              classDiv="quantity-selector"
              label="Quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              options={[...Array(10).keys()]}
            />
          </div>

          <div className="modal-footer">
            <Button className="modal-order-btn" onClick={handleOrder}>
              <MdDeliveryDining className='order-card-btn-icon' />
              Order
            </Button>
            <Button className="modal-cart-btn" onClick={handleAddToCart}>
              Add to Cart
              <MdOutlineAddShoppingCart className="order-card-btn-icon" />
            </Button>
          </div>
        </div>
      </Modal>
      {showSuccessModal && (
        <DialogConfirm
          isOpen={showSuccessModal}
          onClose={handleCloseModal}
          title={isCart ? successMessageForAddToCart.heading : successMessageForOrder.heading}
          message={isCart ? successMessageForAddToCart.message : successMessageForOrder.message}
          onPrimaryAction={() => handleGoToProfile(isCart ? 'Carts' : 'Orders')}
          primaryActionLabel={isCart ? successMessageForAddToCart.buttonLabel : successMessageForOrder.buttonLabel}
          onSecondaryAction={handleCloseModal}
          secondaryActionLabel="Close"
        />
      )}
    </>
  );
};

export default DishOrderModal;
