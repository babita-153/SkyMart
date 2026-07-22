import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext'

const ProtectedRoute = () => {
    let navigate=useNavigate()
const {loggedUser}=useContext(Auth)

 if (!loggedUser) {
    return <Navigate to={"/"} />;
  }

  return (
  
     <div> 
        <Outlet/>
     </div>
  
  )
}

export default ProtectedRoute
