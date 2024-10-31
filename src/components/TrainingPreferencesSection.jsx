import React from 'react';
import { Field, ErrorMessage } from 'formik';
import SelectInput from './inputs/SelectInput';
import CheckboxInput from './inputs/CheckBoxInput';

export default function TrainingPreferencesSection() {
  return (
    <div>
      <h3>Preferencias de Entrenamiento</h3>

      {/* Selección de nivel de experiencia */}
      <Field name="trainingPreferences.experienceLevel">
        {({ field }) => (
          <SelectInput
            {...field}
            label="Nivel de Experiencia"
            options={['Principiante', 'Intermedio', 'Avanzado']}
          />
        )}
      </Field>
      <ErrorMessage name="trainingPreferences.experienceLevel" component="div" className="error" />

      {/* Checkbox para actividades preferidas */}
      <Field name="trainingPreferences.preferredActivities">
        {({ field }) => (
          <CheckboxInput
            name="preferredActivities"
            label="Actividades Preferidas"
            options={['Cardio', 'Fuerza', 'Yoga']}
            selectedValues={field.value || []} // Inicializar como un array vacío si no hay valores
            onChange={(selectedActivities) => field.onChange({ target: { name: field.name, value: selectedActivities } })}
          />
        )}
      </Field>
      <ErrorMessage name="trainingPreferences.preferredActivities" component="div" className="error" />
    </div>
  );
}
