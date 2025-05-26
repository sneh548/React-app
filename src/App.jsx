import { Outlet, Link, useLocation } from 'react-router-dom'
import Component from './components/Home.jsx'
// import { Header } from './Header.jsx'

const App = () => {
  const location = useLocation()
  const showMusicPlayer =
    location.pathname === '/' || location.pathname === '/app/'

  return (
    <div className='content-center items-center text-2xl'>
      {/* <Header /> */}
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold text-gray-900'>Brand</h1>
            </div>
            <nav className='hidden md:flex space-x-8'>
              <Link
                to='/'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Home
              </Link>
              <Link
                to='about'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                About
              </Link>
              <Link
                to='service'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Services
              </Link>
              <Link
                to=''
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Contact
              </Link>
            </nav>
            <button className='bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors'>
              Get Started
            </button>
          </div>
        </div>
      </header>
      <Outlet />
      {showMusicPlayer && <Component />} {/* Only on /app */}
    </div>
  )
}

export default App
