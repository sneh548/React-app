import Header from "./components/Header";
import { useSelector } from "react-redux";

const About = () => {
  const {count} = useSelector((state) => state.counter);
  return(
  <section>
    {/* <Header /> */}
    <h1 className="mt-24">About Page</h1>
    <p>count in the homepage:{count}</p>
  </section>
  );
};

export default About;
