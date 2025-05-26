import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Service from './Service'
import About from './About'
import App from './App'
// import List from './List' // Optional

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<App />}>
          <Route path='service' element={<Service />} />
          <Route path='about' element={<About />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default Routes
