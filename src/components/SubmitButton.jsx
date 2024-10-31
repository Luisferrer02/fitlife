import React from 'react';

function SubmitButton({ isSubmitting }) {
  return (
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Enviando...' : 'Registrarse'}
    </button>
  );
}

export default SubmitButton;
