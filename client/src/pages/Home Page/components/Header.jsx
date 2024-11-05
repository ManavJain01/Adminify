// Importing React Packages
import {Link} from 'react-router-dom';
import { useState } from 'react';

// Importing Redux Packages
import { useSelector } from 'react-redux';

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";
import useWindowSize from '../../../hooks/useWindowSize';

// Importing Local Files
import HamMenu from './Header/HamMenu';

export default function Header() {
  // useSelector
  const cart = useSelector(state => state.cart.cart);

  // Custom Hooks
  const { isLogin, logout } = useUser();
  const { width } = useWindowSize();

  // useState
  const [isPaymentSuccessfull, setIsPaymentSuccessfull] = useState(true);

  if( width > 700 ) return (
    <div className="z-[999999] sticky top-0 left-0 bg-black flex items-center justify-between px-10 py-5">
      <Link to="/" className="font-semibold text-2xl">{import.meta.env.VITE_REACT_APP_WebsiteName || "Please enter website name"}</Link>

      <div className="text-lg flex gap-5">
        {isLogin
          && <span className="hover:text-white/50 duration-500">Hi, User</span>
        }
        {isPaymentSuccessfull
          && <Link to="/admin" className="hover:text-white/50 duration-500">Admin</Link>
        }
        <Link to="/pricing" className="hover:text-white/50 duration-500">Pricing</Link>
        
        <section className="relative">
          <Link to="/cart" className="hover:text-white/50 duration-500">Cart</Link>

          {cart?.length > 0
            && <div className="absolute -top-1 left-8 text-[10px] bg-blue-700 flex items-center justify-center w-[14px] h-[14px] rounded-full">{cart?.length}</div>
          }
        </section>
        
        {!isLogin
          ? <>
            <Link to="/login" className="hover:text-white/50 duration-500">Login</Link>
            <Link to="/signup" className="hover:text-white/50 duration-500">Signup</Link>
          </>
          :<button onClick={() => logout()} className="hover:text-red-500/50 duration-500">Logout</button>
        }
      </div>
    </div>
  )
  else return (
    <HamMenu />
  )
}