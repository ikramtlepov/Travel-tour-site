import React from 'react';
import { useSelector } from 'react-redux';

const SelectTourDestination = ({  setSelectedDestination, setSelectedTour }) => {
  const {destinations} = useSelector(state => state.destinationSlice)
  const {tours} = useSelector(state => state.tourSlice)
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Your Tour and Destination</h2>
      
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-600 mb-2">Select Destination</label>
        <select
          onChange={(e) => setSelectedDestination(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Choose Destination</option>
          {destinations.destinations?.map((dest) => (
            <option key={dest.id} value={dest.id}>{dest.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-600 mb-2">Select Tour</label>
        <select
          onChange={(e) => setSelectedTour(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Choose Tour</option>
          {tours?.map((tour) => (
            <option key={tour.id} value={tour.id}>{tour.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectTourDestination;

