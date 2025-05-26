import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import LIst from "./LIst";

const Routes = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
      <Route>
      <Route path = "/home " element={<Home/>} />
     <Route path = "/about " element={<About/>} />
     {/* <Route path = "/list " element={<LIst/>} /> */}
     </Route> ));

    return <RouterProvider router={router}/>;
    };
     


export default Routes ;
