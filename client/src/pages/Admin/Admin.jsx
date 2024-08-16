// Importing routing
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// Importing Local files
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useUser } from "../../hooks/useUser";
import { useEffect, useState } from "react";

export default function Admin() {
  // redux
  // const user = useSelector((state) => state.user.data) || {};

  const location = useLocation();
  const adminData = location.state || {};

  const { getCompanyDetails } = useUser();
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState({});

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const data = await getCompanyDetails();
        // console.log(data.data);
        setCompanyDetails(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompany();
  }, []);

  const adminCompanyData = {};
  adminCompanyData.admin = adminData;
  adminCompanyData.company = companyDetails;

  return (
    <div className="text-lg text-white bg-[#222] flex flex-col w-lvw min-h-lvh">
      <Header data={adminCompanyData} />
      <div className="relative flex-1 flex">
        <Sidebar />
        <div className="px-10 py-5 flex-1">
          <Outlet />
        </div>
      </div>
      <Footer data={adminCompanyData} />
    </div>
  );
}
