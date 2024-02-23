import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Navbar = () => {

    const{darkTheme, dispatch} = useContext(ThemeContext) 

    const changeTheme = () => {
dispatch({
    type: "CHANGE",
    
})
    }
  return (
<nav className={darkTheme? "navbar bg-dark text-primary text-uppercase fw-bolder" : "navbar bg-light text-dark text-uppercase shadow-lg"}>
  <div className="container-fluid">
    <span className={darkTheme ? "navbar-brand mb-0 h1 text-light" : "navbar-brand mb-0 h1 text-dark"}>Contact Manager</span>
    <button className={darkTheme? "btn btn-primary btn-sm" : "btn btn-dark btn-sm"} onClick={changeTheme}>
        {darkTheme ? "Dark Mode" : "Light Mode" }
        </button>

  </div>
</nav>

  )
}

export default Navbar
