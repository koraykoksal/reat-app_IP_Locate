import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
    <Nav className="justify-content-center p-3 text-danger" variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/">Location</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/time">Time</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/security">Security</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/more">More</Link>
      </Nav.Item>
    </Nav>
    
    </>
  )
}
