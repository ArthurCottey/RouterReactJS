import react from 'react'
import logo from './logo.svg';

export const Navbar = () => {
  return(
      <nav>
          <div className="container">
              <div className="logo">
                  <img src={logo} className="App-logo" alt="logo"/>
              </div>
              <ul>
                  <li>
                      <a href="#" className="active">Home</a>
                  </li>
                  <li>
                      <a href="#" className="">About</a>
                  </li>
                  <li>
                      <a href="#" className="">Blogs</a>
                  </li>
              </ul>
          </div>
      </nav>
  )
}