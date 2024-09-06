import React, { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';
import OrderCard from './OrderCard'
import ShowEmptyForProfile from "../Profile/ShowEmptyForProfile"

const OrderList = () => {
    const { orders, cancelOrder } = useContext(OrderContext);
  
    if (orders.length === 0) {
      return <ShowEmptyForProfile viewOption={'orders'}/>
    }
  
  
    return (
      <div className='profile-item-card-list'>
         {orders.map((order, index) => (
          <OrderCard
            key={index}
            item={order}
            index={index}
            onCancel={cancelOrder}
          />
        ))}
      </div>
    )
  };

export default OrderList