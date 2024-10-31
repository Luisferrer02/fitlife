import React from 'react';

function SelectInput({ name, label, value, options, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        <option value="">Seleccione una opción</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
