import { Link } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import Title from "../components/Title";
import { REGISTER_ROUTE } from "../constants/routes";

const Login = () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 h-[60vh] ">
        <div className="flex items-center justify-between h-full ">
          <div className="md:w-1/2">
            <p className="text-3xl">WElCOME TO OUR </p>
            <p className="text-7xl text-teal-300">shooping site</p>
            <p className="m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              nulla earum tempora soluta quas asperiores ab ipsa sint eveniet
              animi.
            </p>
            <p>
              Please login to continue <Link to={REGISTER_ROUTE}>Register</Link>
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
