import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {BiLocationPlus,BiTimeFive,BiSolidCity} from 'react-icons/bi';
import {CiCircleMore} from "react-icons/ci"

export const Navbar = () => {


  return (
    <>

    <div className='navs'>

      
      <li>
        <BiLocationPlus size={25}/> <Link to="/location" >Location</Link>
      </li>

      <li>
        <BiTimeFive size={25}/> <Link to="/time">Time</Link>
      </li>

      <li>
        <BiSolidCity size={25}/><Link to="/country">Country</Link>
      </li>
      
      <li>
      <CiCircleMore size={25}/> <Link to="/more">More</Link>
      </li>
      
    </div>
    
    </>
  )
}
