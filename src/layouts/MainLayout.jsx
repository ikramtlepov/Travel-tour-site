import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet} from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDestData, getAllTourData } from '../api/request'
import Footer from '../pages/Footer'
import { toggleSidebar } from '../store/slices/pageActionSlice'


const MainLayout = () => {
  const baseUrl = "https://travel-data-p3vn.onrender.com"
  const dispatch = useDispatch()
  const { showSidebar } = useSelector(state => state.pageActionSlice)


  useEffect(() => {
    dispatch(getAllDestData(`${baseUrl}/destinations`))
    dispatch(getAllTourData(`${baseUrl}/offers`))
  }, [])
  return (
    <div 
    onClick={() => {
      if (showSidebar) {
        dispatch(toggleSidebar());
      }
    }} 
    className='h-[100vh] relative font-mont'
  >
    <div className='bg-centerbg-cover'>
      <div className='top-0 left-0 right-0'>
        <Header />
      </div>
      <Outlet />
    </div>
    <div
      className={`max-w-[250px] min-w-[250px] md:hidden bg-orange-100 h-full sticky border-[1px] shadow-md rounded-md p-[10px] top-0 bottom-0 transition-transform duration-500 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <Sidebar />
    </div>
   <div className='static bottom-0 right-0 left-0 '>
   <Footer />
   </div>
  </div>
  )
}

export default MainLayout