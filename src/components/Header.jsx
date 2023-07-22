import React from 'react'
import { Navbar } from './Navbar'
import axios from 'axios'
import { useContext,useState } from 'react'
import { IP_Context } from '../context/UserIPAddress'
import { FcSearch } from 'react-icons/fc'
import {AiOutlineWifi} from 'react-icons/ai'



export const Header = () => {

  const {userip, setuserip} = useContext(IP_Context)

  const [inputdata, setinputdata] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();

    setuserip(inputdata)

  }

  return (
    <>

    <div className='container m-auto text-center p-4 search'>

        <form className='p-3'>

          <div className='searchInput'>

          <AiOutlineWifi 
          size={25}/>
          
          <input 
          type="text"
          placeholder='Your IP Addres'
          required 
          onChange={(e)=>setinputdata(e.target.value)}
          />
          
          </div>

          <div>
          {/* <button type='submit' className='btn btn-primary'>Find</button> */}
          <FcSearch 
          size={30}
          type='button'
          onClick={handleSubmit}
          />
          </div>
          
        </form>
    </div>


    <Navbar/>
    
    </>
  )
}
