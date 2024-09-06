import React from 'react';
import './Cart.css'

const cartTotal = ({ cartItems }) => {
    const total = cartItems.reduce((sum, item) => {
        return sum + parseFloat(item.dishPrice) * parseFloat(item.quantity);
      }, 0);
    
    return (
        <section className='cart-total-container'>
            <div className='cart-total-box'>
                <span className='cart-total-head'>Order summary</span>
                <div className='cart-total-sub-box'>
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <hr />
                <div className='cart-total-sub-box'>
                    <span>Delivery</span>
                    <span>$ 0</span>
                </div>
                <hr />
                <div className='cart-total-sub-box'>
                    <span className='cart-total-head'>Order total</span>
                    <span className='cart-total-price'>${total.toFixed(2)}</span>
                </div>
            </div>
            <button className='cart-total-btn'>Checkout</button>
        </section>
    )
}

export default cartTotal