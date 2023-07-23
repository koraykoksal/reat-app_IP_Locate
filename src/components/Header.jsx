import React from 'react'
import { Navbar } from './Navbar'
import axios from 'axios'
import { useContext,useState } from 'react'
import { IP_Context } from '../context/UserIPAddress'
import { FcSearch } from 'react-icons/fc'
import {AiOutlineWifi} from 'react-icons/ai'



export const Header = () => {

  const {userip, setuserip} = useContext(IP_Context)
  const {searched,setsearched} = useContext(IP_Context)

  const [inputdata, setinputdata] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();

    setuserip(inputdata)
    setsearched(inputdata)
    setinputdata("")
  }
console.log("input data",inputdata)
  return (
    <>

    <div className='container m-auto text-center p-4 search'>

      <div className='text-center text-primary p-5'>
      <h3>With Your IP Address Country Information</h3>
      </div>
      

        <div className='row'>
        
        <div className='col wifiIcon'>
        <AiOutlineWifi 
          size={25}/>
        </div>
          
          
          <div className='col-sm-4'>
          <input 
          type="text"
          placeholder='Your IP Addres'
          required
          value={inputdata} 
          onChange={(e)=>setinputdata(e.target.value)}
          />
          </div>
          
          <div className='col btnSearch'>
          <FcSearch 
          size={30}
          type='button'
          onClick={handleSubmit}
          />
          </div>
          

        </div>
    </div>


    <Navbar/>
    
    </>
  )
}
