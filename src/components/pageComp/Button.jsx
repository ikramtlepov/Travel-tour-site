import React from 'react'

const Button = ({ children, icon, addStyle }) => {
  const Icon = icon 
  return (
    <button className={` cursor-pointer ${addStyle} duration-500 text-[18px] py-2 px-3  active:scale-95 flex justify-center items-center`}>
      {children}
      {Icon && <Icon className="ml-2" />} 
    </button>
  )
}

export default Button