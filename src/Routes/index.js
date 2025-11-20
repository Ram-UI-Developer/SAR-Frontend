import React from 'react'
import { Routes } from 'react-router-dom'
import HomeRoutes from './HomeRoutes/HomeRoutes'
import AdminRoutes from './AdminRoutes/AdminRoutes';
import Navbar from '../Components/Common/CommonComponents/Navbar';

const AppRouter = () => {
  const instituteData = JSON.parse(sessionStorage.getItem("instituteData"));
  console.log(instituteData, "instituteData")
  if (!instituteData) {
    return (
      <div>
        <Routes>
          {HomeRoutes}
        </Routes>
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <Routes>
        {AdminRoutes}
      </Routes>
    </div>
  )
}

export default AppRouter