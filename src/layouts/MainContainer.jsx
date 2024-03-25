import React from 'react'
import NavigationApp from './NavigationApp'
import { Outlet } from 'react-router-dom'

function MainContainer() {
  return (
    <div className='app-container'>
      <NavigationApp />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainContainer
