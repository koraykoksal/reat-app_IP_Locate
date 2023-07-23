import React, { useContext } from 'react'
import { IP_Context } from '../context/UserIPAddress'
import { useEffect } from 'react'

export const Searched = () => {

const {searched,setsearched} = useContext(IP_Context)

const ips=[]

  for(const i of searched){
    console.log(i)
    ips.push(i)
  }


  return (

    <div className='contaciner'>
      <div className='col-sm-4 col-md-4 m-auto text-center p-3'>
        {/* <h5>Searched : {searched}</h5> */}
        <h5>Searched</h5>
        {
          ips.map(item=>(
            <h6>{item}</h6>
          ))
        }
      </div>
      
    </div>
  )
}
