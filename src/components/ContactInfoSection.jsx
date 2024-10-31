import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextInput from './inputs/TextInput';

export default function ContactInfoSection() {
  return (
    <div>
      <h3>Información de Contacto</h3>

      {/* Campo de correo electrónico */}
      <Field
        name="contactInfo.email"
        render={({ field }) => (
          <TextInput 
            {...field}
            label="Correo Electrónico"
          />
        )}
      />
      <ErrorMessage name="contactInfo.email" component="div" className="error" />

      {/* Campo de teléfono */}
      <Field
        name="contactInfo.phone"
        render={({ field }) => (
          <TextInput 
            {...field}
            label="Teléfono"
          />
        )}
      />
      <ErrorMessage name="contactInfo.phone" component="div" className="error" />
    </div>
  );
}
