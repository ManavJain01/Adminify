// Importing React Packages
import React from "react";
import ReactDOM from "react-dom/client";
import "../../public/assets/styles/index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Navigate,
} from "react-router-dom";

// Importing Redux Configuration
import { Provider } from "react-redux";
import { store } from "../Redux/Store/store";

// Importing Socket io
import { SocketContextProvider } from "../context/SocketContext";

// Importing Local Components
  // Basic Routes
import Home from "../pages/Home Page/Home";
import Home_Main from "../pages/Home Page/components/Main";
import Pricing from "../pages/Pricing/Pricing";
import Login from "../pages/Login-Signup/Login";
import Signup from "../pages/Login-Signup/Signup";
import AdminCreation from "../pages/Home Page/AdminCreation";
import CompanyDetails from "../pages/Home Page/Main";
import ContactUs from "../pages/company/ContactUs";
import AboutUs from "../pages/company/AboutUs";
  // Customer Related Routes
import Admin from "../pages/Admin/Admin";
import MainPanel from "../pages/Admin/pages/MainPanel";
import Customers from "../pages/Admin/pages/Customers";
import Messages from "../pages/Admin/pages/Messages";
import Products from "../pages/Admin/pages/Products";
import Subscriptions from "../pages/Admin/pages/Subscriptions";
import Broadcast from "../pages/Admin/pages/Broadcast";
import Reports from "../pages/Admin/pages/Reports";
import Settings from "../pages/Admin/pages/Settings";
import CreateUser from "../pages/Admin/pages/Customers/CreateUser";
import ViewDetails from "../pages/Admin/pages/Customers/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Home_Main />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/companyDetails",
    element: <CompanyDetails />,
  },
  {
    path: "/create-admin",
    element: <AdminCreation />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <MainPanel />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "view-details",
        element: <ViewDetails />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "subscription",
        element: <Subscriptions />,
      },
      {
        path: "broadcast",
        element: <Broadcast />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "create-user",
        element: <CreateUser />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketContextProvider>
        <RouterProvider router={router} />
      </SocketContextProvider>
    </Provider>
  </React.StrictMode>
);
