import { useDispatch,useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "./redux/counter/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.counter);
  function increaseCountValue() {
    dispatch(increaseCount());
  }
  return (
    <section>
      {/* <Header /> */}
       <h1>homepage</h1>
       <p>count:{count}</p>
       <button className="bg-red-500 text-white py-2 px-5" onClick={increaseCountValue}>+</button>
      <button className="bg-blue-600 text-white py-2 px-5" onClick={()=>dispatch(decreaseCount())}>-</button>
     
    </section>
   
   
    
  )

}

export default Home;


//  <a
//                   href={menu.route}
//                   className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700   "
//                   aria-current="page"
//                 >
//                   {menu.label}
//                 </a>