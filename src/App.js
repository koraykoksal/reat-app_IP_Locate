import { AppRouter } from "./router/AppRouter"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from "react"
import { IP_Context } from './context/UserIPAddress'


function App() {


  return (
    <>
    <AppRouter/>
    </>
  )
}

export default App
