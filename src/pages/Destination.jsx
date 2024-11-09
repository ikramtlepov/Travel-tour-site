import React, { useEffect } from 'react'
import DestCard from '../components/pageComp/DestCard'
import { useSelector } from 'react-redux'
import Loading from '../components/pageComp/Loading'
import Button from '../components/pageComp/Button'
import Container from '../components/pageComp/Container'
import videoImg from "../img/image 1.png"
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Destination = () => {
   const { destinations, isDestLoad } = useSelector(state => state.destinationSlice)
   useEffect(()=>{
      window.scrollTo(0,0)})
   return (
      <div className="mt-2">
      <Container>
         <div className='flex justify-center text-center sm:text-start flex-col md:flex-row border-[1px] border-gray-200 shadow-lg rounded-md py-4 px-5'>
            <div className='flex flex-col gap-2 flex-1 '>
               <h3 className='md:text-[35px] text-[28px] text-blue-500'>Destinations</h3>
               <p className='py-3 text-[18px] font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eius sequi repudiandae, reiciendis possimus tempora odit repellendus officia recusandae quod, magnam deserunt quibusdam eveniet, vero eos praesentium amet error iusto?
               </p>
               <Link to={"/tours"} className='flex justify-center md:justify-start relative text-orange-500'>
                  <Button children={"View All Tours"} addStyle={"rounded-md border-[1px] border-orange-600"} />
               </Link>
            </div>
            <div className='flex-1 p-4'>
               <video className="rounded-md min-w-[calc(100vh-700px)] w-full h-full" autoPlay loop muted playsInline>
                  <source src="https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4" type="video/mp4" />
                  <img src={videoImg} alt="Video preview" className="rounded-md w-full h-full" />
               </video>
            </div>
         </div>
         {isDestLoad ? (
            <div>
               <Loading />
            </div>
         ) : (
            <div className="mt-3 ">
               <h1 className="text-center text-[34px] font-semibold py-4 text-orange-500">All Destinations</h1>
               <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[10px] justify-center w-full '>
                  {destinations.destinations?.map((item, index) => (
                     <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }} 
                     >
                        <DestCard item={item} />
                     </motion.div>
                  ))}
               </div>
            </div>
         )}
      </Container>
   </div>
);
   
}

export default Destination


