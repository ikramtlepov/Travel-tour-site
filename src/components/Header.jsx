import { RiMenuFoldFill } from "react-icons/ri";
import React from 'react'
import Container from './pageComp/Container'
import { Link, NavLink } from 'react-router-dom'
import Button from './pageComp/Button'
import {  toggleSidebar } from '../store/slices/pageActionSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const { showSidebar } = useSelector(state => state.pageActionSlice)
 


  return (
    <div className='flex items-center h-[80px] justify-between p-[10px] gap-1'>
      <Container className='flex justify-between items-center'>
        <Link to={"/"} className='bg-white text-[24px] md:text-blue-600 text-orange-400'>
          TRXL
        </Link>
        <div className=' justify-end items-center gap-[10px] '>
          <div className="hidden justify-between items-center gap-[10px] text-gray-600 md:flex ">
            <NavLink
              className="text-[18px] font-semibold"
              to={"/"}>
              Home
            </NavLink>

            <NavLink
              className="text-[18px] font-semibold "
              to={"/destination"}>
              Destination
            </NavLink>

            <NavLink
              className="text-[18px] font-semibold "
              to={"/tours"}>
              Tours
            </NavLink>
          </div>
        </div>
        <div className='relative flex justify-between items-center gap-3 font-bold text-gray-700'>
          <div className=" justify-between flex items-center gap-2">
            <Link to={"/registration"} className=' md:flex hidden'>
              <Button >
                Sign in
              </Button>
              
            </Link>

            <Link to={"/booknow"}>
            <Button addStyle={" rounded-full text-blue-600 border border-blue-700 "}>
                Book Now
              </Button>
            </Link>
          </div>
         
          <button onClick={() => {
            dispatch(toggleSidebar())
            if (showSidebar) {
              dispatch(toggleSidebar())
            }
          }} className={` ${showSidebar ? "opacity-100" : "opacity-50"} w-[30px] h-[40px] rounded-md bg-orange-600 hover:bg-orange-400 text-white flex justify-center items-center shadow-sm active:scale-95 text-[20px]  md:hidden  `} >
            <span className={` ${showSidebar ? "rotate-180" : "rotate-0"} duration-500`}>
              <RiMenuFoldFill />
            </span>
          </button>

        </div>
      </Container>
    </div>
  )
}

export default Header