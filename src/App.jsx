import { Outlet, Link, useLocation } from 'react-router-dom'
import MusicPlayer from './components/musiclibrary.jsx'

const App = () => {
  const location = useLocation()
  const showMusicPlayer =
    location.pathname === '/' || location.pathname === '/app/'

  return (
    <div className='content-center items-center text-2xl'>
      <div className='flex justify-between flex-col'>
        <div>
          <h1 className='text-center'>My App Layout</h1>
          <h2 className='text-center'>First landing page</h2>
        </div>
        <div className='item-center flex flex-row justify-between m-2 p-3'>
          <div>
            <Link to='home'>
              <button>Home</button>
            </Link>
          </div>
          <div>
            <Link to='about'>
              <button>About</button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Outlet />
      {showMusicPlayer && <MusicPlayer />} {/* Only on /app */}
    </div>
  )
}

export default App
