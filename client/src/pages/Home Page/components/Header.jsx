// Importing React Packages
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      <Link to="/" className="font-semibold text-2xl">Fithub</Link>

      <div className="text-lg flex gap-5">
        <Link to="/pricing">Pricing</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  )
}