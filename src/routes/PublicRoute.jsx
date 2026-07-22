import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet, useNavigate } from 'react-router';

const PublicRoute = () => {
let navigate=useNavigate();
    let {loggedUser}=useContext(Auth);
   if (loggedUser) {
    return <Navigate to={"/main"} />;
  }
  return (

    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoute
