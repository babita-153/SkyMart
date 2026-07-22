import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'

import MainLayout from '../layouts/MainLayout'

import LoginForm from '../pages/LoginForm'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import RegisterForm from '../pages/RegisterForm'
import ProtectedRoute from './ProtectedRoute'
import AuthLayout from '../layouts/AuthLayout'
import PublicRoute from './PublicRoute'
import DetailCard from '../pages/DetailCard'




const AppRoutes = () => {

    const router=createBrowserRouter([
       {
        path:"",
        element:<PublicRoute/>,
        children:[
        {
            path:"",
            element:<AuthLayout/>,
            children:[
                {
                    path:"",
                    element:<LoginForm/>
                },
                {
                    path:"register",
                    element:<RegisterForm/>
                }
            ]
        }
        ]
       },
        {
            path:'/main',
            element:<ProtectedRoute/>,
            children:[
                {
                    path:'',
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<Home/>
                        },
                        {
                            path:'shop',
                            element:<Shop/>,
                           
                        },     
                        {
                                    path:'shop/:id',
                                    element:<DetailCard/>
                        },
                          {
                                    path:'shop/?category=',
                                    element:<Shop/>
                        },   
                               
                        
                        {
                            path:'about',
                            element:<About/>
                        }
                    ]
                }
            ]
        }
        
    ])


  return <RouterProvider router={router}/>
}

export default AppRoutes
