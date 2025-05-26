import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Routes from './Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
    {/* <h1>This is student from purwanchal</h1> */}
  </StrictMode>
)
