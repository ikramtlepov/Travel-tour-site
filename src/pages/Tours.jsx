import React, { useEffect } from 'react'
import Container from '../components/pageComp/Container'
import TourCard from '../components/pageComp/TourCard'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedDest } from '../store/slices/pageActionSlice'


const Tours = () => {
  const { tours, isTourLoad } = useSelector(state => state.tourSlice)
  const { selectedDest } = useSelector(state => state.pageActionSlice)
  console.log(typeof selectedDest)
  const dispatch = useDispatch()
  useEffect(()=>{
     window.scrollTo(0,0)
  },[])
  return (
    <div>
    <Container>
      <div>
        <h1 className='text-[24px] font-bold text-orange-500 py-3'>Tour Packages</h1>
        {selectedDest ? (
          <div>
            <div className='grid justify-center grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[10px] '>
              {tours.filter(tour => tour.destinationId === selectedDest).map(item => (
                <TourCard item={item} key={item.id} />
              ))}
            </div>
            <div className='flex justify-center'>
              <button
                onClick={() => {
                  dispatch(setSelectedDest(null));
                }}
                className='my-5 py-2 duration-500 bg-gray-200  font-medium text-[14px] active:scale-95 px-5 hover:bg-gray-300 rounded-lg'>
                View All Tours
              </button>
            </div>
          </div>
        ) : (
          <div>
            {isTourLoad ?  (
              <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[10px]'>
                {[1, 2, 3, 4,5,6,7,8,9,10].map(i => (
                  <div className='rounded-md shadow-md border-[1px] h-[350px] w-[350px] animate-pulse bg-black bg-opacity-10' />
                ))}
              </div>
            ) : (
              <div className="mt-3 ">
                <div className='grid  justify-center grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[10px] '>
                  {tours.map(item => (
                    <TourCard item={item} key={item.id} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  </div>
  )
}

export default Tours