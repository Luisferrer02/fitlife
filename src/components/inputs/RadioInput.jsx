import React from 'react';

function RadioInput({ name, label, options, selectedValue, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <div>
        {options.map(option => (
          <label key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioInput;
