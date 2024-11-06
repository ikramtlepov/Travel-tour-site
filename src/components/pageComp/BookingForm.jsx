import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Name</label>
            <Field name="name" type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <Field name="email" type="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300">Book Now</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;


