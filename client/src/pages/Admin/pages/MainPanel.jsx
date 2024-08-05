// Importing React Packages
import { Link } from "react-router-dom"

export default function MainPanel() {
  return (
    <div className="flex flex-wrap justify-around items-center gap-8">
      <Link to="/admin/subscription">User Credentials</Link>
      <Link to="/admin/subscription">Subscription</Link>
      <Link to="/admin/subscription">Broadcast</Link>
    </div>
  )
}