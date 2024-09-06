import React from 'react';
import Button from '../UI/Buttons/Button';
import Card from '../UI/Cards/Card';
import CartOrOrderDetail from '../Carts/CartOrOrderDetail'


const OrderCard = ({item, index, onCancel}) => {
    const { dishName, dishImage, dishPrice, quantity } = item;
    return (
        <Card className='profile-item-card'>
          <div>
            <img className='profile-item-card-image' src={dishImage} alt="Table" />
          </div>
          <div className='profile-item-card-container'>
          <CartOrOrderDetail dishName={dishName} quantity={quantity} dishPrice={dishPrice}/>
            <div className='profile-item-card-btn-box profile-item-card-btn-box-single-btn'>
              <Button 
                onClick={() => onCancel(index)}
                className='profile-item-card-btn profile-item-card-btn-cancel'>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      );
}
export default OrderCard