import React from 'react'

const NewArrival = () => {
  return (
    <div className='max-w-7xl flex flex-col mt-10 '>
        <div className=' w-full  flex justify-between bg-amber-900 '>
            <div className='flex flex-col '>
              <h1 className='text-white font-playfair '>New Arrival</h1>
              <p className='text-md font-extralight text-gray-400 font-sans'>234 New item added</p>
            </div>
            <div className='flex  items-center '>
              <p className='font-sans font-bold text-[16px]'> see all</p>
            </div>
        </div>
      
    </div>
  )
}

export default NewArrival
