import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { Header } from '../components/Header'
import { useState } from 'react'
import { useEffect } from 'react'

export const Home = () => {



  return (
    <>

      <Outlet/>

    </>
  )
}
