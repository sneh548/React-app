import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Mainlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <h1 className="mt-8">this is the main layout</h1>
    </div>
  );
};

export default Mainlayout;
