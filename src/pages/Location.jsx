import React from 'react'
import { useContext } from 'react'
import { IP_Context } from '../context/UserIPAddress'


export const Location = () => {

  const {ipdata, setipdata} = useContext(IP_Context)

  console.log(ipdata)

  const {city,postcode,area,continent,location,country} = ipdata;
  
  return (


    <div className='w-25 m-auto cardTable'>
        <table className='table text-center m-auto' width={25}>
          <thead className='thead-dark'>
            <tr>
              <th>City</th>
              <td>{city?.name}</td>
            </tr>
            <tr>
              <th>Postcode</th>
              <td>{postcode}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{area?.name +" "+ area?.code}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{country?.flag?.emoji +" "+country?.name +" "+country?.code}</td>
            </tr>
            <tr>
              <th>Continent</th>
              <td>{continent?.name}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{location?.latitude +","+location?.longitude}</td>
            </tr>
          </thead>
        </table>
    </div>
        

  )
}
