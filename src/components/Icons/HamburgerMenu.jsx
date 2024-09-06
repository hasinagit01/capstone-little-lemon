import React from 'react';
import { BiMenu } from 'react-icons/bi';

const HamburgerMenu = ({ onClick }) => (
  <BiMenu className='navHamburg' onClick={onClick} />
);

export default HamburgerMenu;
