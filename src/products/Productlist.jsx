// import React from 'react'

import { use, useEffect } from "react";
import { getProducts } from "../API/product";
import ProductsCard from "../components/products/ProductsCard";
import Title from "../components/Title";
// import Prod?uctsCard from ProductsCard"
import products from "../data";

const Productlist = () => {
  

  useEffect(() => {
getProducts();
  } , []);
  return (
    <section className="py-12">
      <div className="max-w-screen-xl max-auto px-4">
        <Title label="new arrivals" />
        <div>
          <div className="grid   gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ">
            {products.map((product) => (
              <ProductsCard
                key={product.id}
                name={product.name}
                brand={product.brand}
                category={product.category}
                price={product.price}
              />
            ))}
            {/* <ProductsCard/>
         <ProductsCard/>
          <ProductsCard/>
           <ProductsCard/>
            <ProductsCard/>
             <ProductsCard/> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productlist;
