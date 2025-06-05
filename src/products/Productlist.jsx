// import React from 'react'

import ProductsCard from "../components/products/ProductsCard"
import Title from "../components/Title"
// import Prod?uctsCard from ProductsCard"

const Productlist = () => {
  return (<section className="py-12">
    <div className="max-w-screen-xl max-auto px-4">
      <Title label="new arrivals"/>
      <div>
        <div className="grid   gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ">
        <ProductsCard/>
         <ProductsCard/>
          <ProductsCard/>
           <ProductsCard/>
            <ProductsCard/>
             <ProductsCard/>
      
      </div>
      </div>
    </div>
    </section>
    
  )
}

export default Productlist
