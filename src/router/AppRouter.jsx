import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import { Location } from '../pages/Location'
import { Time } from '../pages/Time'
import { Country } from '../pages/Country'
import { More } from '../pages/More'
import { Header } from '../components/Header'
import { useState,useEffect } from 'react'
import { IP_Context } from '../context/UserIPAddress'
import axios from 'axios'
import { Searched } from '../components/Searched'

export const AppRouter = () => {

  const [userip, setuserip] = useState("101.44.220.0")
  const [ipdata, setipdata] = useState("")
  const [searched,setsearched] = useState([])

 
  //get api key
  const getApiK=async()=>{
    try {
      const result = await axios("https://64ba69915e0670a501d61f70.mockapi.io/api/k/getgeo")
      //console.log(result.data[0].geokey)
      getData(result.data[0].geokey)

    } catch (error) {
      console.log(error)
    }
  }
  
  //get geology data
  const getData= async(dataK)=>{
  
    try {

      const res = await axios(`https://api.getgeoapi.com/v2/ip/${userip}?api_key=${dataK}`)
      
      setipdata(res.data)


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
    if(userip){
      getApiK();
      getData();
    }
 
  }, [userip])

  

  return (
    <>
    <IP_Context.Provider value={{userip,setuserip,ipdata,setipdata,searched,setsearched}}>

    <Header/>
    
    <Routes>
        {/* <Route path='/'  element={<Home/>}/> */}
        <Route index element={<Location />}/>
        <Route path='time' element={<Time/>}/>
        <Route path='country' element={<Country/>}/>
        <Route path='more' element={<More/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      {/* </Route> */}
    </Routes>

    <Searched/>

    </IP_Context.Provider>


    </>
  )
}
