import React, { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import BookingCard from './BookingCard';
import ShowEmptyForProfile from "../Profile/ShowEmptyForProfile"

const BookingList = () => {
  const { bookings, cancelBooking } = useContext(BookingContext);

  if (bookings.length === 0) {
    return <ShowEmptyForProfile viewOption={'reservations'}/>
  }
  return (
    <div className='profile-item-card-list'>
       {bookings.map((booking, index) => (
        <BookingCard
          key={index}
          item={booking}
          index={index}
          onCancel={cancelBooking}
        />
      ))}
    </div>
  )
};

export default BookingList;
