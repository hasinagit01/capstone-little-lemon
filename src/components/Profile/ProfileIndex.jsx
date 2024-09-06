import React from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '../UI/Tabs/Tab';
import CartsTab from './CartsTab';
import OrdersTab from './OrdersTab';
import BookingTab from './BookingTab';
import './Profile.css'

const ProfileIndex = () => {
    const tabLabels = ['Carts', 'Reservations', 'Orders'];
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const defaultTab = queryParams.get('tab') || 'Reservations'; 
    return (
      <Tabs tabs={tabLabels} defaultTab={defaultTab}>
        <CartsTab />
        <BookingTab />
        <OrdersTab />
      </Tabs>
    );
  };
  
  export default ProfileIndex;