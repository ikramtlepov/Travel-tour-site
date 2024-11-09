import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const TourCard = ({ item, className }) => {
  const navigate = useNavigate()
  useEffect(()=>{
    window.scrollTo(0,0)})

  return (
  <div className='md:min-h-[calc(100vh-475px)]'>
     <motion.div
      className={`p-[10px] rounded-md shadow-md border-[1px] h-full  flex flex-col justify-between gap-2 group relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5 }} 
    >
      <div className="relative overflow-hidden rounded-md">
        <img
          className="h-[400px] w-full object-cover rounded-md shadow-md transform group-hover:scale-95 transition duration-300"
          src={item.images}
          alt={item.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="absolute  bottom-0 left-[30px] p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white md:text-indigo-400">
        <h2 className="text-lg font-semibold">{item.title}</h2>

        
        <div className="mt-2 font-semibold">
          Price: <span className="text-orange-400">${item.price}</span>
        </div>

        <button
          onClick={() => navigate(item.slug)}
          className="mt-3 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
          Detail
        </button>
      </div>
    </motion.div>
  </div>
  );
};



export default TourCard