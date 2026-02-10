import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import CourseList from './pages/CourseList'
import SignUp from './pages/SignUp'
import UpdateCourse from './pages/UpdateCourse'
import AddCourse from './pages/AddCourse'
import Login from './pages/Login'
import Cart from './pages/Cart'


import ProtectedRoutes from './route/ProtectedRoutes'
const App = () => {
   let myRouter = createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
               { 
                path:'/',
                element:<ProtectedRoutes>
                  <CourseList/>
                </ProtectedRoutes>
               },
               { 
                path:'/login',
                element:<Login/>
               },
               { 
                path:'/signup',
                element:<SignUp/>
               },
               { 
                path:'/cart',
                element:<Cart/>
               },
               { 
                path:'/update/:id',
                element:<UpdateCourse/>
               },
               { 
                path:'/add',
                element:<AddCourse/>
               }
            ]
        }
    ])
  return (
    <RouterProvider router={myRouter}></RouterProvider>
  )
}

export default App