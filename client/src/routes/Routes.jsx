// Importing React Packages
import React from 'react' 
import ReactDOM from 'react-dom/client'
import '../../public/assets/styles/index.css'
import { RouterProvider, createBrowserRouter, Route, Navigate } from 'react-router-dom'

// Importing Redux Configuration
import {Provider} from 'react-redux'
import {store} from '../Redux/Store/store'

// Importing Local Components
import HomePage from '../pages/Home Page/Main'
import Login from '../pages/Login-Signup/Login'
import Signup from '../pages/Login-Signup/Signup'
import Admin from '../pages/Admin/Admin'
import MainPanel from '../pages/Admin/pages/MainPanel'
import Customers from '../pages/Admin/pages/Customers'
import Messages from '../pages/Admin/pages/Messages'
import Products from '../pages/Admin/pages/Products'
import Subscriptions from '../pages/Admin/pages/Subscriptions'
import Broadcast from '../pages/Admin/pages/Broadcast'
import Reports from '../pages/Admin/pages/Reports'
import Settings from '../pages/Admin/pages/Settings'

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
  {
    path: 'admin',
    element: <Admin />,
    children: [
      {
        path: "",
        element: <MainPanel />
      },
      {
        path: "customers",
        element: <Customers />
      },
      {
        path: "messages",
        element: <Messages />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "subscription",
        element: <Subscriptions />
      },
      {
        path: "broadcast",
        element: <Broadcast />
      },
      {
        path: "reports",
        element: <Reports />
      },
      {
        path: "settings",
        element: <Settings />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)