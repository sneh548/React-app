// import React from 'react'

import { useEffect, useState } from "react";
import { getProducts } from "../API/product";
import ProductsCard from "../components/products/ProductsCard";
import Title from "../components/Title";

import products from "../data";
import { set } from "react-hook-form";

const Productlist = () => {
  // const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((response) => {
        setProductList(response.data); // <-- fixed this line
        setLoading(false);
      })
      .catch();
    // .catch(() => {
    //   // console.error("Error fetching products:", error);
    //   // setLoading(false);
    // });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="py-12">
      <div className="max-w-screen-xl max-auto px-4">
        <Title label="new arrivals" />
        <div>
          <div className="grid   gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ">
            {productList.map((product) => (
              // <div key={product._id}>{product.name}</div>
              // ))}
              <ProductsCard key={product._id} id={product._id} {...product} />
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
