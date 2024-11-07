import { GiAirplaneDeparture } from "react-icons/gi";
import React from 'react'
import { btnData } from "../config/const";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../store/slices/pageActionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SidebarBtn from "./pageComp/SidebarBtn";
import Button from "./pageComp/Button";


const Sidebar = () => {

  const dispatch = useDispatch()
  const { t } = useTranslation()
  return (
    <div 
    onClick={e => e.stopPropagation()} 
    className={`md:hidden transition-transform duration-500 ease-in-out`}
  >
    <div className='flex justify-center items-center gap-1 text-[18px] font-bold text-gray-900 mt-[10px]'>
      <GiAirplaneDeparture className="w-[30px] h-[30px] text-blue-600 " />
      <span className="text-blue-600">Trxl</span>
    </div>
    <hr className="mt-[10px] " />
    <div className="mt-[10px] text-center flex flex-col gap-2 ">
      {btnData.map(btn => (
        <Link to={btn.path} key={btn.id} onClick={() => dispatch(toggleSidebar())}>
          <SidebarBtn>
            <span>{t(btn.title)}</span>
          </SidebarBtn>
        </Link>
      ))}
      <Link to={"/registration" }   onClick={() => dispatch(toggleSidebar())}>
      <Button addStyle={"py-[7px] duration-300 px-[15px] w-full text-[16px] bg-orange-500 text-white flex justify-start font-[600] items-center gap-2 shadow-sm rounded-md hover:bg-gray-100 active:scale-95"}>
        Sign Up
      </Button>
      </Link>
     <Link to={"/booknow"} onClick={() => dispatch(toggleSidebar())}>
     <Button addStyle={"py-[7px] duration-300 px-[15px] w-full text-[16px] bg-orange-500 text-white flex justify-start font-[600] items-center gap-2 shadow-sm rounded-md hover:bg-gray-100 active:scale-95"}>
        Book Now
      </Button></Link>
    </div>
  </div>
  )
}

export default Sidebar