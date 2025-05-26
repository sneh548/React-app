import { Outlet, Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='content-center items-center  text-2xl'>
      <div className='flex justify-between flex-col '>
        <div className=''>
          <h1 className='text-center'>My App Layout</h1>
        </div>
        <div className=' item-center flex flex-row justify-between m-2 p-3'>
          <div>
            <Link to='home'>
              <button>Home</button>
            </Link>{' '}
          </div>
          <div>
            <Link to='about'>
              <button>About</button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Outlet /> {/* This is where nested routes will render */}
    </div>
  )
}

export default App
