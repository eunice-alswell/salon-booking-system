import React from 'react'
import NavbarCom from './components/NavbarCom'
import {BrowserRouter} from 'react-router-dom'
import Router from './Router';

function App() {
  return (
    <div>
      <NavbarCom/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>

    </div>
  )
}

export default App

