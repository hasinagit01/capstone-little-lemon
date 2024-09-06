import React from 'react';

const RangeInput = ({ label, name, value, onChange, error, min, max }) => {
  return (
    <div className="input-group">
      <label>{label}: {value}</label>
      <input type="range" name={name} value={value} onChange={onChange} min={min} max={max} />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default RangeInput;
