import React from 'react';
import Button from '../UI/Buttons/Button';
import tables from '../../assets/tables1.jpg';
import BookingDetail from './BookingDetail';
import Card from '../UI/Cards/Card';

const BookingCard = ({ item, index, onCancel }) => {
    const { occasion, date, time, people, seating } = item;

    return (
      <Card className='profile-item-card'>
        <div>
          <img className='profile-item-card-image' src={tables} alt="Table" />
        </div>
        <div className='profile-item-card-container'>
          <div className='profile_reservation_card_parts'>
            <BookingDetail label='Your booking for' value={occasion} />
            <BookingDetail label='Date' value={`${date} ${time}`} />
            <BookingDetail label='Place' value={people} />
            <BookingDetail label='Seating' value={seating} />
          </div>
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
  };
  
  export default BookingCard;