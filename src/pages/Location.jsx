import React from 'react'
import { useContext } from 'react'
import { IP_Context } from '../context/UserIPAddress'


export const Location = () => {

  const {ipdata, setipdata} = useContext(IP_Context)

  console.log(ipdata)

  const {city} = ipdata;
  
  return (
    <div className="card m-auto" style={{ width: "25rem",height:"18rem"}}>
      <div className="card-body text-center">


        <h5 className="card-title">{city?.name}</h5>


      </div>
    </div>
  )
}
