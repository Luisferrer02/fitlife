import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ContactInfoSection from './ContactInfoSection';
import PersonalInfoSection from './PersonalInfoSection';
import SubscriptionOptionsSection from './SubscriptionOptionsSection';
import TrainingPreferencesSection from './TrainingPreferencesSection';
import SubmitButton from './SubmitButton';

const validationSchema = Yup.object({
  personalInfo: Yup.object().shape({
    name: Yup.string().required('El nombre es requerido'),
    age: Yup.number().required('La edad es requerida').positive('La edad debe ser un número positivo'),
    gender: Yup.string().required('Selecciona un género')
  }),
  contactInfo: Yup.object().shape({
    email: Yup.string().email('Correo inválido').required('El correo es requerido'),
    phone: Yup.number().required('El teléfono es requerido')
  }),
  subscriptionOptions: Yup.object().shape({
    plan: Yup.string().required('Selecciona un plan de suscripción'),
    receiveNotifications: Yup.boolean()
  }),
  trainingPreferences: Yup.object().shape({
    experienceLevel: Yup.string().required('Selecciona un nivel de experiencia'),
    preferredActivities: Yup.array().of(Yup.string()).required('Selecciona al menos una actividad')
  })
});

export default function FormContainer() {
  const initialValues = {
    personalInfo: {
      name: '',
      age: '',
      gender: ''
    },
    contactInfo: {
      email: '',
      phone: ''
    },
    subscriptionOptions: {
      plan: '',
      receiveNotifications: false
    },
    trainingPreferences: {
      experienceLevel: '',
      preferredActivities: []
    }
  };

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);
    setStatus(null); // Resetear el estado antes del envío

    try {
      const response = await fetch('https://api.tugimnasio.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const data = await response.json();
      console.log("Datos del servidor:", data);

      setStatus({ success: true });
    } catch (error) {
      console.error("Error en la petición:", error); // Log del error en la petición
      setStatus({ success: false });
    } finally {
      setSubmitting(false);
    }
};


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <h2>Únete a FitLife</h2>
          <PersonalInfoSection />
          <ContactInfoSection />
          <TrainingPreferencesSection />
          <SubscriptionOptionsSection />
          <SubmitButton isSubmitting={isSubmitting} />

          {status && status.success && <p>¡Registro exitoso!</p>}
          {status && status.success === false && <p>Error al enviar el formulario. Intenta nuevamente.</p>}
        </Form>
      )}
    </Formik>
  );
}
