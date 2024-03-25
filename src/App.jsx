import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContainer from './layouts/MainContainer'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainContainer />}>
        <Route path='login' element={<h1>Login Page</h1>} />
        <Route path='sign-up' element={<h1>Sign Up Page</h1>} />
        <Route index path='/' element={<h1>Catatan Active</h1>} />
        <Route path='/archives' element={<h1>Catatan Archive</h1>} />
      </Route>
    </Routes>
  )
}

export default App
