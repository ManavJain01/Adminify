// Importing React Packages
import React from 'react' 
import ReactDOM from 'react-dom/client'
import '../../public/assets/styles/index.css'
import { RouterProvider, createBrowserRouter, Route, Navigate } from 'react-router-dom'

// Importing Local Components
import HomePage from '../pages/Home Page/Main'
import Login from '../pages/Login-Signup/Login'
import Signup from '../pages/Login-Signup/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <Signup />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)