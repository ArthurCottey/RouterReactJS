import react from 'react'
import {Link, useMatch, use, useResolvedPath} from 'react-router-dom'
import logo from './logo.svg';

export const Navbar = () => {
  return(
      <nav>
          <div className="container">
              <div className="logo">
                  <img src={logo} className="App-logo" alt="logo"/>
              </div>
              <ul>
                  <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/about">About</CustomLink>
                  <CustomLink to="/blogs">Blogs</CustomLink>
              </ul>
          </div>
      </nav>
  )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li>
            <Link to={to} className={isActive ? 'link active' : 'link'} {...props}>
                {children}
            </Link>
        </li>
    )
}