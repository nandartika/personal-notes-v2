import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContainer from './layouts/MainContainer'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainContainer />}>
        <Route index path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/notes' element={<h1>Catatan Active</h1>} />
        <Route path='/archives' element={<h1>Catatan Archive</h1>} />
      </Route>
    </Routes>
  )
}

export default App
