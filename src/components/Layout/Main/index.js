import React from 'react'

import Header from '../../global/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='mainlayoutcontainer'>
      <Header />
        <Outlet />

    </div>
  )
}

export default MainLayout
