// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// // import LIst from "./LIst";

// const Routes = () => {
//     const router = createBrowserRouter(
//       createRoutesFromElements(
//       <Route>
//       <Route path = "/home " element={<Home/>} />
//      <Route path = "/about " element={<About/>} />
//      {/* <Route path = "/list " element={<LIst/>} /> */}
//      </Route> ));

//     return <RouterProvider router={router}/>;
//     };

// export default Routes ;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
  PRODUCTS_ROUTE,
  REGISTER_ROUTE,
} from "./constants/routes";
import Mainlayout from "./layouts/Mainlayout";
import Login from "./auth/Login";
import Register from "./auth/register";
import Productlist from "./products/Productlist";
import ProductDetails from "./products/ProductDetail";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Mainlayout />}>
//       <Route index element={<Home />} />
//       <Route path={ABOUT_ROUTE} element={<About />} />
//       <Route path={CONTACT_ROUTE} element={<Contact />} />
//       <Route path={LOGIN_ROUTE} element={<Login />} />
//       <Route path={REGISTER_ROUTE} element={<Register />} />
//       <Route path={PRODUCTS_ROUTE}>
  
//   <Route path="/products">
//     <Route index element={<Productlist />} />
//     <Route path=":id" element={<ProductDetails />} />
//   </Route>



//     </Route>
//   )
// );

// export default router;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Mainlayout />}>
      <Route index element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={CONTACT_ROUTE} element={<Contact />} />
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={REGISTER_ROUTE} element={<Register />} />

      <Route path={PRODUCTS_ROUTE}>
        <Route index element={<Productlist />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>

    </Route>
  )
);

export default router;

