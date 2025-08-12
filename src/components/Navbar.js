import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode} p-3 px-5 border border-top-0` }>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        {/* <li className="nav-item dropdown" >
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.list}
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href='/'>{props.about}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
       {/* <button className="btn btn-outline-primary" type="submit">Dark Mode</button> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode==='light'?'Night':'Day'}</label>
      </div>
    </div>
  </div>
       </nav>
    </div>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string,
  about:PropTypes.string
}

Navbar.defaultProps = {
  title: 'tamana',
  list: 'dropdownlist',
  about: 'about',
};

