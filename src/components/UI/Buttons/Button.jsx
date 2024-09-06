import React from 'react';
/**
 * Button component
 * 
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {string} [props.className='btn-primary'] - The CSS class for the button.
 * @param {function} [props.onClick=() => {}] - The click handler function.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({ children, className = 'btn-primary', onClick = () => {}, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

