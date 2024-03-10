import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// impt
export default function Navbar(props) {
  const chred = () => {
     if(props.mode==='red'){
      
      props.setmode('light');
      document.body.style.backgroundColor='white';
      props.showalert("light mode enbled","success");
    }
    else{
      props.setmode('red');
      document.body.style.backgroundColor='#a32f3b';
      props.showalert("red mode enbled","success");
    }
  }
  const chgreen = () => {
    if(props.mode==='green'){
      props.setmode('light');
      document.body.style.backgroundColor='white';
      props.showalert("light mode enbled","success");
    }
    else{
      props.setmode('green');
      document.body.style.backgroundColor='#3c623f';
      props.showalert("red mode enbled","success");

    }
  }
  return (
    <div>
         <nav className={`navbar navbar-expand-lg  navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
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
        
        
      </ul>
      <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
      <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'red':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={chred}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red mode</label>
</div>
      <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'green':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={chgreen}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green mode</label>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
    title: PropTypes.string
    // title: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: "set Title here"
}