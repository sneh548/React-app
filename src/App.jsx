// // import { RouterProvider } from "react-router-dom";
// // import router from "./Routes";
// // import Header from "./components/Header";

// // export default function App() {
// //   return (
// //     <>
// //     <Header/>
// //      <RouterProvider router={router} />
// //      </>

// //   );
// // }
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Home from "./Home";
// import About from "./About";
// import Header from "./components/Header";
// import Login from "./auth/Login";
// import Register from "./auth/register";
// import Contact from "./Contact";
// import Mainlayout from "./layouts/Mainlayout";
// function App() {
//   return (
//     <>
//       {/* <Header /> */}
//       <BrowserRouter>
//         {/* <Navigation /> */}
//         <Routes element={<Mainlayout/>}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//                <Route path="/contact" element={<Contact />} />
//           <Route path="/auth/login" element={<Login />} />
//           <Route path="/auth/register" element={<Register />} />
//           {/* Add more routes here */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Productlist from "./products/Productlist";
import ProductDetails from "./products/ProductDetail";
import { Provider } from "react-redux";
import store from "./redux/storage";
import AuthLayout from "./layouts/AuthLayout";


function App() {
  

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* Main layout routes */}
            <Route element={<Mainlayout />}>
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products">
                <Route index element={<Productlist />} />
                <Route path=":id" element={<ProductDetails />} />
              </Route>
              {/* <Route path="/auth/login" element={<Login />} /> */}
            </Route>
            </Route>

            {/* Auth routes (without Mainlayout) */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <div>
        <h1>Frontend</h1>
      </div>
    </>
  );
}

export default App;
