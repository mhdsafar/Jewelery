import React from 'react'

import ProductTitle from './ProductTitle.jsx'
import PriceRange from './PriceRange.jsx'
import NewArrival from './NewArrival.jsx'




const Product = () => {
  return (
   <div className="flex flex-col w-full h-full text-white  pt-8  max-w-7xl mx-auto gap-8">
  
  <section>
    <ProductTitle />
  </section>
  <section>
    <PriceRange/>
  </section>
    <section>
      <NewArrival/>
    </section>
    
</div>
  )
}

export default Product
