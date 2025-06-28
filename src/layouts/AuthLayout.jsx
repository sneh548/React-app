

import { Navigate, Outlet } from "react-router-dom";
import { LOGIN_ROUTE } from "../constants/routes";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { user } = useSelector((state) => state.auth);

  // return user ? <Outlet /> : <Navigate to={LOGIN_ROUTE} replace />;
   return (
    <div>
      <Outlet />
    </div>
   );
};

export default AuthLayout;


// import { Outlet } from "react-router-dom";

// const AuthLayout = () => {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// };

// export default AuthLayout;
