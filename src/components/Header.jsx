import React from 'react'
import { Navbar } from './Navbar'
import axios from 'axios'
import { useContext,useState } from 'react'
import { IP_Context } from '../context/UserIPAddress'

export const Header = () => {

  const {userip, setuserip} = useContext(IP_Context)

  const [inputdata, setinputdata] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();

    setuserip(inputdata)

  }

  return (
    <>

    <div className='container m-auto text-center p-4'>
        <form className='p-3' onSubmit={handleSubmit}>

          <div className=''>

          <input type="text"
          placeholder='your ip addres'
          required 
          onChange={(e)=>setinputdata(e.target.value)}
          />
          
          <button type='submit' className='btn btn-primary'>Find</button>

          </div>
          
        </form>
    </div>


    <Navbar/>
    
    </>
  )
}
