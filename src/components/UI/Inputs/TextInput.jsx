import React from "react";

const TextInput = ({ label, type, name, value, onChange, error, ...props }) => {
  return (
    <div className="reservation-sub-box">
      <label className="reservation-form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="reservation-form-input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default TextInput;
