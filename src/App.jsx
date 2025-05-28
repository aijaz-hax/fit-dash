import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='container'>
       <Sidebar/>
       <Dashboard/>
    </div>
  )
}

export default App
