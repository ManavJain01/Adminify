// Importing React Packages
import React from 'react' 
import ReactDOM from 'react-dom/client'
import '../../public/assets/styles/index.css'
import { RouterProvider, createBrowserRouter, Route, Navigate } from 'react-router-dom'

// Importing Local Components
import Main from '../Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children : [
    ]
  }   
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
