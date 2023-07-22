import React, { useContext } from 'react'
import { IP_Context } from '../context/UserIPAddress'
import { NavItem } from 'react-bootstrap';

export const More = () => {

  const {ipdata, setipdata} = useContext(IP_Context)

  const {country} = ipdata;




  return (
    
    <div className=' col-sm-4 col-md-4 m-auto cardTable'>
    <table className='table text-center m-auto' width={25}>
      <thead className='thead-dark'>
        <tr>
          <th>Languages</th>
          <td>{country?.languages?.tr}</td>
        </tr>
        <tr>
          <th></th>
          <td>{country?.languages?.az}</td>
        </tr>
        <tr>
          <th></th>
          <td>{country?.languages?.av}</td>
        </tr>
        <tr>
          <th></th>
          <td>{country?.languages?.ku}</td>
        </tr>
      </thead>
    </table>
</div>

  )
}
