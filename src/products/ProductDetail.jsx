import { useParams } from "react-router-dom";
import jacket from "../assets/img/jacket.png";
import Title from "../components/Title";
// const ProductDetails = () => {
// const params = useParams();

const ProductDetails = () => {
  const params = useParams();
  console.log(params); // you can see your route params here

  return (
    <section className="py-12 bg-slate-200">
      <div className="flex items-center justify-around">
        <img src={jacket} alt="Jeans Jacket" />
        <div>
          <span className="bg-teal-900 text-xs rounded-xl text-white px-2 py-1">
            Clothing
          </span>
          <Title label="Jeans Jacket" />
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            expedita!
          </p>
          <p className="font-semibold">Levi's</p>
          <p className="my-2">
            <span className="line-through text-slate-500 mr-2">$399</span>
            <span className="text-xl font-bold">$299</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
