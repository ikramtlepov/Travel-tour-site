import React, { useEffect, useState } from 'react';
import SelectTourDestination from './pageComp/SelectTourDestination';
import BookingForm from './pageComp/BookingForm';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BookNow = ({ destinations, tours }) => {
  const {accstatus} = useSelector(state => state.pageActionSlice)
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBookingSubmit = async (values) => {
    if (!selectedDestination || !selectedTour) {
      alert("Please select a destination and a tour!");
      return;
    }

    setLoading(true);
    try {
      const userBookingData = {
        name: values.name,
        email: values.email,
        destinationId: selectedDestination,
        tourId: selectedTour,
      };
      
      const response = await axios.post('https://travel-data-p3vn.onrender.com', userBookingData);
      alert('Booking successful!');
      setUserData({ name: '', email: '' });  
      setSelectedDestination(null);
      setSelectedTour(null);
    } catch (err) {
      setError("An error occurred while booking. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!accstatus) {
    return <div className="text-center mt-10 text-lg text-red-500">Please log in to book a tour.</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Book Your Tour</h1>
      <SelectTourDestination
        destinations={destinations}
        tours={tours}
        setSelectedDestination={setSelectedDestination}
        setSelectedTour={setSelectedTour}
      />
      <BookingForm onSubmit={handleBookingSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default BookNow;

