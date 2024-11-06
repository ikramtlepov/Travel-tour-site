import React from 'react'

const Loading = () => {
  return (
    <div className=' h-[calc(100vh-420px)] justify-center items-center flex  gap-2'>
      <span className='text-[30px] font-bold text-orange-500'>Loading</span>
      <div className="loader">

      </div>
    </div>
  )
}

export default Loading