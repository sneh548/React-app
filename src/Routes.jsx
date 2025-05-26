import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import App from './App'
// import List from './List' // Optional

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<App />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default Routes
