// Importing React Icons
import { PiImageBrokenDuotone } from "react-icons/pi";

// Importing React Packages
import React from "react";
import ReactDOM from "react-dom/client";
import "../../public/assets/styles/index.css";
import { createBrowserRouter } from "react-router-dom";

// Clerk
import { ClerkProvider } from '@clerk/clerk-react'
  // Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

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
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/components/Checkout";
import PaymentSuccessfull from "../pages/Cart/Stripe/SuccessfullPayment"
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
import AllUsersFromDatabase from "../pages/Admin/pages/Customers/AllUsersFromDatabase";
import ViewDetails from "../pages/Admin/pages/Customers/ViewDetails";
import InitializeApp from "./InitializeApp";
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />
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
    path: "/paymentSuccessful",
    element: <PaymentSuccessfull />
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
      },
      {
        path: "database-users",
        element: <AllUsersFromDatabase />,
      }
    ],
  },
]);

const App = () => {
  if(!PUBLISHABLE_KEY) {
    return(
      <div className="text-4xl text-white bg-black flex flex-col items-center justify-center gap-5 w-lvw h-lvh">
        <PiImageBrokenDuotone className="size-40" />
        <span>Error: Clerk publishable key is missing.</span>
      </div>
    )
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <InitializeApp router={router} />
    </ClerkProvider>
  ) 
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </Provider>
  </React.StrictMode>
);