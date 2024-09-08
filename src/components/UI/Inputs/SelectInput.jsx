import React from "react";

const SelectInput = ({
  classDiv,
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  disabled,
}) => {
  return (
    <div className={classDiv}>
      <label className="reservation-form-label">{label}</label>
      <select
        className="reservation-form-input"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
        <option value="">No options available</option>
      </select>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default SelectInput;
