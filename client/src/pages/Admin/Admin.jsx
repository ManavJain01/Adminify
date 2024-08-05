// Importing routing
import { Outlet } from 'react-router-dom'

// Importing Local files
import Header from './components/Header'

export default function Admin() {
  return (
    <div className="text-lg text-white bg-[#222] flex flex-col w-lvw min-h-lvh">
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  )
}