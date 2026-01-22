import React from 'react'
import {Range} from '../Constants/Price.js'

const PriceRange = () => {
  return (
    <div className='  w-full flex justify-center'>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-17'>
        {
        Range.map((item,index)=>(
          <div key={index} className="w-[270px] h-[276px]  relative" >
            <img src={item.image} alt={item.label} />
            <div className='absolute  w-full  flex flex-col right-0 bottom-0  p-4 justify-center items-center hover:bg-[#6a760c]/50 transition-all duration-300'>
                <h2 className='font-bold text-2xl'>{item.label}</h2>
                <p className='text-[#DBF227]'>{item.value}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default PriceRange;
