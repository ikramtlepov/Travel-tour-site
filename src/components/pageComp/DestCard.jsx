import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedDest } from '../../store/slices/pageActionSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DestCard = ({ item, className }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <motion.div 
    className={`p-[10px] rounded-md shadow-md border-[1px] h-full flex flex-col justify-between gap-2 group relative overflow-hidden ${className}`} 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.3 }}
  >
    <div className="relative overflow-hidden rounded-md">
      <img
        className="h-[400px] max-lg:h-[500px] w-full object-cover rounded-md shadow-md transform group-hover:scale-105 transition-transform duration-300"
        src={item.image}
        alt={item.name}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
    </div>
    <div className="absolute bottom-0 left-[20px] p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className='text-lg font-semibold'>{item.country}</p>
      <p className="text-sm mt-1 line-clamp-2">{item.description}</p>
      <button onClick={() => {
        navigate("/tours");
        dispatch(setSelectedDest(item.id));
      }} className="mt-3 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
        Read More
      </button>
    </div>
  </motion.div>
  );
};

export default DestCard;