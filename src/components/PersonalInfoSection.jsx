import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextInput from './inputs/TextInput';
import RadioInput from './inputs/RadioInput';

export default function PersonalInfoSection() {
  return (
    <div>
      <h3>Información Personal</h3>
      
      {/* Campo de nombre */}
      <Field
        name="personalInfo.name"
        render={({ field }) => (
          <TextInput 
            {...field}
            label="Nombre"
          />
        )}
      />
      <ErrorMessage name="personalInfo.name" component="div" className="error" />

      {/* Campo de edad */}
      <Field
        name="personalInfo.age"
        render={({ field }) => (
          <TextInput 
            {...field}
            label="Edad"
          />
        )}
      />
      <ErrorMessage name="personalInfo.age" component="div" className="error" />

      {/* Campo de género */}
      <Field name="personalInfo.gender">
        {({ field }) => (
          <RadioInput
            {...field}
            label="Género"
            options={['Masculino', 'Femenino', 'Otro']}
            selectedValue={field.value}
            onChange={(e) => field.onChange(e)} // Actualiza el valor en Formik
          />
        )}
      </Field>
      <ErrorMessage name="personalInfo.gender" component="div" className="error" />
    </div>
  );
}
