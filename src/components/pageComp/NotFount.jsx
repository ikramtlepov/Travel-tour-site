import React from 'react'
import { Link } from 'react-router-dom'

const NotFount = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="text-center px-6 md:px-12 lg:px-24">
      <h1 className="text-6xl md:text-8xl font-bold text-blue-500 mb-4">404</h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
        Oops! Page not found.
      </p>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Go back to Home
      </Link>
    </div>
  </div>
  )
}

export default NotFount