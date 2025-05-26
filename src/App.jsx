import { Outlet, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>My App Layout</h1>
      <nav>
        <Link to='home'>Home</Link> | <Link to='about'>About</Link>
      </nav>
      <hr />
      <Outlet /> {/* This is where nested routes will render */}
    </div>
  )
}

export default App
