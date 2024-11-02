// Importing React Packages
import { RouterProvider } from "react-router-dom";

export default function InitializeApp({ router = {} }) {
  return (
    <RouterProvider router={router} />
  )
}