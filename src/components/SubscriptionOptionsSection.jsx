import React from 'react';
import { Field, ErrorMessage } from 'formik';
import RadioInput from './inputs/RadioInput';
import CheckboxInput from './inputs/CheckBoxInput';

export default function SubscriptionOptionsSection() {
  return (
    <div>
      <h3>Opciones de Suscripción</h3>

      {/* Selección de plan de suscripción */}
      <Field name="subscriptionOptions.plan">
        {({ field }) => (
          <RadioInput
            {...field}
            label="Plan de Suscripción"
            options={['Mensual', 'Trimestral', 'Anual']}
            selectedValue={field.value}
            onChange={(e) => field.onChange(e)}
          />
        )}
      </Field>
      <ErrorMessage name="subscriptionOptions.plan" component="div" className="error" />

      {/* Checkbox para recibir notificaciones */}
      <Field name="subscriptionOptions.receiveNotifications">
        {({ field }) => (
          <CheckboxInput
            name="receiveNotifications"
            label="Recibir Notificaciones"
            options={['Sí']}
            selectedValues={field.value ? ['Sí'] : []} // Seleccionar 'Sí' si está marcado
            onChange={(selectedValues) => field.onChange({ target: { name: field.name, value: selectedValues.length > 0 } })} // Actualizar el estado
          />
        )}
      </Field>
      <ErrorMessage name="subscriptionOptions.receiveNotifications" component="div" className="error" />
    </div>
  );
}
