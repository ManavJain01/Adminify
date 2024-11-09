// Importing routing
import { Outlet, useNavigate } from "react-router-dom";

// Importing React Packages
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Importing Custom Hooks
import { useRefresh } from "../../hooks/useRefresh";
import { useUser } from "../../hooks/useUser";

// Importing Local files
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import NoCompany from "./components/NoCompany";

export default function Admin() {
  // useNavigate
  const navigate = useNavigate();

  // redux
  const companyDetails = useSelector((state) => state.company.companyDetails) || {};
  const user = useSelector((state) => state.user.data);

  // Custom Hookes
  const { getCompanyDetails } = useRefresh();
  const { getUser } = useUser();

  useEffect(() => {
    const handleRefresh = async () => {
      if(!localStorage.getItem("authToken")) navigate("/");
      
      await getUser();
    };

    handleRefresh();
  }, []);

  useEffect(() => {
    const handleRefresh = async () => {      
      if(user && user.companyId) await getCompanyDetails();
    };

    handleRefresh();
  }, [user]);

  if(user && user.companyId) return (
    <div className="text-lg text-white bg-[#222] flex flex-col w-lvw min-h-lvh">
      <Header companyDetails={companyDetails} user={user} />
      <div className="relative flex-1 flex">
        <Sidebar />
        <div className="px-10 py-5 flex-1">
          <Outlet />
        </div>
      </div>
      <Footer
        data={{ company: companyDetails.company, owner: companyDetails.owner }}
      />
    </div>
  );
  else return (
    <NoCompany user={user} />
  )
}
