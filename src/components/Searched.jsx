import React, { useContext } from 'react'
import { IP_Context } from '../context/UserIPAddress'
import { useEffect } from 'react'

export const Searched = () => {

  const {searched,setsearched} = useContext(IP_Context)
  


  return (

    <div className='contaciner'>
      <div className='col-sm-4 col-md-4 m-auto text-center p-3'>
        <h5>Searched : {searched}</h5>
      </div>
      
    </div>
  )
}
