import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CloseIcon = ({ onClick }) => (
  <AiOutlineClose className='nav-hamburg-close nav-hamburg-icon' onClick={onClick} />
);

export default CloseIcon;
