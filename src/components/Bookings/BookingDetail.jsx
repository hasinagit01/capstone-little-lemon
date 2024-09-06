import React from 'react';

const BookingDetail = ({ label, value }) => (
  <div className='profile_reservation_text_box'>
    <span className='profile_reservation_text'>{label}</span>
    <span className='profile_reservation_sub_text'>{value}</span>
  </div>
);

export default BookingDetail;
