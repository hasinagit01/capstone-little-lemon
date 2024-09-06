import React, { useContext } from "react";
import NavItem from "./NavItem";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from '../../../context/CartContext'
import Badge from "../../Icons/Badge";

const NavMenu = ({ onClick }) => {
  const { carts } = useContext(CartContext);

  return (
    <menu className='nav-menu'>
      <NavItem to="/" onClick={onClick}>Home</NavItem>
      <NavItem to="/menu" onClick={onClick}>Menu</NavItem>
      <NavItem to="/booking" onClick={onClick}>Reservation</NavItem>
      <NavItem to="/about" onClick={onClick}>About</NavItem>
      <NavItem to="/profile" onClick={onClick} className="cart-nav-item">
        {carts.length > 0 ? (
          <>
            <MdAddShoppingCart className="cart-icon" />
            <Badge count={carts.length} />
          </>
        ) : (
          <>
            Profile
          </>
        )}
      </NavItem>
    </menu>
  );
};

export default NavMenu;