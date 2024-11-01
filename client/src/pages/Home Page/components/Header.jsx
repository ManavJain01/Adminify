// Importing React Packages
import {Link} from 'react-router-dom';

// Importing Custom Hooks
import { useRefresh } from "../../../hooks/useRefresh";
import { useUser } from "../../../hooks/useUser";

export default function Header() {
  // useUser
  // const { isLogin } = useRefresh();
  const { isLogin, logout } = useUser();

  return (
    <div className="z-[999999] sticky top-0 left-0 bg-black flex items-center justify-between px-10 py-5">
      <Link to="/" className="font-semibold text-2xl">{import.meta.env.VITE_REACT_APP_WebsiteName || "Please enter website name"}</Link>

      <div className="text-lg flex gap-5">
        {isLogin
          && <span className="hover:text-white/50 duration-500">Hi, User</span>
        }
        <Link to="/pricing" className="hover:text-white/50 duration-500">Pricing</Link>
        <Link to="/cart" className="hover:text-white/50 duration-500">Cart</Link>
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
}