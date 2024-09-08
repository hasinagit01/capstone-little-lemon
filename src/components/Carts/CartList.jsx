import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartCard from './CartCard'
import ShowEmptyForProfile from "../Profile/ShowEmptyForProfile"

const CartList = () => {
    const { carts, cancelCart } = useContext(CartContext);
  
    if (carts.length === 0) {
      return <ShowEmptyForProfile viewOption={'carts'}/>
    }
    
  
    return (
      <section className='profile-item-card-list'>
         {carts.map((cart, index) => (
          <CartCard
            key={index}
            item={cart}
            index={index}
            cartItems={carts}
            onCancel={cancelCart}
          />
        ))}
      </section>
    )
  };

export default CartList