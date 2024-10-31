import React from 'react';

function TextInput({ name, label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default TextInput;
