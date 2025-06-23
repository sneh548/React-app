// import React from 'react'

import { useEffect, useState } from "react";
import { getProducts } from "../API/product";
import ProductsCard from "../components/products/ProductsCard";
import Title from "../components/Title";

import products from "../data";

const Productlist = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  useEffect(() => {
    getProducts();
  }, []);
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
