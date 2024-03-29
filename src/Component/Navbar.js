import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
      <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <buthrefn className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">Home</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleButton} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" for="flexSwitchCheckDefault">DarkMode enable</label>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
                // propTypes 
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string};

//                 //   default propTypes
// Navbar.defaultProps = {
//   title:'title bhana here',
//   about:'about  byanu here'
// };