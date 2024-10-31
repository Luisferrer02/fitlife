import React from 'react';

function CheckboxInput({ name, label, options, selectedValues, onChange }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const updatedValues = checked
      ? [...selectedValues, value] // Agregar valor si está seleccionado
      : selectedValues.filter(item => item !== value); // Eliminar valor si está desmarcado
    onChange(updatedValues); // Enviar los valores actualizados al padre
  };

  return (
    <div>
      <label>{label}</label>
      <div>
        {options.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={selectedValues.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default CheckboxInput;
