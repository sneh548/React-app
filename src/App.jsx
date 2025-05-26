
// import Routes from "./Routes"

// import Home from "./Home"

// export default function App() {
//   return <>
//   <h1>Hello World!</h1>
// <Home/>
// <Routes/>
//   </>
// }


import { RouterProvider } from "react-router-dom";
import router from "./Routes";
// import Navbar from "./components/Navbar"


export default function App() {
  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
    </>
  );
}