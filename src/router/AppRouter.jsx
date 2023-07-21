import React from 'react'
import { Footer } from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar'
import { Location } from '../pages/Location'
import { Time } from '../pages/Time'
import { Security } from '../pages/Security'
import { More } from '../pages/More'

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>

    <Route path='/' element={<Home/>}>
      <Route index element={<Location/>}/>
      <Route path='time' element={<Time/>}/>
      <Route path='security' element={<Security/>}/>
      <Route path='more' element={<More/>}/>
    </Route>

    </Routes>

    <Footer/>
    </>
  )
}
