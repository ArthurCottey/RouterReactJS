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
                  <CustomLink href="/">Home</CustomLink>
                  <CustomLink href="/about">About</CustomLink>
                  <CustomLink href="/blogs">Blogs</CustomLink>
              </ul>
          </div>
      </nav>
  )
}

function CustomLink({ href, children, ...props}) {
    let path = window.location.pathname
    return (
        <li >
            <a href={href} {...props} className={path === href ? 'active' : ''}>{children}</a>
        </li>
    )
}