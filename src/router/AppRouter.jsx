import React from 'react'
import { Footer } from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar'
import { Location } from '../pages/Location'
import { Time } from '../pages/Time'
import { Security } from '../pages/Security'
import { More } from '../pages/More'
import { Header } from '../components/Header'
import { useState,useEffect } from 'react'
import { IP_Context } from '../context/UserIPAddress'
import axios from 'axios'

export const AppRouter = () => {

  const [userip, setuserip] = useState("101.44.220.0")
  const [ipdata, setipdata] = useState("")

  const getData= async()=>{
  
    try {

      const res = await axios(`https://api.getgeoapi.com/v2/ip/${userip}?api_key=6fe716c83dcc675fd1459099f2107edf17efb97c`)
      
      setipdata(res.data)


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
    
    if(userip){
      getData();
    }
 
  }, [userip])

  return (
    <>
    <IP_Context.Provider value={{userip,setuserip,ipdata,setipdata}}>

    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='location' element={<Location />}/>
        <Route path='time' element={<Time/>}/>
        <Route path='security' element={<Security/>}/>
        <Route path='more' element={<More/>}/>
      </Route>
    </Routes>

    </IP_Context.Provider>


    </>
  )
}
