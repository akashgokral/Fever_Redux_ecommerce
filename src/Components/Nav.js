import React from 'react'
import logo from "../Assets/img1.png"

const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <h1 className='me-5'>fiverr</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-start">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Messages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Gigs</a>
        </li>   
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Analytics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Earnings</a>
        </li>
      </ul>
    </div>
    <div className='logo_div'><img src={logo}/></div>
  </div>
</nav>
    </>
  )
}

export default Nav