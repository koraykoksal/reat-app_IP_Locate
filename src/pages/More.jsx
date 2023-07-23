import React, { useContext } from 'react'
import { IP_Context } from '../context/UserIPAddress'
import { NavItem } from 'react-bootstrap';

export const More = () => {

  const {ipdata, setipdata} = useContext(IP_Context)

  const {country} = ipdata;

  let lang=[]

  function traverseObject(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        traverseObject(obj[key]);
      } else {
        // console.log(`${key}: ${obj[key]}`);
        lang.push(`${key}: ${obj[key]}`)
      }

    }
    
  }
  

  
  traverseObject(country?.languages);
  console.log("langg",lang)

  return (
    
    <div className=' col-sm-4 col-md-4 m-auto cardTable'>
    <table className='table text-center m-auto' width={25}>
      <thead className='thead-dark'>
        <tr>
          <th>Languages</th>
          <td></td>
        </tr>
        { lang.map((item)=>(
          <tr>
          <td>{item}</td>
          </tr> 
        )) }
      </thead>
    </table>
</div>

  )
}
