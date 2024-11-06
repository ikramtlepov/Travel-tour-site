import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from './pageComp/Loading'

const TourDetail = ({ item }) => {
  const { tours, isTourLoad } = useSelector(state => state.tourSlice)
  const { slug } = useParams()
  const selectedTour = tours.filter(tour => tour.slug === slug)
  console.log(selectedTour)
  return (
    <div>
      {isTourLoad ?
        <div>
          <Loading />
        </div>
        :
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-white to-gray-100 shadow-xl rounded-xl mt-10 transform transition duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
            {selectedTour[0]?.title}
          </h1>

          <div className="flex justify-between items-center mb-6">
            <div className="text-yellow-500 font-bold text-lg">
              ⭐ {selectedTour[0]?.rating} / 5
            </div>
            <div className="text-2xl font-semibold text-green-600">
              ${selectedTour[0]?.price}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-justify mb-6 border-l-4 border-blue-500 pl-4">
            {selectedTour[0]?.details}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {selectedTour[0]?.images?.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={image}
                  alt={`Tour Image ${index + 1}`}
                  className="w-full h-64 object-cover transition duration-300 hover:opacity-80"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-25 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition duration-300">
                   
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default TourDetail
