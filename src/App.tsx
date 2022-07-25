import "./global.css"

import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './scenes/home/Home'
import { ShoppingCart } from './scenes/shopping/ShoppingCart'

export function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='cart/:selectedCard' element={<ShoppingCart/>}/>
    </Routes>
    </BrowserRouter>
  )
}


