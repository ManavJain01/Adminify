// Importing React Icons
import { FaLock } from "react-icons/fa";

// Importing react Packages
import { useSelector } from "react-redux";

export default function LockForNoAuthentication() {
  // useSelector
  const user = useSelector(state => state.user.data);

  if(user?.privilege === "user") return (
    <div className="z-[999999] absolute top-0 left-0 bg-black bg-opacity-95 flex items-center justify-center h-full w-full">
      <FaLock className="size-20" />
    </div>
  );
  else return null;
}