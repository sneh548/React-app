// import React from 'react'
import jacket from "../../assets/img/jacket.png";
const ProductsCard = (props) => {
  const{name,brand,category,price}=props;
  return (
    <div className=" py-4 px-6 rounded-2xl bg-slate-200 w-max shadow relative">
        <span className="bg-teal-900 text-xs rounded-xl text-white  absolute top-4 right-2" >{category}</span>
      <img src={jacket} alt="" className="h-60 w-auto mx-auto" />
      <h1 className="text-xl">{name}</h1>
      <p>{brand}</p>
      
      <p className="my-2">
        <span className="line-through text-slate-500">$300</span>
        <span className="text-xl">{price}</span>
      </p>
      <button className="bg bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700">
        Buy now
      </button>
    </div>
  );
};

export default ProductsCard;
