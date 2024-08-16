// Importing routing
import { Outlet } from "react-router-dom";

// Importing React Packages
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Importing Custom Hooks
import { useRefresh } from '../../hooks/useRefresh'
import { useUser } from "../../hooks/useUser";

// Importing Local files
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default function Admin() {
  // redux
  const companyDetails = useSelector((state) => state.company.companyDetails) || {};
  console.log("logo:", companyDetails.logo);
  
  // Custom Hookes
  const { getCompanyDetails } = useRefresh();
  const { getUser } = useUser();

  useEffect(() => {
    const handleRefresh = async () => {
      await getCompanyDetails();
      await getUser();
    }

    handleRefresh();
  }, []);

  return (
    <div className="text-lg text-white bg-[#222] flex flex-col w-lvw min-h-lvh">
      <Header companyDetails={companyDetails} />
      <div className="relative flex-1 flex">
        <Sidebar />
        <div className="px-10 py-5 flex-1">
          <Outlet />
        </div>
      </div>
      <Footer data={{ company: companyDetails.company, owner: companyDetails.owner }} />
    </div>
  );
}
