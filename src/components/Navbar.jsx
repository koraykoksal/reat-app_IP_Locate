import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export const Navbar = () => {


  return (
    <>

    {/* <Nav className="justify-content-center p-3 text-danger" variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/location">Location</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/time">Time</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/country">Country</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/more">More</Link>
      </Nav.Item>
    </Nav> */}

    <div className='nav navs'>
      {/* <div>
        <li><Link to="/location">Location</Link></li>
      </div>
      <div>
        <Link to="/time">Time</Link>
      </div>
      <div>
        <Link to="/country">Country</Link>
      </div>
      <div>
        <Link to="/more">More</Link>
      </div> */}
      
      <li><Link to="/location">Location</Link></li>
      <Link to="/time">Time</Link>
      <Link to="/country">Country</Link>
      <Link to="/more">More</Link>
    </div>
    
    </>
  )
}
