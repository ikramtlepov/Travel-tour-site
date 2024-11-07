// src/components/Registration.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn, registration } from "../api/postrequest";
import { toggleSignUp } from "../store/slices/pageActionSlice";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 

const Registration = () => {
  const { isSignUp } = useSelector((state) => state.pageActionSlice);
  const dispatch = useDispatch();
  const baseUrl = "https://travel-data-p3vn.onrender.com";

  const signUpValidationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Name must be min 3 letters")
      .required("Name is required"),
    email: Yup.string().email("Incorrect email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password requires min 6 numbers")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Confirm the Password")
      .required("Confirm the Password"),
  });

  const logInValidationSchema = Yup.object({
    email: Yup.string().email("Incorrect email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg">
        {isSignUp ? "Create Account" : "Log in"}
      </h1>

      <button
        onClick={() => dispatch(toggleSignUp())}
        className="text-lg text-white mb-6 underline hover:text-yellow-400 transition-all duration-300 ease-in-out"
      >
        {isSignUp
          ? "Already have an account? Log in"
          : "Don’t have an account? Sign up"}
      </button>

      
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={isSignUp ? signUpValidationSchema : logInValidationSchema}
        onSubmit={async (value, { resetForm }) => {
          try {
            if (isSignUp) {
              await dispatch(registration(baseUrl, value, { resetForm }));
              toast.success("Registration successful!");
            } else {
              await dispatch(logIn(baseUrl, value, { resetForm }));
              toast.success("Logged in successfully!");
            }
          } catch (error) {
            toast.error("Something went wrong!");
          }
        }}
      >
        {() => (
          <Form className="bg-white/90 p-8 rounded-3xl shadow-2xl w-96 max-w-full transform transition-all duration-500 hover:scale-105">
            {isSignUp && (
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                  Name
                </label>
                <Field
                  type="text"
                  name="username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            )}

            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {isSignUp && (
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-pink-500 hover:to-purple-500 focus:ring-4 focus:ring-pink-300 focus:outline-none"
            >
              {isSignUp ? "Register" : "Log in"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;

